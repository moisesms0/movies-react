import "./App.css";
import { Header } from "./components/Header/header";
import { Navigate, Route, Routes } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { ShowDetails } from "./pages/ShowDetails";
import { LandingPage } from "./pages/LandingPage";
import { Home } from "./pages/home";
import { TopBar } from "./components/topBar/TopBar";
import { GenreSearch } from "./components/genre/GenreSearch";

function App() {
  return (
    <div className="mainContainerNav">
      <Header />

      <main className="mainContainerContent">
      <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<LandingPage />} />
          <Route path="/trending" element={<LandingPage />} />
          <Route path="/movie/:movieid" element={<MovieDetails />} />
          <Route path="/show/:movieid" element={<ShowDetails />} />
          <Route path="/genre/:genreName" element={<GenreSearch />} />
          <Route path="*" element={<Navigate replace to="/"></Navigate>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
