import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all";

  const variants = {
    primary:
      "bg-(--color-primary) text-white hover:bg-(--color-secondary) ",

    secondary:
      "border border-black text-red hover:border-(--color-secondary)",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}