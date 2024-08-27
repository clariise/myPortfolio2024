function Contact() {
  return (
    <>
      <div className="container mt-5 p-3 mb-5">
        <div className="container-box shadow-lg p-5 mb-5 mt-5 bg-white rounded-4">
          <h1 className="display-1 fw-bold">Contact</h1>

          <div className="p-4">
            <h2>
              <b>Get in touch, let's talk.</b>
            </h2>
            <p>
              Ready to start your project and need my help? Feel free to ask a
              question or send me an
              <a href="mailto:clcarmona001@gmail.com"> email</a>.
            </p>
          </div>

          <div className="row m-5 justify-content-center">
            <div className="col-12 col-md-6 mb-5">
              <p>
                {" "}
                <b>Message Me</b>
              </p>
              <p>clcarmona001@gmail.com</p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                {" "}
                <b>Call Me</b>
              </p>
              <p>09707401625</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
