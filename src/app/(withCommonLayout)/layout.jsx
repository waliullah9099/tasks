import Footer from "@/Components/Shared/Footer/Footer";
import Header from "@/Components/Shared/Header";
import Navbar from "@/Components/Shared/Navbar";

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
