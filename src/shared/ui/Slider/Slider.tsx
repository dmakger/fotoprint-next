import { cls } from '@/shared/lib/classes.lib';
import cl from './_Slider.module.scss';
import { List } from "../List/Default/List";
import { useEffect, useRef, useState } from 'react';
import { ISlider } from '@/shared/model/slider.model';
import { ListDirection } from '@/shared/data/list.data';
import { SliderPagingVariant, SWIPE_THRESHOLD } from '@/shared/data/slider.data';
import { GalleryCounter } from '../GalleryCounter';
import { Axis } from '@/shared/data/axis.data';
import { ButtonArrow } from '../Button/variant/Arrow/ButtonArrow';

interface SliderProps<T> extends ISlider<T> {}

// Constants
/**
 * `pagingVariant`:  
 * 1. `SliderPagingVariant.Full` - перелистование на всю страницу  
 * 2. `SliderPagingVariant.Amount` - перелистование по `pagingAmount`
 * ---
 * `isFull`:  
 * - 1. `true`, то ширина`item` равна **ВСЕЙ ВИДИМОСТИ** области. (Только один `item` помещается на экран)
 * - 2. `false`, то ширина `item` равна **САМОЙ СЕБЕ**. (Может вмещаться разное кол-во `item`-ов) 
 * ---
 * `isIndexChangeOnClick`:  
 * - 1. `true`, то при прожатии кнопок `onPrev` и `onNext`, то происходит **МЕНЯЕТСЯ** `activeIndex`
 * - 2. `false`, то при прожатии кнопок `onPrev` и `onNext`, то происходит **НЕ МЕНЯЕТСЯ** `activeIndex`
 */

