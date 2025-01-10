import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header";
import Navbar from "@/components/Shared/Navbar";

const CommonLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
