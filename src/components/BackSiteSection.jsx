import { ScroolToBottom } from "../utils/LearnMoreScroll";

function BacksiteSection() {
  return (
    <div className="backsite-section sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">Camera & Chip</h2>
          <p className="text">Dual-camera system & A15 Bionic chip</p>
          <span className="description">
            26 mm, ƒ/1.5 aperture, sensor‑shift optical image stabilization, And
            6‑core CPU with 2 performance and 4 efficiency cores
          </span>

          <ul className="links">
            <li>
              <button className="button">Buy</button>
            </li>
            <li>
              <a
                className="link learn-more"
                onClick={() => ScroolToBottom(".display-section")}
              >
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BacksiteSection;
