function About() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <h1>About Me</h1>
        <p>
          An enthusiastic and detail-oriented with a solid foundation in HTML,
          CSS, and JavaScript which I gained in the bootcamp.
        </p>

        <div className="container p-5 shadow text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201634.png"
            alt="me"
            height={200}
          />
          <h4>Clarisse Carmona</h4>

          <p className="mt-3">
            Hi, call me <b>CL or Clang</b>, I am a passionate Junior Web
            Developer with a strong foundation in HTML, CSS, and JavaScript. I
            specialize in creating dynamic, responsive web applications and have
            experience with frameworks like Bootstrap. Committed to continuous
            learning and growth, I enjoy solving complex problems and bringing
            creative ideas to life through code. <br />
            <br />
            When I am not writing a code, I enjoy learning more about emerging
            technologies. Also I share thing I've learned thropugh short videos
            on my Instagram Reels.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
