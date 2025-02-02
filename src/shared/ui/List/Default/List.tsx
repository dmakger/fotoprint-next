import React from 'react';

import { cls } from '@/shared/lib/classes.lib';
import cl from './_List.module.scss'

import { IList } from "../../../model/list.model";
import { DEFAULT__LIST_DIRECTION } from "@/shared/data/list.data";
import { useScrollToTop } from '@/shared/hooks/useScrollToTop.hooks';

interface ListProps<T> extends IList<T> {}

export const List = <T extends any>({
    isLoading,
    loadingProps,
    componentLoading: ListItemComponentLoading,
    
    componentBetween: ListItemComponentBetween,
    componentAfter: ListItemComponentAfter,
    
    items=[], 
    listRef,
    component: ListItemComponent,
    componentProps,
    isScrollToTopNeeded = false,
    direction = DEFAULT__LIST_DIRECTION,
    activeId,
    activeIndex,
    gap,
    onClickItem = () => {},
    onClickDelete,
    generateKey,
    style,
    className,
    classNameItem,
    ...rest
}: ListProps<T>) => {

    // Loading Props
    const {length: lengthLoading,  ...updatedLoadingProps} = loadingProps ?? {}

    // HANDLE

    // Объединяем className из componentProps с classNameItem, если они оба существуют
    const updatedComponentProps = {
        ...componentProps,
        className: cls(componentProps?.className, classNameItem)
    };

    isScrollToTopNeeded && useScrollToTop();

    return (
        <div ref={listRef} style={{ gap: `${gap}px` }} className={cls(cl.list, cl[direction], className)} {...rest}>
            {(isLoading && !!ListItemComponentLoading) ? (
                <>
                    {Array.from({ length: lengthLoading ?? 5 }).map((_, index) => (
                        <React.Fragment key={index}>
                            <ListItemComponentLoading {...updatedLoadingProps} />
                        </React.Fragment>
                    ))}
                </>
            ) : (
                items.map((it, index) => (
                    <React.Fragment key={generateKey ? generateKey(it, index) : (it && typeof it === 'object' && 'id' in it ? it.id as number : index)}>
                        <ListItemComponent
                            {...updatedComponentProps}
                            item={it}
                            style={style}
                            onClick={() => onClickItem(it, index)}
                            onClickDelete={onClickDelete ? () => onClickDelete(it, index) : undefined}
                            activeId={activeId}
                            isActive={activeIndex === index || !!(it && typeof it === 'object' && 'id' in it && it.id && activeId === it.id)}
                        />
                        {(ListItemComponentBetween && index + 1 !== items.length) && (
                            <>{ListItemComponentBetween}</>
                        )}
                        {ListItemComponentAfter}
                    </React.Fragment>
                ))
            )}
        </div>
    );
}
