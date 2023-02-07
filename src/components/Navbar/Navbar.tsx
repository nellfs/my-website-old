import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="items">
        <FontAwesomeIcon
          icon={faTwitter}
          color="white"
          size="lg"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faLinkedinIn}
          color="white"
          size="lg"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Navbar;
