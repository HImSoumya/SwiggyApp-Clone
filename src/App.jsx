import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home"; 
import SingleRestaurant from "./pages/SingleRestaurant";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/singleRestaurant/:id" element={<SingleRestaurant/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
