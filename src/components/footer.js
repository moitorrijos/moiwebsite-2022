import * as React from "react"
import MoiTorrijosLogo from "./icons/moi-logo"
import TwitterIcon from "./icons/twitter-icon"
import InstagramIcon from "./icons/instagram-icon"
import LinkedinIcon from "./icons/linkedin-icon"
import BehanceIcon from "./icons/behance-icon"
import WordpressIcon from "./icons/wordpress-icon"
import CodepenIcon from "./icons/codepen-icon"
import GithubIcon from "./icons/github-icon"
import DribbbleIcon from "./icons/dribbble-icon"
import "../styles/_footer.sass"

const Footer = () => (
  <footer id="footer" className="footer-container">
    <div className="footer-columns">
      <div className="footer-column footer-logo">
        <div className="footer-about">
          <h3>Quién Soy</h3>
          <p>
            Juan Moisés Torrijos diseñador y programador de aplicaciones web en
            la Ciudad de Panamá{" "}
            <span role="img" aria-label="Panama Flag">
              🇵🇦
            </span>
          </p>
        </div>
        <MoiTorrijosLogo />
      </div>
      <div className="footer-column">
        <h3>Vínculos Importantes</h3>
        <ul>
          <li>
            <a href="https://www.meetup.com/WordPress-Meetup-Ciudad-de-Panama/">
              Grupo de WordPress de Panamá
            </a>
          </li>
          <li>
            <a href="https://www.meetup.com/React-Panama/">
              Grupo de ReactJS Panamá
            </a>
          </li>
          <li>
            <a href="https://www.meetup.com/STYLE-LEADING/">
              Grupo de Style Leading Panamá
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Redes Sociales</h3>
        <p>Sígueme en estas redes sociales</p>
        <div className="social-media-moitorrijos">
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <WordpressIcon />
          <BehanceIcon />
          <DribbbleIcon />
          <CodepenIcon />
          <GithubIcon />
        </div>
      </div>
    </div>
    <p className="copyright">
      © {new Date().getFullYear()} Juan Moisés Torrijos todos los derechos
      reservados. Hecho con{" "}
      <span role="img" aria-label="Amor">
      ❤️
      </span>{" "}
      en la Ciudad de Panamá{" "}
      <span role="img" aria-label="Panama Flag">
        🇵🇦
      </span>
      . Hospedado en{" "}
      <a
        href="https://servidoresrapidos.net/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Servidores Rápidos
      </a>
    </p>
  </footer>
)

export default Footer
