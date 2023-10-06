import React from 'react'

interface INavbarLinks {
  handleClose?: () => void;
  navbarStyle: string;
}

const NavbarLinks: React.FC<INavbarLinks> = ({
  handleClose,
  navbarStyle,
}): JSX.Element => {
  return (
    <React.Fragment>
      <ul className={navbarStyle}>
          <li>
            <a
              href="#aboutMe"
              id="aboutMeLink"
              onClick={handleClose}
            >
              {"ABOUT ME"}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              id="projLink"
              onClick={handleClose}
            >
              {"PROJECTS"}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              id="expLink"
              onClick={handleClose}
            >
              {"EXPERIENCE"}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rafael-rodriguez-a2a2a7123/"
              id="linkedinLink"
              target="_blank"
              rel='noreferrer'
              onClick={handleClose}
            >
              {"LINKEDIN"}
            </a>
          </li>
        </ul>
    </React.Fragment>
  )
}

export default NavbarLinks
