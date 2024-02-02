import Iphone from "../assets/iphone-14.jpg";
import HoldOnIphone from "../assets/iphone-hand.png";
import { ScroolToBottom } from "../utils/LearnMoreScroll";

function HeroSection() {
  return (
    <div className="hero-section wrapper">
      <h2 className="title">New</h2>
      <img src={Iphone} alt="" className="logo" />
      <p className="text">Big and bigger.</p>
      <span className="description">
        From $51.21/mo . for 24 mo . or $1189 before trade-in
      </span>

      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a
            onClick={() => ScroolToBottom(".sound-section")}
            className="link learn-more"
          >
            Learn more
          </a>
        </li>
      </ul>

      <img src={HoldOnIphone} alt="" className="iphone-img" />
    </div>
  );
}

export default HeroSection;
