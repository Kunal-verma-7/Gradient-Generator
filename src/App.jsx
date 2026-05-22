import Navbar from "./component/nav";
import GradientGenerator from "./component/gradient";
import Footer from "./component/footer";  
import GradientCards from "./component/exploreGradients";
import About from "./component/about";
import Contact from "./component/contact";
// import './index.css'
function App() {
  return (
    <div>
      <Navbar/>
      <GradientGenerator />
      <GradientCards/>
      <Footer/>

      
    </div>
  );
}

export default App;
