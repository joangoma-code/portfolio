import Navbar from "./Navbar";
import Footer from "./Footer";
import SideNav from "./SideNav";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <SideNav />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}