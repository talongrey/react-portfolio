import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../slices/counterSlice';

function Aboutme() {

  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="aboutme color-white px-4 sm:px-8 lg:px-16 py-8 max-w-4xl mx-auto">
      {/* Greeting */}
      <span className="hi block text-2xl sm:text-3xl font-bold mb-4">
        Hi there
      </span>

      {/* Intro */}
      <div className="achievement space-y-4">
        <div> 
          <span className="im text-base sm:text-lg leading-relaxed">
            I'm Talon, a dedicated <strong>Solution Architect and Web Developer</strong> specializing in <strong>React</strong>, <strong>Next.js</strong>, and <strong>Node.js</strong>. Over the past three years, I’ve built and deployed 15+ high-performing websites and web applications, driving measurable results for clients across industries.
          </span>
        </div>

        <div>
          <span className="ach text-base sm:text-lg leading-relaxed">
            I focus on crafting responsive, scalable, and visually engaging experiences that align with real business goals, blending innovation with performance.
          </span>
        </div>
      </div>

      {/* Highlights */}
      <div className="Highlights mt-6">
        <span className="ach block font-semibold text-lg sm:text-xl mb-2">
          Highlights:
        </span>
        <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
          <li>
            <strong>Full-Stack Expertise</strong>: Skilled in modern JavaScript frameworks, REST APIs, and database integration for complete end-to-end solutions.
          </li>
          <li>
            <strong>Performance & SEO Focus</strong>: Proven ability to optimize load times, accessibility, and search rankings to maximize impact.
          </li>
          <li>
            <strong>Client-Centric Approach</strong>: Deep understanding of client requirements to deliver tailored, success-driven solutions.
          </li>
        </ul>
      </div>

      {/* Closing */}
      <div className="mt-6 mb-8">
        <span className="ach text-base sm:text-lg leading-relaxed">
          I'm passionate about pushing the boundaries of web development and am excited for the next challenge!
        </span>
      </div>

      {/* Button */}
      <a
        className="progress-button inline-block main-color font-medium px-6 py-3 rounded-lg transition"
        // href="contact"
        onClick={() => dispatch(increment())}
      >
        Send me a message
      </a>
    </div>
  );
}

export default Aboutme;