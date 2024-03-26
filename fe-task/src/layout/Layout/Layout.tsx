import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
