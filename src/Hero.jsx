import heroImg from "./assets/undraw_waiting__for_you_ldha.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Leo's Portfolio</h1>
          <p>
            Hello, world!💡 Welcome to my portfolio. I'm here to help you build innovative web applications by leveraging my programming expertise and collaborative problem-solving skills. I'd love to contribute to your organization's goal of making the world a better place!
          </p>
        </div>
        <div className="img-container">
          <img className="img" src={heroImg} alt="two people and tree" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
