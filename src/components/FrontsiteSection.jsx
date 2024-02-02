function FrontsiteSection() {
  const ScrollToBottom = () => {
    const element = document.querySelector(".backsite-section");
    window.scrollTo({
      top: element.getBoundingClientRect().top,
      x: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sound-section front-site-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">Super Retina XDR display</h2>
          <p className="text">6.7‑inch OLED display</p>
          <span className="description">
            2778‑by‑1284-pixel resolution at 458 ppi
          </span>

          <ul className="links">
            <li>
              <button className="button">Buy</button>
            </li>
            <li>
              <a className="link learn-more" onClick={ScrollToBottom}>
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FrontsiteSection;
