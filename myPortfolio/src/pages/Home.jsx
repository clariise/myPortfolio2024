function Home() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row flex-wrap align-items-center">
          <div className="col-12 col-md-6 content-wrapper order-2 order-md-1">
            <h2 className="fs-1 fw-bold">Junior Full-Stack Developer</h2>
            <p>
              A 25-year old Junior Full-Stack Developer with a passion for
              creating dynamic and responsive web applications.
            </p>

            <div className="row">
              <div className="col-md-3">
                <button className="btn btn-dark d-flex-block">
                  View Project →
                </button>
              </div>

              <div className="col-md-5">
                <button className="btn btn-outline-dark">
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-end pt-2 order-1 order-md-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/616/682/non_2x/3d-render-cute-business-woman-hold-laptop-png.png"
              alt=""
              height={500}
            />
          </div>
        </div>

        <div>
          <h1>Projects</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
