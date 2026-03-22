import { useState, createContext } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Subgallery from "./components/Subgallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="app">
      <AppContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Header />

          {/* 👇 THIS IS IMPORTANT */}
          <div className="app-content">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/subgallery/:name" element={<Subgallery />} />
              <Route path="logout" element={<Logout />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;