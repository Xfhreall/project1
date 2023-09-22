import "../styling/scss/ingredient.scss";
import Lottie from "lottie-react";
import IngAnimation from "../assets/lottie/webDevelopment.json";

const Ingredient = () => {
  return (
    <section id="komposisi">
      <div className="ing-contain">
        <div className="ing-lottie">
          <Lottie
            animationData={IngAnimation}
            loop={true}
            style={{ height: "450px", widht: "450px" }}
          />
        </div>
        <div className="ing-text">
          <div className="ing-text-title">
            <h1 style={{ marginLeft: "1em" }}>/Page ini masih dalam progres developing</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredient;
