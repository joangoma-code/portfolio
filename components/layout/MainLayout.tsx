import Navbar from "./Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
}