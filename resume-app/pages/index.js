import React from "react";
import style from "../styles/Index.module.css";
function index() {
  // const welcometitle = " Passionate Self-Taught Web Developer ";
  return (
    <div className={style["page-wrapper"]}>
      <section id="welcome-section" className={style["welcome-section"]}>
        <div className={style["welcome-content"]}>
          <h1>Phone Myint Naing</h1>
          <h2>"Passionate Self-Taught Web Developer"</h2>
          <a className={style.button} href="#about">
            About Me!
          </a>
        </div>
        {/* navbar  */}
        <nav className={style["nav-bar"]} id="navbar">
          <ul className={style["nav-list"]}>
            <li>
              <a href="#welcome-section">Home</a>
            </li>
            <li>
              <a href="#about">About </a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </section>
      <section id="about" className={style["about-me"]}>
        <div className={style["about-content"]}>
          <h1>About</h1>
          <p>
            Hi there! I'm a self-taught programmer and a proud graduate of
            Northumbria University with a degree in Applied Computing.
          </p>
          <p>
            My passion lies in creating dynamic web experiences. I'm skilled in
            JavaScript, HTML, CSS, React, MongoDB, and Git.
          </p>
          <p>
            Let's bring your ideas to life and build exceptional web solutions
            together!
          </p>
        </div>
      </section>
      <section id="projects" className={style.projects}>
        <h1>Some of My Projects</h1>
        <div className={style["projects-content"]}>
          <div className={style["project-article"]}>
            <h3 className={style["project-tile"]}>Removal Company</h3>
            <img
              src="https://res.cloudinary.com/dsigqr3ht/image/upload/v1707268549/Porfolio/TurboRemoval.jpg"
              alt="Restaurant"
            />
            <h4>Languages</h4>
            <p className={style.language}>
              <span>HTML </span>
              <span>CSS</span>
              <span>React</span>
              <span>JavaScript</span>
              <span>API</span>
              <span>Git</span>
              <span>MongoDB</span>
            </p>
            <p>
              <span>
                <a href="https://turboremovals.netlify.app/" target="_blank">
                  Link For Web
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/Mgphone/TurboRemoval"
                  target="_blank"
                >
                  Source Code
                </a>
              </span>
            </p>
          </div>
          {/* <div class="project-article">
            <h3 class="project-tile">Ecommerce</h3>
            <img
              src="https://res.cloudinary.com/dsigqr3ht/image/upload/v1697717755/Porfolio/Screenshot_2023-10-19.png"
              alt="Restaurant"
            />
            <h4>Languages</h4>
            <p class="language">
              <span>HTML </span>
              <span>CSS</span>
              <span>React</span>
              <span>JavaScript </span>
              <span>API</span>
              <span>Git</span>
            </p>
            <p>
              <span>
                <a href="https://sampleasiavilla.netlify.app/" target="_blank">
                  Link For Web
                </a>
              </span>
              <span>
                <a href="https://github.com/Mgphone/AsiaReact" target="_blank">
                  Source Code
                </a>
              </span>
            </p>
          </div>
          <div class="project-article">
            <h3 class="project-tile">Ecommerce</h3>
            <img
              src="https://res.cloudinary.com/dsigqr3ht/image/upload/v1693074975/Porfolio/crubasia_meiv66.png"
              alt="Ecommerce"
            />
            <h4>Languages</h4>
            <p class="language">
              <span>HTML </span>
              <span>CSS</span>
              <span>EJS</span>
              <span>JavaScript </span>
              <span>NodeJS</span>
              <span>MongoDB</span>
            </p>
            <p>
              <span>
                <a href="https://mgphoneshopping.onrender.com/" target="_blank">
                  Link For Web
                </a>
              </span>
              <span>
                <a href="https://github.com/Mgphone/-asiacart-" target="_blank">
                  Source Code
                </a>
              </span>
            </p>
          </div>
          <div class="project-article">
            <h3 class="project-tile">Cocktails App</h3>
            <img
              src="https://res.cloudinary.com/dsigqr3ht/image/upload/v1693074975/Porfolio/cocktail_my8gfw.png"
              alt="Project Cocktail"
            />
            <h4>Languages</h4>
            <p class="language">
              <span>React </span>
              <span>API</span>
            </p>
            <p>
              <span>
                <a href="https://mgphonecocktails.netlify.app/" target="_blank">
                  Link For Web
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/Mgphone/mgphonecocktail"
                  target="_blank"
                >
                  Source Code
                </a>
              </span>
            </p>
          </div>

          <div class="project-article">
            <h3 class="project-tile">Black Jack</h3>
            <img
              src="https://res.cloudinary.com/dsigqr3ht/image/upload/v1695536755/Porfolio/Screenshot_2023-09-24_071827_si7wyy.png"
              alt="Black Jack"
            />
            <h4>Languages</h4>
            <p class="language">
              <span>HTML </span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>DOM</span>
            </p>
            <p>
              <span>
                <a href="https://mgphone.w3spaces.com/" target="_blank">
                  Link For Web
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/Mgphone/casinowar/tree/main/BlackJack"
                  target="_blank"
                >
                  Source Code
                </a>
              </span>
            </p>
          </div>
          <div class="project-article">
            <h3 class="project-tile">Tributes Page</h3>
            <img
              src="https://res.cloudinary.com/dsigqr3ht/image/upload/v1693084509/Porfolio/tribute_ymrzlb.png"
              alt="Tribuntes Picture"
            />
            <h4>Languages</h4>
            <p class="language">
              <span>HTML</span>
              <span>CSS</span>
            </p>
            <p>
              <span>
                <a
                  href="https://codepen.io/mgphone/details/zYvJPva"
                  target="_blank"
                >
                  Link For Web
                </a>
              </span>
              <span>
                <a
                  href="https://codepen.io/mgphone/pen/zYvJPva"
                  target="_blank"
                >
                  Source Code
                </a>
              </span>
            </p>
          </div> */}
        </div>
      </section>
      <section id="contact">
        <div className={style["contact-header"]}>
          <h2>Contact</h2>
          <p>Let's Work Together on Something Awesome!</p>
        </div>
        <div className={style["divider-button-container"]}>
          <hr className={style["contact-divider"]} />
          <a href="#welcome-section" className={style["up-button"]}>
            <i class="fa-solid fa-up-long">Up</i>
          </a>
        </div>
        <div className={style.mylink}>
          <a
            href="https://www.linkedin.com/in/phonenaing/"
            target="_blank"
            // className={`style["btn contact-details"]`}
            className={`${style.btn} ${style["contact-details"]}`}
          >
            {/* <i className={style["fa-brands fa-linkedin"]}></i> Linkedin */}
            <i className={`${style["fa-brands"]} ${style["fa-linkedin"]}}`}></i>
            Linkedin
          </a>
          <a
            id="profile-link"
            href="https://github.com/mgphone"
            target="_blank"
            // className={style["btn contact-details"]}
            className={`${style.btn} ${style["contact-details"]}`}
          >
            {/* <i className={style["fab fa-github"]}></i> GitHub */}
            <i className={`${style.fab} ${style["fa-github"]}`}></i> GitHub
          </a>

          <a
            href="mailto: pmn.blazer@gmail.com"
            className={`${style.btn} ${style["contact-details"]}`}
          >
            <i className={`${style.fas} ${style["fa-envelope"]}`}></i> Send a
            mail
          </a>
          <a href="#" className={`${style.btn} ${style["contact-details"]}`}>
            <i className={`${style.fas} ${style["fa-mobile-alt"]}`}></i> Call me
          </a>
        </div>
      </section>
    </div>
  );
}

export default index;
