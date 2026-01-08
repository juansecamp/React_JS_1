import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Raven Store</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="#">Procesadores</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Placas de Video</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Monitores</a></li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};
export default Navbar;