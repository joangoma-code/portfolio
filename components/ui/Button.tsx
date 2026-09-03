import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  href,
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-md font-medium transition-all";

  const variants = {
    primary:
      "bg-(--color-primary) text-(--color-background) hover:bg-(--color-secondary)",

    secondary:
      "border border-(--color-foreground) text-(--color-foreground) hover:border-(--color-primary) hover:text-(--color-primary)",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </Link>
  );
}