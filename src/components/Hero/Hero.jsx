import { NavLink } from 'react-router-dom';

import imgHero from '../../img/hero.png';

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
        <NavLink to="/teachers" className="btn hero__link">
          Get Started
        </NavLink>
      </div>
      <img
        className="hero__img"
        src={imgHero}
        alt="hero image"
        width="60%"
        height="100%"
      />
    </section>
  );
};

export default Hero;
