import logo from "../assets/asset logo/logo.png";
import "../styling/scss/aboutPage.scss";
import Lottie from "lottie-react";
import IngAnimation from "../assets/lottie/84565-about-us.json";

const About = () => {
  return (
    <div>
      <section id="tentang">
        <div className="isi">
          <div className="titleA">
            <h1 data-aos="fade-down" data-aos-once="true">
              Tentang Kami
            </h1>
          </div>
          <div className="elemenTentang">
            <div className="gambarTentang">
              <Lottie
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="2000"
                data-aos-once="true"
                animationData={IngAnimation}
                loop={true}
                style={{ height: "500px", widht: "500px" }}
              />
            </div>
            <div className="isiTentang">
              <div className="teksTentang">
                <img
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  src={logo}
                  alt="logo arttimes"
                />
                <p
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  Adalah salah satu ekskul di pondok pesantren modern Ar-Rahmat
                  yang berkecimpung dibidang literasi. <br />
                  Art Times mulai dibentuk pada tahun 2016 dengan karya
                  pertamanya yang berjudul
                  <strong> "ART TIMES #1 Kami Kembali"</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
