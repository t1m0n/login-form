import { useEffect, useRef } from 'react';
import { StyledCanvas } from ':ui/Preloader/styled';

interface PreloaderProps {
  size?: number;
  color?: string;
  width?: number;
  className?: string;
}
export const Preloader = ({
  size = 32,
  color = '#A4A7AE',
  width = 3,
  className,
}: PreloaderProps) => {
  const $canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!$canvas.current) return;
    const ctx = $canvas.current.getContext('2d');

    const ratio = window.devicePixelRatio || 1;
    $canvas.current.width = size * ratio;
    $canvas.current.height = size * ratio;

    if (!ctx) return;

    ctx.scale(ratio, ratio);

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.arc(size / 2, size / 2, size / 2 - width, 0, Math.PI * 1.75);
    ctx.strokeStyle = color;
    ctx.stroke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <StyledCanvas ref={$canvas} size={size} className={className} />;
};
