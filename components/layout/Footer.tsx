import MountainFooter from "@/components/ui/mountains/mountainFooter";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full">
      <MountainFooter className="relative -bottom-1" />
      <div className=" relative bg-(--color-card) pb-8 pt-4 md:pt-0">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center justify-between gap-4 px-14 text-sm md:flex-row ">
          <p>© {year} Joan Goma. Built with care.</p>
          <p>Crafted with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
