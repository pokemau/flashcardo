import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="main-container">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
