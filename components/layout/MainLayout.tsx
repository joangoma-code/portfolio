import Navbar from "./Navbar";
import Footer from "./Footer";
import SideNav from "./SideNav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
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