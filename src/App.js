import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import './App.css';
import About from './Components/About'; 
import Contact from './Components/Contact';
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import Home from './Components/Home';
import NavBar from "./Components/NavBar";
import Product from "./Components/Product";
import Products from "./Components/products";
import Projects from './Components/Projects';
import SharedProductComponent from "./Components/sharedProuctComponent";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        {/* components which are to be routed should be wrapped by Routes */}
        <Routes>
          {/* path & elements are the inbuild property of Route component;"/"- the backslash denotes to an home page= http://localhost:3000 */}
          {/* In path we define the path for the browser in which the components needs to be rendered, element we define the component needs to be rendered. */}
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
          {/* //This is normal routing for ynamic values.
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:productId" element={<Product />}/> */}
          {/* Nested routing. If we don't use outlet inside sharedProductComponent means only sharedProductComponent will render
          and the child route components won't display. */}
          <Route path="/products" element={<SharedProductComponent />}>
            {/* To set Products component as a default component for parent component, we can use "index" property instead of path="/products" */}
            <Route index element={<Products />}/>
          {/* This productId is act as a variable and its an key of the object(useParams() returns a object) and the
          value(dynamic value) for this there where we call Product component by clicking the more info of the specific product*/}
            <Route path=":productId" element={<Product />}/>
          </Route>
          <Route path="*" element={<Error />}/>
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
