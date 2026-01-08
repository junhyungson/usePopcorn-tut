import Logo from "../Logo";
import type { MovieData } from "../types/movie";
import Search from "./Navbar/Search";
import SearchResults from "./Navbar/SearchResults";

interface NavBarProps {
  movies: MovieData[];
}

const NavBar = ({ movies }: NavBarProps) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <SearchResults movies={movies} />
    </nav>
  );
};

export default NavBar;
