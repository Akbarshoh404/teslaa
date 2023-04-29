import {Routes , Route} from "react-router-dom"
import Iphone from "./Iphone";
import Product from "./Product";


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Product/>}/>
    <Route path="/product/:id" element={<Iphone/>}/>
    </Routes>
    </>
  );
}

export default App;
