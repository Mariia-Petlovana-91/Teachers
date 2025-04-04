import imgHero from '../../img/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="title__first">
          Unlock your potential with the best{' '}
          <span className="title__first--span">language</span> tutors
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
      <img className="hero__img" src={imgHero} alt="hero image" />
    </section>
  );
};

export default Hero;
