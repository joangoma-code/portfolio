
export default function Footer() {
  return (
    <footer className="border-t border-(--color-border) py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 md:flex-row">
        <p>
          Creado usando Next.js, React y Tailwind CSS.
        </p>

        <p>
          Desarrollado en Windows & Linux con Git y GitHub.
        </p>
      </div>
    </footer>
  );
}