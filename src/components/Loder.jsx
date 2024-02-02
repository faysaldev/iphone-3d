import AnimatedLogo from "../assets/logo-animated.gif";

function Loder() {
  return (
    <div className="loader">
      <img src={AnimatedLogo} alt="" className="logo" />
    </div>
  );
}

export default Loder;
