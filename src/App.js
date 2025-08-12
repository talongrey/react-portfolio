import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router  } from "react-router-dom";
import useBreakpoint from './hooks/useBreakpoint';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Projects from './components/intro/Projects';
import Flower from './components/Flower';
import Aboutme from './components/aboutme/Aboutme';
import Contact from './components/contact/Contact';

export default function App() {
  const bp = useBreakpoint();
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('dark');

  useEffect(() => {
    if (bp === 'md' || bp === 'lg' || bp === 'xl' || bp === '2xl') {
      setOpen(false);
    }
  }, [bp]);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, []);

  const changeHref = (ev, value) => {
    ev.preventDefault();
    window.location.href = '/#' + value;
  }

  const changeColor = () => {
    if(color == 'dark') {
      document.documentElement.style.setProperty("--dark-color", "#ffffff");
      document.documentElement.style.setProperty("--white-color", "#111111");
      setColor('white');
    } else {
      document.documentElement.style.setProperty("--dark-color", "#111111");
      document.documentElement.style.setProperty("--white-color", "#ffffff");
      setColor('dark');
    }

  }

  return (
    <div className="min-h-screen flex-column">
        <header className="c-white position-absolute w-full h-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              <div className="flex position-relative">

                <nav className="fixed hidden md:flex space-x-6 position-absolute left20 top-1/4 -translate-y-1/2 transform -rotate-90 color-white px-4 py-2">

                  <a className="" href="contact">Contact</a>
                  <a className="" href="#aboutme" onClick={(ev) => changeHref(ev, 'aboutme')}>About Me</a>
                  <a className="" href="#projects" onClick={(ev) => changeHref(ev, 'projects')}>Projects</a>
                  <a className="text-xl font-bold transform rotate-90" href="#intro" onClick={(ev) => changeHref(ev, 'intro')}>T</a>

                </nav>

              </div>

              <div className="fixed flex items-center dark-icon">
                <div className="hidden md:block" onClick={changeColor}>
                  <button className="px-4 py-2 rounded bg-white-600 color-white">{color=="dark" ? <DarkModeIcon /> : <LightModeIcon />}</button>
                </div>

                <button
                  onClick={() => setOpen(v => !v)}
                  className="md:hidden ml-2 p-2 rounded hover:bg-gray-100"
                  aria-expanded={open}
                  aria-label="Toggle menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {open && (
            <div className="md:hidden px-4 pt-2 pb-3 space-y-1">
              <nav className="fixed md:flex space-x-6 color-white px-4 py-2">

                  <a className="" href="contact">Contact</a>
                  <a className="" href="#aboutme" onClick={(ev) => changeHref(ev, 'aboutme')}>About Me</a>
                  <a className="" href="#projects" onClick={(ev) => changeHref(ev, 'projects')}>Projects</a>
                  <a className="text-xl font-bold transform rotate-90" href="#intro" onClick={(ev) => changeHref(ev, 'intro')}>T</a>

              </nav>
            </div>
          )}
        </header>
      <Router>

        <Routes>
          <Route path="/" element={
            <>
              <section className='h-full-vh' id="intro">
                <div className="me">
                  <span className="myname">TALON GREY</span>
                  <span className="myposition">
                    Web Developer
                    <br />
                    Frontend + Backend
                  </span>
                </div>
              </section>

              <div className='flower'>
                <Flower />
              </div>

              <section id="projects">
                <Projects />
              </section>

              <section id="aboutme">
                <Aboutme />
              </section>
            </>
          }
          />
          <Route path="/contact" element={
            <>
              <section id="contact">
                <Contact color={color}/>
              </section>
            </>
          }
          />
        </Routes>
      </Router>


      <footer className="text-center py-6 text-gray-600 mt-auto">© {new Date().getFullYear()} Talon Grey</footer>
    </div>
  );
}