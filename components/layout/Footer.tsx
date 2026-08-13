import MountainFooter from "@/components/ui/mountains/mountainFooter";

export default function Footer() {
  return (
    <footer className="relative w-full" tabIndex={0}>
      <MountainFooter className="relative -bottom-1" />
      <div className=" relative bg-(--color-card) pb-8 pt-4 md:pt-0">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center justify-between gap-4 px-6 text-sm md:flex-row ">
          <p>Created with Next.js, React & Tailwind CSS.</p>
          <p>Developed on Windows & Linux with Git & GitHub.</p>
        </div>
      </div>
    </footer>
  );
}
