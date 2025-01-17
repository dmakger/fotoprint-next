import React from 'react';
import cl from './_Skeleton.module.scss';
import { cls } from '@/shared/lib/classes.lib';

interface SkeletonProps {
	width?: string;
	height?: string;
	radius?: string;
	circle?: boolean;
	animation?: boolean;
	className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
	// width = '100%',
	// height = 'auto',
	width,
	height,
	radius = '4px',
	circle = false,
	animation = true,
	className,
}) => {
	const style = {
		width,
		height,
		borderRadius: circle ? '50%' : radius,
	};

  return (
    <div style={style} className={cls(cl.skeleton, animation ? cl.animation : '', className)} />
  );
};

export default Skeleton;