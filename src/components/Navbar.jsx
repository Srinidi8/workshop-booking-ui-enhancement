import { useState } from "react";
import "./Navbar.css";

function Navbar({ setPage }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>FOSSEE</h2>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {open && (
        <div className="mobile-menu">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("booking")}>Book</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
