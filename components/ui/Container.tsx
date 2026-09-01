type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
};

export default function Container({
  children,
  className = "",
  ref,
}: ContainerProps) {
  return (
    <div
      ref={ref}
      className={`container-style max-w-7xl py-16 ${className}`}
    >
      {children}
    </div>
  );
}