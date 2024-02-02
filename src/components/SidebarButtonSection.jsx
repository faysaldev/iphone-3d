function SidebarButtonSection() {
  const ScrollToBottom = () => {
    const element = document.querySelector(".font-site-section");
    window.scrollTo({
      top: element.getBoundingClientRect().top,
      x: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sidebarsite-section sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">External Buttons and Connectors</h2>
          <p className="text">Volume & Silent </p>
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

export default SidebarButtonSection;
