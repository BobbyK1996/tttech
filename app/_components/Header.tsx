import Logo from "@components/Logo";
import Navigation from "@components/Navigation";

function Header() {
  return (
    <header className="border-shadow-2xl w-full border-b px-3 py-5">
      <div>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
