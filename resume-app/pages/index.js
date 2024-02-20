import React, { useEffect, useState } from "react";
import style from "../styles/Index.module.css";
import data from "../data/data.json";
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
            JavaScript, HTML, CSS, React, MongoDB, and Git, with additional
            expertise in Node.js, Express.js, JWT (JSON Web Tokens), and
            Next.js.
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
          {data.map((item) => (
            <div className={style["project-article"]} key={item.id}>
              <h3 className={style["project-tile"]}>{item.title}</h3>
              <img src={item.img} alt={item.title} />
              <h4>Languages</h4>
              <p className={style.language}>
                {item.language.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </p>
              <p>
                <span>
                  <a href={item.weblink} target="_blank">
                    Link For Web
                  </a>
                </span>
                <span>
                  <a href={item.sourcecode} target="_blank">
                    Source Code
                  </a>
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className={style["contact"]}>
        <div className={style["contact-header"]}>
          <h2>Contact</h2>
          <p>Let's Work Together on Something Awesome!</p>
        </div>
        <div className={style["divider-button-container"]}>
          <hr className={style["contact-divider"]} />
          <a href="#welcome-section" className={style["up-button"]}>
            {/* <i class="fa-solid fa-up-long">Up</i> */}
            <i className={`${style["fa-solid"]} ${style["fa-up-long"]}`}>Up</i>
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
            LinkedIn
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
          <a
            href="tel:07738518821"
            className={`${style.btn} ${style["contact-details"]}`}
          >
            <i className={`${style.fas} ${style["fa-mobile-alt"]}`}></i> Call me
          </a>
        </div>
      </section>
    </div>
  );
}

export default index;
