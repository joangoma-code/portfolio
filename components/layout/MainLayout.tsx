import Navbar from "./Navbar";
import Footer from "./Footer";
import SideNav from "./SideNav";
import ClickProbe from "../ui/ClickProbe";


export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <SideNav />
      <ClickProbe />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}