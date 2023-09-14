import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Card, Offcanvas } from 'react-bootstrap';

import NavbarLinks from "./NavbarLinks";
import styles from '../styles/Home.module.css'
import {
  ABOUT_ME,
  EXPERIENCE_F1,
  EXPERIENCE_F2,
  EXPERIENCE_F3,
  EXPERIENCE_F4,
  EXPERIENCE_C1,
  EXPERIENCE_C2,
  EXPERIENCE_C3,
  EXPERIENCE_U,
  PROJECTS,
  PROJECT_1,
  PROJECT_2,
  STACK_1,
  STACK_2,
  COPYRIGHT
} from '../text';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const currentYear = new Date().getFullYear();

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  useEffect(() => {
    themeCheck();
  }, [darkMode]);

  useEffect(() => {
    themeCheck();
  }, []);

  const themeCheck = () => {
    if (!("darkMode" in localStorage)) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("darkMode", "true");
      } else {
        localStorage.setItem("darkMode", "false");
      }
    }
    if (localStorage.darkMode === "true") {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDarkMode(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      setDarkMode(false);
    }
  }

  useEffect(() => {
    const slideNameList = [
      `.${styles.greeting}`,
      `.${styles.aboutMe}`,
      `.${styles.projects}`,
      `.${styles.experience}`,
    ];
    const slideElementList = slideNameList.map(
      name => document.querySelector(name) ?
        document.querySelector(name) : undefined
    );

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.slide);
        }
      });
    });

    slideElementList.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

  }, [])

  const handleThemeToggle = () => {
    const localStorageDarkMode = localStorage.getItem("darkMode");
    if (localStorageDarkMode) {
      localStorage.setItem(
        "darkMode",
        localStorageDarkMode === "true" ? "false" : "true"
      );
    } else {
      localStorage.setItem("darkMode", "true");
    }
    setDarkMode(!darkMode);
  }

  return (
    <React.Fragment>
      <Head>
        <title>{"Rferog"}</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Offcanvas
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        scroll={true}
      >
        <Offcanvas.Header closeButton />
        <NavbarLinks
          handleClose={handleCloseOffcanvas}
          navbarStyle={styles.mobileNavbarLinks}
        />
      </Offcanvas>
      <nav className={styles.navbar}>
        <a href="#top" id="logo" className={styles.logo}>
          {"R"}
        </a>
        <div className={styles.burger} onClick={handleShowOffcanvas}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <NavbarLinks navbarStyle={styles.navbarLinks} />
      </nav>
      <div className={styles.container} onClick={handleCloseOffcanvas}>
        <div className={styles.main}>
          <div className={styles.greeting}>
            <h1 className={styles.greetingText}>
              {"Hey, my name is"}
            </h1>
            <span className={styles.greetingName}>{"Rafael Rodriguez."}</span>
            <h1 className={styles.greetingText}>
              {"I'm a Full Stack Developer."}
            </h1>
          </div>
          <div id="aboutMe" className={styles.aboutMe}>
            <h1 className={styles.sectionTitle}>{"About Me"}</h1>
            <div className={styles.aboutMeContent}>
              <Image
                className={styles.aboutMePhoto}
                src="/Photo.jpg"
                alt="About me picture"
                width={400}
                height={400}
              />
              <p className={styles.aboutMeIntro}>
                {ABOUT_ME}
              </p>
            </div>
          </div>
          <div id="projects" className={styles.projects}>
            <h1 className={styles.sectionTitle}>{"Projects"}</h1>
            <p className={styles.projectsIntro}>{PROJECTS}</p>
            <div className={styles.projectsCardContainer}>
              <Card
                className={styles.projectsCard}
                bg={darkMode ? "dark" : "light"} border="dark"
              >
                <Card.Title>{"Forum"}</Card.Title>
                <Card.Body>
                  <p>{PROJECT_1}</p>
                  <p>
                    <strong>{"Tech Stack:"}</strong> {STACK_1}</p>
                  <Card.Link
                    href="https://forum.rferog.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Visit the website"}
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/rferog/forum-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Github repository"}
                  </Card.Link>
                </Card.Body>
              </Card>
              <Card
                className={styles.projectsCard}
                bg={darkMode ? "dark" : "light"}
                border="dark"
              >
                <Card.Title>{"Note Keeper"}</Card.Title>
                <Card.Body>
                  <p>{PROJECT_2}</p>
                  <p><strong>{"Tech Stack:"}</strong> {STACK_2}</p>
                  <Card.Link
                    href="https://notes.rferog.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Visit the website"}
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/rferog/note-keeper"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Github repository"}
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div id="experience" className={styles.experience}>
            <h1 className={styles.sectionTitle}>
              {"Work / Education History"}
            </h1>
            <div className={styles.experienceItem}>
              <div className={styles.experienceYear}>
                {"Fall 2019 - Present"}
              </div>
              <div className={styles.experienceContent}>
                <strong>{"Full Stack Developer - Fluid Attacks"}</strong>
                <ul>
                  <li>{EXPERIENCE_F1}</li>
                  <li>{EXPERIENCE_F2}</li>
                  <li>{EXPERIENCE_F3}</li>
                  <li>{EXPERIENCE_F4}</li>
                  <li>{EXPERIENCE_F5}</li>
                  <li>{EXPERIENCE_F6}</li>
                </ul>
              </div>
            </div>
            <div className={styles.experienceItemLast}>
              <div className={styles.experienceYear}>
                {"Spring 2019"}
              </div>
              <div className={styles.experienceContent}>
                {EXPERIENCE_U}
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className={styles.footerLinks}>
            <a
              href="mailto:rferog1894@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/email.svg" alt="Email icon" height={25} width={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-rodriguez-a2a2a7123/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/linkedin.svg"
                alt="Linkedin icon"
                height={25}
                width={25}
              />
            </a>
            <a
              href="https://github.com/rferog"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/github.svg"
                alt="Github icon"
                height={25}
                width={25}
              />
            </a>
          </div>
          <div className={styles.footerCopyright}>
            &#169; <span id="year">{currentYear}</span> {COPYRIGHT}
          </div>
        </footer>
      </div>
      <Image
        className={styles.themeToggle}
        src={darkMode ? "/sun.svg" : "/moon.svg"}
        alt="Theme toggle"
        height={35}
        width={35}
        onClick={handleThemeToggle}
      />
    </React.Fragment>
  )
}
