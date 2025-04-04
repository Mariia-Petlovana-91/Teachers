import logoGoit from '../../img/logoGoit.svg';

import { FaLinkedinIn, FaGithub, FaTelegram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="footer__title">
        Materials for this project are provided:{'\u2003'}
        <a
          href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi41Ku7y_GLAxXLR5EFHeuQBCEYABAAGgJscg&co=1&gclid=CjwKCAiA5pq-BhBuEiwAvkzVZeosMp0g2-bgZq1Ch3uh0NGc4OfYDqZrtSunzdDrkFV4zlC5XoE5iBoCRgYQAvD_BwE&ohost=www.google.com&cid=CAESVOD2eYjBowlv0Fzgm-qpiUS14QI2J21-y2o0MZfPmtHAtem227N_X1FC0US-b8V2TjURLS5v9H7miGGXN8JgKthxOW0GbkyOeFy0_M42g10NXQuEXw&sig=AOD64_28sKgTC_NgJp5Vv07ngXx-LQ25PA&q&adurl&ved=2ahUKEwibk6e7y_GLAxVQGxAIHVCaANsQ0Qx6BAgYEAE"
          target="_blank"
          rel="noopener noreferrer"
          className="link footer__link"
        >
          <img src={logoGoit} alt="school goit logo" className="footer__img" />
        </a>
      </h4>
      <ul className="footer__list">
        <li className="footer__item">Petlovana Mariia</li>
        <li className="footer__item">
          <a
            href="mailto:petlovanam333@gmail.com"
            target="_blank"
            rel="noopener norefererr"
            className="link footer__link"
          >
            petlovanam333@gmail.com
          </a>
        </li>
        <li>
          <ul className="footer__list">
            <li className="footer__item">
              <a
                href="https://github.com/Mariia-Petlovana-91"
                target="_blank"
                rel="noopener norefererr"
                className="link footer__link"
              >
                <FaGithub className="icon" />
              </a>
            </li>
            <li className="link footer__item">
              <a
                href="https://www.linkedin.com/in/mariia-petlovana-637842224"
                target="_blank"
                rel="noopener norefererr"
                className="link footer__link"
              >
                <FaLinkedinIn className="icon" />
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://t.me/PetlovanaMariia"
                target="_blank"
                rel="noopener norefererr"
                className="link footer__link"
              >
                <FaTelegram className="icon" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
