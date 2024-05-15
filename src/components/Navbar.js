import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "home",
      isNavColored: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleClick = (link) => {
    this.setState({ activeLink: link });
  };

  handleScroll() {
    const scrollPosition = window.scrollY;
    const shouldColorNav = scrollPosition > 0; // Adjust this value as needed

    if (shouldColorNav !== this.state.isNavColored) {
      this.setState({ isNavColored: shouldColorNav });
    }
  }

  render() {
    const { activeLink, isNavColored } = this.state;
    const navWrapClassName = isNavColored ? "nav-colored" : "nav-transparent";

    return (
      <React.Fragment>
        <nav id="nav-wrap" className={navWrapClassName}>
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <ul id="nav" className="nav">
            <li className={activeLink === "home" ? "active" : ""}>
              <a
                className="current smoothscroll"
                href="#home"
                onClick={() => this.handleClick("home")}
              >
                Home
              </a>
            </li>
            <li className={activeLink === "about" ? "active" : ""}>
              <a
                className="smoothscroll"
                href="#about"
                onClick={() => this.handleClick("about")}
              >
                About
              </a>
            </li>
            <li className={activeLink === "resume" ? "active" : ""}>
              <a
                className="smoothscroll"
                href="#resume"
                onClick={() => this.handleClick("resume")}
              >
                Resume
              </a>
            </li>
            <li className={activeLink === "portfolio" ? "active" : ""}>
              <a
                className="smoothscroll"
                href="#portfolio"
                onClick={() => this.handleClick("portfolio")}
              >
                Projects
              </a>
            </li>
            <li className={activeLink === "contact" ? "active" : ""}>
              <a
                className="smoothscroll"
                href="#contact"
                onClick={() => this.handleClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
