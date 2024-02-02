function SoundSection() {
  const ScrollToBottom = () => {
    const element = document.querySelector(".front-site-section");
    window.scrollTo({
      top: element.getBoundingClientRect().top,
      x: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound Systems</h2>
          <p className="text"> Teel The base.</p>
          <span className="description">
            From $51.21/mo . for 24 mo . or $1189 before trade-in
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

export default SoundSection;
