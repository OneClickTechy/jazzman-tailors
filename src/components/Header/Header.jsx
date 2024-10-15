import AddressBar from "./AddressBar/AddressBar";
import Logo from "./Logo/Logo";
import NavBar from "./Navigations/NavBar";
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
  return (
    <header className="header flex flex-col">
      <AddressBar />
      <div className="flex justify-between items-center">
        <Logo />
        
        <nav>
          <NavBar />
        </nav>

        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
