import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDo from "./pages/ToDo";
import Navbar from "./UI/Navbar";
import Weather from "./UI/Weather";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/ToDo" element={<ToDo />} />
          <Route path="/Weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
