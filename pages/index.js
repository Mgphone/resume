import React, { useEffect, useState } from "react";
import style from "../styles/Index.module.css";
import data from "../data/data.json";
function index() {
  const [activeSection, setActiveSection] = useState("");
  const [userClickData, setUserCLickData] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleClick = (title) => {
    // console.log("This is item: " + title);
    const dataTile = data.find((item) => item.title === title);
    // console.log("This is dataTile" + JSON.stringify(dataTile));
    if (dataTile) {
      setUserCLickData(dataTile.project_details);
    }
  };
  const handleClose = () => {
    setUserCLickData(null);
  };
  // console.log("This is userData" + JSON.stringify(userClickData));

  return (
    <div className={style["page-wrapper"]}>
      {userClickData && (
        <>
          <div className={style.userclickdata}>
            <div className={style["userclickdata-article"]}>
              <p t className={style.close} onClick={handleClose}>
                X
              </p>
              {userClickData.map((item, index) => (
                <div key={index}>
                  {Object.entries(item).map(([key, value]) => (
                    <p key={key}>
                      {/* <span>{key.toUpperCase() + " "}</span> */}
                      <span>{value}</span>
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <section id="welcome-section" className={style["welcome-section"]}>
        <div className={style["welcome-content"]}>
          <h1>Phone Myint Naing</h1>
          <h2>"Passionate Self-Taught Web Developer"</h2>
          <h4>
            {" "}
            <a
              href="https://drive.google.com/file/d/1QX5CYh1e4nAbWEJYUTTNDM6HILXhEDUu/view?usp=sharing"
              target="_blank"
            >
              VIEW CV
            </a>
          </h4>
          <a className={style.button} href="#about">
            About Me!
          </a>
        </div>
        {/* navbar  */}
        <nav className={style["nav-bar"]} id="navbar">
          <ul className={style["nav-list"]}>
            <li
              className={
                activeSection === "welcome-section" ? style.active : ""
              }
            >
              <a href="#welcome-section">Home</a>
            </li>
            <li className={activeSection === "about" ? style.active : ""}>
              <a href="#about">About </a>
            </li>
            <li className={activeSection === "projects" ? style.active : ""}>
              <a href="#projects">Projects</a>
            </li>
            <li className={activeSection === "contact" ? style.active : ""}>
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
            JavaScript, Typescript, React, MongoDB, and Git, with additional
            expertise in Node.js, Docker, and Tailwind CSS.
          </p>
          <p>
            Let's bring your ideas to life and build exceptional web solutions
            together!
          </p>
        </div>
      </section>
      <section id="projects" className={style.projects}>
        <h1>SOME OF MY PROJECTS</h1>
        <div className={style["projects-content"]}>
          {data
            .sort((a, b) => b.id - a.id)
            .map((item) => (
              <div className={style["project-article"]} key={item.id}>
                {/* Project Card */}
                <div className={style["project-card"]}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className={style["project-img"]}
                  />
                  <div className={style["project-info"]}>
                    <h3 className={style["project-title"]}>{item.title}</h3>
                    <h5 className={style["project-languages"]}>
                      Languages and Frameworks
                    </h5>
                    <div className={style.language}>
                      {item.language.map((lang, index) => (
                        <span key={index} className={style["language-tag"]}>
                          {lang}
                        </span>
                      ))}
                    </div>

                    {/* Short Description (Preview) */}
                    {item.project_details &&
                      item.project_details[0]?.description && (
                        <p className={style["project-description"]}>
                          {item.project_details[0].description.slice(0, 100)}...
                        </p>
                      )}
                  </div>
                </div>

                {/* Links */}
                <div className={style["project-links"]}>
                  <a
                    href={item.weblink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style["project-link"]}
                  >
                    Link For Web
                  </a>
                  {item.sourcecode && (
                    <a
                      href={item.sourcecode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style["project-link"]}
                    >
                      Source Code
                    </a>
                  )}
                </div>

                {/* Details Button */}
                <button
                  className={style["button-project-description"]}
                  onClick={() => handleClick(item.title)}
                >
                  Project Details
                </button>
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
            <i className={`${style["fa-solid"]} ${style["fa-up-long"]}`}>Up</i>
          </a>
        </div>
        <div className={style.mylink}>
          <a
            href="https://www.linkedin.com/in/phonenaing/"
            target="_blank"
            className={`${style.btn} ${style["contact-details"]}`}
          >
            <i className={`${style["fa-brands"]} ${style["fa-linkedin"]}}`}></i>
            LinkedIn
          </a>
          <a
            id="profile-link"
            href="https://github.com/mgphone"
            target="_blank"
            className={`${style.btn} ${style["contact-details"]}`}
          >
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
