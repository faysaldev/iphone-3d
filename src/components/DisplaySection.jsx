import { ScroolToTop } from "../utils/LearnMoreScroll";

function DisplaySection() {
  return (
    <div className="display-section wrapper">
      <h2 className="title">Now</h2>
      <p className="text">Brilliant.</p>
      <span className="description">
        A display that{`'s`} up to 2x brighter in the sun.
      </span>

      <button className="button"> Try me!</button>
      <button className="back-button" onClick={ScroolToTop}>
        {" "}
        TOP
      </button>
    </div>
  );
}

export default DisplaySection;
