function Aboutme() {
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
            I'm Talon, a dedicated <strong>Solution Architect and Web developer</strong> with expertise in <strong>React Native</strong> and <strong>Flutter</strong>. Over the past three years, I've delivered 10+ successful apps that have generated over $500K in revenue.
          </span>
        </div>

        <div>
          <span className="ach text-base sm:text-lg leading-relaxed">
            I focus on creating user-centric, scalable applications that blend innovation with performance, ensuring each solution meets real business needs.
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
            <strong>Cross-Platform Mastery</strong>: Expert in delivering seamless experiences on both iOS and Android.
          </li>
          <li>
            <strong>Revenue Impact</strong>: Proven track record of generating significant revenue through effective app solutions.
          </li>
          <li>
            <strong>Client Focused</strong>: I prioritize understanding client needs to craft solutions that drive success.
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
        href="contact"
      >
        Send me a message
      </a>
    </div>
  );
}

export default Aboutme;