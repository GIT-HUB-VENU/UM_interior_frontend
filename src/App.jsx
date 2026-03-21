import { useState, createContext } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Subgallery from "./components/Subgallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";

export const AppContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <AppContext.Provider value={{ user, setUser, cart, setCart }}>
        <BrowserRouter>
          <Header />

          {/* 👇 THIS IS IMPORTANT */}
          <div className="app-content">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/subgallery/:name" element={<Subgallery />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;