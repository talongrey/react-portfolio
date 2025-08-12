function Project({ order, title, explain, url, picName }) {
  return (
    <div
      className={`
        flex flex-col items-center gap-6 w-full max-w-6xl mx-auto mb-24 project
        md:flex-row md:items-start
        ${order % 2 === 1 ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* Image */}
      <img
        src={"../../images/" + picName}
        alt="Project preview"
        className="moving-img bg-white rounded-lg p-1 w-full sm:w-1/2 h-auto"
      />

      {/* Details */}
      <div className="project-detail m-4 flex-1">
        {/* Order number */}
        <div className="project-order pt-4 flex items-center">
          <div className="order-sign flex items-center">
            <div className="order-sign-line"></div>
            <div className="order-sign-square"></div>
          </div>
          <span className="order-number ml-2 text-lg font-bold">
            0{order}
          </span>
        </div>

        {/* Title */}
        <div className="pt-4 pb-4">
          <h2 className="project-title text-xl font-semibold">
            {title}
          </h2>
        </div>

        {/* Explanation */}
        <div className="project-explain mb-4 text-gray-700">
          <p>{explain}</p>
        </div>

        {/* Button */}
        <div className="project-btn-container">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn text-white transition"
          >
            View project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;