import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jack Rudelic</h2>
        <p><a href="mailto:jackrudelic@gmail.com">jackrudelic@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jack. I am a native St. Louis-an. I am a practice leader at <a href="https://www.slalom.com/">Slalom</a> in St. Louis. I graduated from <a href="https://www.missouri.edu/">Mizzou in Columbia, MO</a> in 2009 with a B.S. in Design. I am interested in emerging technology, IoT, and personal health data. I am also a huge fan of the St. Louis Blues and Cardinals.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jack Rudelic <Link to="/">jacksonrdlc.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
