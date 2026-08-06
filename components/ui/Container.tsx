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
      className={`mx-auto w-full max-w-container px-[4vw] py-16 ${className}`}
    >
      {children}
    </div>
  );
}