
export default function Footer() {
  return (
    <footer className="border-t border-(--color-border)/30 py-8 bg-(--color-card)/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center justify-between gap-4 px-6 text-sm opacity-70 md:flex-row">
        <p>
          Created with Next.js, React & Tailwind CSS.
        </p>

        <p>
          Developed on Windows & Linux with Git & GitHub.
        </p>
      </div>
    </footer>
  );
}