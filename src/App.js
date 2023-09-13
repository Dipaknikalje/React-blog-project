// import "./App.css";
// import './Components/Header/Header.css'
// import './Pages/Home/Home.css'

import Heading from "./Components/Header/Heading";
import RouteComp from "./Utility/Routes";
import Nav from "./Components/Header/Nav";
import Details from "./Utility/Details";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="Bodywrap">
        <Details>
          <Heading />
          <Nav />
          <RouteComp />
        </Details>
      </div>
      <Footer />
    </>
  );
}

export default App;
