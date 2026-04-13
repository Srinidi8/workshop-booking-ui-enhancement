import { useState } from "react";
import "./HomePage.css";

const workshopsData = [
  { title: "Python Basics", level: "Beginner" },
  { title: "AI & ML", level: "Intermediate" },
  { title: "Web Development", level: "Beginner" },
  { title: "Data Science", level: "Advanced" },
];

function HomePage({ setPage }) {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");

  const filtered = workshopsData.filter((w) => {
    return (
      w.title.toLowerCase().includes(search.toLowerCase()) &&
      (level === "All" || w.level === level)
    );
  });

  return (
    <div className="home">
      {/* HERO */}
      <div className="hero-box">
        <h1>Book Workshops Easily</h1>
        <p>Discover top workshops with a seamless experience.</p>
        <button onClick={() => setPage("booking")}>Get Started →</button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search workshops..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setLevel(e.target.value)}>
          <option>All</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      {/* CARDS */}
      <div className="workshop-grid">
        {filtered.map((w, i) => (
          <div key={i} className="card">
            <h3>{w.title}</h3>
            <p>{w.level}</p>
            <button onClick={() => setPage("booking")}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
