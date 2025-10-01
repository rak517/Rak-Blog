interface FileIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function FileIcon({ className = '', width = 16, height = 16 }: FileIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 16 16' className={className} xmlns='http://www.w3.org/2000/svg'>
      <path
        fill='currentColor'
        d='M13.5 1h-11A1.5 1.5 0 001 2.5v11A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0013.5 1zM2.5 2h11a.5.5 0 01.5.5V4H2V2.5a.5.5 0 01.5-.5z'
      />
    </svg>
  );
}
