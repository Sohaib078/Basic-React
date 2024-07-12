import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDo from "./pages/ToDo";
import Navbar from "./UI/Navbar";
import Weather from "./pages/Weather";
import Form from "./pages/Form";
import Products from "./pages/Products";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/ToDo" element={<ToDo />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
