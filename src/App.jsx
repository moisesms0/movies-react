import "./App.css";
import { Header } from "./components/Header/header";
import { Navigate, Route, Routes } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { ShowDetails } from "./pages/ShowDetails";
import { LandingPage } from "./pages/LandingPage";
import { Home } from "./pages/home";


function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<LandingPage />} />
          <Route path="/trending" element={<LandingPage />} />
          <Route path="/movie/:movieid" element={<MovieDetails />} />
          <Route path="/show/:movieid" element={<ShowDetails />} />
          <Route path="*" element={<Navigate replace to="/"></Navigate>} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
