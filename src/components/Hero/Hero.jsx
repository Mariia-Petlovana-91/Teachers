import imgHero from '../../img/hero.svg';

const Hero = () => {
  return (
    <section className="hero__container">
      <div className="hero__descript">
        <h1 className="firstTitle">
          Unlock your potential with the best{' '}
          <span className="firstTitle__span">language</span> tutors
        </h1>
        <p className="hero__text">
          Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your
          language proficiency to new heights by connecting with highly qualified and
          experienced tutors.
        </p>
        <button className="btn hero__btn" type="button">
          Get Started
        </button>
      </div>
      <img src={imgHero} alt="hero image" />
    </section>
  );
};

export default Hero;
