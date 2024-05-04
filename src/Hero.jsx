import heroImg from "./assets/undraw_waiting__for_you_ldha.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Mixtape farm-to-table bitters, chartreuse four dollar toast normcore
            organic you probably haven't heard of them schlitz echo park hashtag
            next level.
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
