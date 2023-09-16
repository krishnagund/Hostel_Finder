import Navbar from "../Navbar/Navbar";
import "./LandingPage.css";
export default function LandingPage() {
  return (
    <div className="main">
      <Navbar />
      <div className="content">
        <div className="titleContainer">
          <h1 className="title">
            <span className="accent">Hostel</span> Finder
          </h1>
          <p>Find the best hostel for your next adventure !</p>
        </div>
      </div>
    </div>
  );
}
