import Tilt from 'react-parallax-tilt';
import "./Logo.css";
import brain from "./brain.png";

export const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt style={{ width: "125px", height: "125px" }}>
        <div
          className="Tilt br2 shadow-2"
          style={{
            height: "100%",
            width: "100%",
            padding: "20px",
            backgroundColor: "darkgreen",
            display: "flex",
          }}
        >
          <img src={brain} alt='brain-image'></img>
        </div>
      </Tilt>
    </div>
  );
}