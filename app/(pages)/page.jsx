
"use client";
import AboutUs from "../components/AboutUs";
import Events from "../components/Events";
import Home from "../components/Home";
import Gallery from "../components/Gallery";
import Sponsors from "../components/Sponsors";
 // Add this to indicate this is a Client Component

import React from 'react';
import Head from 'next/head';

// Header Section
const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>Colosseum 15.0</h1>
      <p>IT Department | Ramdeobaba University</p>
    </div>
    <nav>
      <ul className="nav-links">
        <li><Home></Home></li>
        <li><Events></Events></li>
        <li><AboutUs></AboutUs></li>
        <li><Gallery></Gallery></li>
        <li><Sponsors></Sponsors></li>
      </ul>
    </nav>
  </header>
);

// About Section
const About = () => (
  <section id="about" className="section">
    <h2>About Colosseum 15.0</h2>
    <p>Colosseum 15.0 is an exciting tech event organized by the IT Department of Ramdeobaba University. The event brings together tech enthusiasts, developers, and students to showcase their skills, learn, and network.</p>
  </section>
);

// Event Schedule Section
const Schedule = () => (
  <section id="schedule" className="section">
    <h2>Event Schedule</h2>
    <ul>
      <li>Day 1 - Opening Ceremony</li>
      <li>Day 2 - Technical Events</li>
      <li>Day 3 - Cultural</li>
    </ul>
  </section>
);

// Registration Section
const Registration = () => (
  <section id="register" className="section">
    <h2>Register Now</h2>
    <form method="POST" action="/register">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <button type="submit">Register</button>
    </form>
  </section>
);

// Contact Section
const Contact = () => (
  <footer id="contact" className="section">
    <h2>Contact Us</h2>
    <p>For inquiries, email us at <a href="mailto:joshiav@rknec.edu">joshiav@rknec.edu</a></p>
  </footer>
);

// Main Layout Component
const HomePage = () => (
  <>
    <Head>
      <title>Colosseum 15.0 - IT Department, Ramdeobaba University</title>
      <meta name="description" content="Colosseum 15.0 Event organized by IT Department at Ramdeobaba University" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <About />
    <Schedule />
    <Registration />
    <Contact />

    <style jsx>{`
      .header {
        background-color: #0044cc;
        padding: 20px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .header h1 {
        font-size: 2rem;
      }
      .nav-links {
        list-style: none;
        display: flex;
      }
      .nav-links li {
        margin-left: 20px;
      }
      .nav-links a {
        color: white;
        text-decoration: none;
      }
      .section {
        padding: 50px;
        background-color: #f9f9f9;
      }
      h2 {
        font-size: 28px;
        color: #333;
      }
      ul {
        list-style: none;
        padding-left: 0;
      }
      li {
        font-size: 18px;
        margin-bottom: 10px;
      }
      form input {
        padding: 10px;
        margin: 10px 0;
        width: 100%;
        max-width: 400px;
      }
      form button {
        padding: 10px;
        background-color: #0044cc;
        color: white;
        border: none;
        cursor: pointer;
      }
      footer {
        background-color: #0044cc;
        color: white;
        padding: 20px;
        text-align: center;
      }
    `}</style>
  </>
);

export default HomePage;
