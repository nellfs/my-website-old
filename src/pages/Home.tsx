import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="container">
        <div className="title">
          <h1>Sou Um Desenvolvedor Que Adora Criar Coisas Novas</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
