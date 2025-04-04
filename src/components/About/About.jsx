import { FaPlus } from 'react-icons/fa6';

const About = () => {
  return (
    <section className="about__section">
      <ul className="about__list">
        <li className="about__item">
          <span className="about__number">32,000</span>
          <FaPlus className="about__icon" />
          <span className="about__text">Experienced tutors</span>
        </li>
        <li className="about__item">
          <span className="about__number">300,000</span>
          <FaPlus className="about__icon" />
          <span className="about__text">5-star tutor reviews</span>
        </li>
        <li className="about__item">
          <span className="about__number">120</span>
          <FaPlus className="about__icon" />
          <span className="about__text">Subjects taught</span>
        </li>
        <li className="about__item">
          <span className="about__number">200</span>
          <FaPlus className="about__icon" />
          <span className="about__text">Tutor nationalities</span>
        </li>
      </ul>
    </section>
  );
};
export default About;
