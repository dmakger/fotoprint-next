"use client";

import React, { FC, ReactNode, useEffect, useRef, useState } from "react";

import cl from './_Sticky.module.scss';
import { cls } from "@/shared/lib/classes.lib";

interface StickyProps {
    children: ReactNode
    className?: string,
}

export const Sticky: FC<StickyProps> = ({ children, className }) => {
    // STATE
    const [isSticky, setIsSticky] = useState(false);
    
    // REF
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting); // Если элемент вышел из области видимости, включаем "липкость"
            },
            { threshold: 0 } // Отслеживаем полностью
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <>
            {/* Невидимый якорь для отслеживания */}
            <div ref={ref} className={cl.anchor} />
            
            {/* Липкий блок */}
            {isSticky && (
                <div className={cls(cl.stickyTitle, className)}>
                    {children}
                </div>
            )}
        </>
    );
};
