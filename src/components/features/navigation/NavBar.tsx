import type { MovieData } from "../../../types/movie";
import { Logo } from "../../common";
import Search from "./Search";
import SearchResults from "./SearchResults";

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