export const Slider = <T extends any>({
    pagingVariant = SliderPagingVariant.Amount,
    pagingAmount: pagingOutAmount = 1,
    slideWidth: slideWidthOut,
    isFull = false,
    isIndexChangeOnClick = false,
    classNameWrapper,
    className,
    classNameItem,
    classNameSlider,

    hasGalleryCounter = false,

    isLoading,
    items,
    direction = ListDirection.Row,
    activeIndex = 0,
    setActiveIndex=()=>{},
    gap = 0,
    ...rest
}: SliderProps<T>) => {

    // REFS
    const sliderRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    // STATE
    const [slideSize, setSlideSize] = useState(0);
    const [sliderSize, setSliderSize] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(activeIndex);
    const [visibleIndex, setVisibleIndex] = useState(activeIndex);
    const [pagingAmount, setPagingAmount] = useState(pagingOutAmount);

    // console.log('qwe pagingAmount', pagingAmount,)
    
    // Swipe State
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);

    // EFFECT
    useEffect(() => {
        if (!items) return;
    }, [items])

    // out-in 
    useEffect(() => {
        setActiveIndex(currentIndex)
        setVisibleIndex(currentIndex)
    }, [currentIndex])

    useEffect(() => {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex === activeIndex ? prevIndex : activeIndex
            setVisibleIndex(newIndex)
            return newIndex
        })
    }, [activeIndex])

    // pagingAmount
    useEffect(() => {
        if (pagingVariant === SliderPagingVariant.Amount) {
            setPagingAmount(prev => !prev || Number.isNaN(prev) ? 1 : prev)
            return;
        }
        setPagingAmount(() => Math.floor(sliderSize / slideSize) ?? 1)
    }, [pagingVariant, sliderSize, slideSize])

    // Calculate sizes on resize and mount
    useEffect(() => {
        if (!items) return;

        const handleResize = () => {
            let offsetSize = sliderRef.current?.offsetWidth || 0;
            let scrollSize = listRef.current?.scrollWidth || 0;
            
            if (direction === ListDirection.Column) {
                offsetSize = sliderRef.current?.offsetHeight || 0;
                scrollSize = listRef.current?.scrollHeight || 0;
            }

            setSliderSize(offsetSize);

            if (isFull) {
                setSlideSize(offsetSize); // ширина слайда = ширина контейнера
            } else {
                const calculatedSlideWidth = (scrollSize - gap * (items.length - 1)) / items.length;
                setSlideSize(slideWidthOut || calculatedSlideWidth);
            }
        };
    
        handleResize();

        const resizeObserver = new ResizeObserver(handleResize);
        if (sliderRef.current) {
            resizeObserver.observe(sliderRef.current);
        }
        if (listRef.current) {
            resizeObserver.observe(listRef.current);
        }

        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
            if (sliderRef.current) {
                resizeObserver.unobserve(sliderRef.current);
            }
            if (listRef.current) {
                resizeObserver.unobserve(listRef.current);
            }
        };
    }, [sliderRef, listRef, slideWidthOut, gap, items?.length, direction, isFull]);

    // Sync scroll position with activeIndex
    useEffect(() => {
        if (!sliderRef.current || !listRef.current) return;

        const newScrollPosition = visibleIndex * (slideSize + gap);

        if (direction === ListDirection.Row) {
            sliderRef.current.scrollLeft = newScrollPosition;
        } else {
            sliderRef.current.scrollTop = newScrollPosition;
        }
    }, [visibleIndex, slideSize, gap, direction]);

    // Update scroll state
    useEffect(() => {
        if (!items) return;

        const updateScrollState = () => {
            if (!sliderRef.current) return;

            let scrollSize = sliderRef.current.scrollWidth;
            let clientSize = sliderRef.current.clientWidth;
            let scrollPosition = sliderRef.current.scrollLeft;

            if (direction === ListDirection.Column) {
                scrollSize = sliderRef.current.scrollHeight;
                clientSize = sliderRef.current.clientHeight;
                scrollPosition = sliderRef.current.scrollTop;
            }

            const maxScroll = scrollSize - clientSize;
            setCanScrollPrev(scrollPosition > 0);
            setCanScrollNext(scrollPosition < maxScroll);
        };

        updateScrollState();

        const handleScroll = () => {
            updateScrollState();
        };

        sliderRef.current?.addEventListener('scroll', handleScroll);

        return () => {
            sliderRef.current?.removeEventListener('scroll', handleScroll);
        };
    }, [sliderSize, slideSize, gap, items?.length, direction]);

    // NAVIGATION
    const onPrev = () => {
        if (isLoading) return;

        setVisibleIndex((prev) => {
            const newIndex = Math.max(0, prev - pagingAmount);
            if (isIndexChangeOnClick) {
                setCurrentIndex(newIndex);
            }
            return newIndex;
        });
    };

    const onNext = () => {
        if (isLoading || !items) return;

        setVisibleIndex((prev) => {
            const newIndex = Math.min(items.length - 1, prev + pagingAmount);
            if (isIndexChangeOnClick) {
                setCurrentIndex(newIndex);
            }
            return newIndex;
        });
    };

    // Swipe Handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        if (isLoading) return;
        setStartX(e.touches[0].clientX); // фиксируем начальную точку касания
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isLoading) return;
        setEndX(e.touches[0].clientX); // обновляем конечную точку касания
    };

    const handleTouchEnd = () => {
        if (isLoading) return;

        const distance = endX - startX;
        if (Math.abs(distance) > SWIPE_THRESHOLD) {
            // Swipe detected, disable buttons temporarily to prevent double actions
            if (distance > 0) {
                onPrev(); // свайп вправо
            } else if (endX !== 0) {
                onNext(); // свайп влево
            }
        }
    
        setStartX(0);
        setEndX(0);
    };

    return (
        <div
            className={cls(cl.sliderWrapper, cl[direction], isFull ? cl.fullWidth : cl.normalWidth, classNameWrapper)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <ButtonArrow 
                isSecondary={false} direction={direction}
                axis={direction === ListDirection.Row ? Axis.Left : Axis.Top}
                onClick={onPrev} sizes={{ width: 20, height: 20 }}
                className={cls(cl.prevButton, (canScrollPrev && !isLoading) ? cl.visible : '')} />
            <div ref={sliderRef} className={cls(cl.slider, classNameSlider)}>
                <List listRef={listRef} items={items} direction={direction}
                      activeIndex={currentIndex}
                      gap={gap}
                      isLoading={isLoading}
                      className={cls(cl.slideContainer, className)}
                      classNameItem={cls(cl.slide, classNameItem)}
                      {...rest} />
            </div>
            {hasGalleryCounter && items && items.length > 1 && (
                <GalleryCounter activeIndex={currentIndex} listLength={items.length}/>
            )}
            
            <ButtonArrow 
                isSecondary={false} direction={direction}   
                axis={direction === ListDirection.Row ? Axis.Right : Axis.Bottom} 
                onClick={onNext} sizes={{ width: 20, height: 20 }}
                className={cls(cl.nextButton, (canScrollNext && !isLoading) ? cl.visible : '')} />
        </div>
    );
}
