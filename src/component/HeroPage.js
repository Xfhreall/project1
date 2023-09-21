// import logoHP from "../assets/img/Group 2.png";
import "../styling/css/heroPage.css";
import Lottie from "lottie-react";
import welcomeAnimation from "../assets/lottie/support.json";

const HeroPage = () => {
  return (
    <section id="beranda">
      <div
        className="hero-content"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-duration="1700"
        data-aos-delay="500"
      >
        <div className="hero-title">
          <p>Hai, Sobat</p>
          <h1>Majalah Art Times</h1>
        </div>

        <h2 className="hero-subtitle">
          Halaman Web Art Times
          <br />
          "The Source Of Ar-Rahmat Information"
          <br />
          Made by - Risqi Fahreal
        </h2>
        <div className="button" id="button-3">
          {/* <div id="circle"></div> */}
          <a href="#tentang">Telusuri</a>
        </div>
      </div>

      <Lottie
        className="heroAnimation"
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="500"
        data-aos-duration="1700"
        style={{ marginTop: "4em", marginRight: "3em" }}
        animationData={welcomeAnimation}
        loop={true}
      />
      <div class="scrolldown">
        <div class="chevrons">
          <div class="chevrondown"></div>
          <div class="chevrondown"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
