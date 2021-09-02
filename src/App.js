import "./App.css";
import Navigation from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import Extensions from "./components/Extensions/Extensions";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Tabs />
      <Extensions />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
