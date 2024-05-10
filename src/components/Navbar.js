import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavColored: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollPosition = window.pageYOffset;
    const shouldColorNav = scrollPosition > 0; // Adjust this value as needed

    if (shouldColorNav !== this.state.isNavColored) {
      this.setState({ isNavColored: shouldColorNav });
    }
  }

  render() {
    const { isNavColored } = this.state;
    const navWrapClassName = isNavColored ? 'nav-colored' : 'nav-transparent';

    return (
      <React.Fragment>
        <nav id="nav-wrap" className={navWrapClassName}>
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}