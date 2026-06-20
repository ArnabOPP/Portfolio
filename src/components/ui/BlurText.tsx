'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
}

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  animationFrom,
  animationTo,
  onAnimationComplete,
  stepDuration = 0.35,
}: BlurTextProps) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(12px)', opacity: 0, y: -40 }
        : { filter: 'blur(12px)', opacity: 0, y: 40 },
    [direction]
  );

  const defaultTo = useMemo(
    () => ({ filter: 'blur(0px)', opacity: 1, y: 0 }),
    []
  );

  const from = animationFrom ?? defaultFrom;
  const to = animationTo ? animationTo[animationTo.length - 1] : defaultTo;

  return (
    <p
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.3em' }}
    >
      {elements.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block will-change-[transform,filter,opacity]"
          initial={from}
          animate={to}
          transition={{
            duration: stepDuration * 2,
            delay: (index * delay) / 1000,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
