function Service() {
  return (
    <div className="container mt-5">
      <h1 className="fw-bold">Technology Stack</h1>
      <div className="row justify-content-center">
        <div className="col-md-10 d-flex flex-wrap justify-content-between">
          <img src={img4} alt="react" height={100} className="m-2" />
          <img
            src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png  "
            alt="mysql"
            height={100}
            className="m-2"
          />
          <img src={img3} alt="bootstrap" height={100} className="m-2" />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png"
            alt="figma"
            height={100}
            className="m-2"
          />

          <img src={img2} alt="firebase" height={100} className="m-2" />

          <img src={img1} alt="laravel" height={100} className="m-2" />
        </div>
      </div>
    </div>
  );
}

export default Service;
