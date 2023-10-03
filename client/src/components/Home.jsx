import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const AnimatedDiv = animated.div;

const Home = () => {
  // Animation for the entire component
  const componentAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Animation for each section
  const sectionAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <AnimatedDiv className="home bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white" style={componentAnimation}>
      {/* Hero Section */}
      <AnimatedDiv
        className="mt-10 hero text-center flex flex-col md:flex-row p-5"
        style={sectionAnimation}
      >
        <div className="heading md:w-1/2 flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold mx-5">
            Empowering Rural Healthcare: Telemedicine and Wellness Resources
          </h1>
          <p className="text-xl mt-5">
            Connecting Rural Residents to Quality Healthcare Services <br /> No
            More Distance, No More Barriers Your Health, Our Priority
          </p>
        </div>
        <div className="logo md:w-1/2 mt-5 md:mt-0 relative group">
          <img
            className="rounded-full h-64 md:h-80 mx-auto transition-all duration-300 ease-in-out transform scale-100 group-hover:scale-105"
            src="https://images-platform.99static.com/aSqqkfNJuQfMzFE8rnsm-w81BNg=/124x124:1116x1116/500x500/top/smart/99designs-contests-attachments/127/127575/attachment_127575228"
            alt=""
          />
        </div>
      </AnimatedDiv>

      {/* Mission Section */}
      <AnimatedDiv
        className="mission p-5 mt-10"
        style={sectionAnimation}
      >
        <h1 className="font-bold text-3xl">Mission : </h1>
        <div className="flex flex-col md:flex-row justify-between p-5">
          <p className="text-2xl md:w-1/2 mb-5 md:mb-0">
            At RuralHealth Connect, our mission is to bring accessible <br />{" "}
            and quality healthcare within reach of every individual in rural
            communities. <br /> We are committed to breaking down geographical
            barriers, <br /> ensuring timely medical assistance, <br /> and
            empowering residents with knowledge and resources for a healthier
            life
          </p>
          <img
            className="h-64 md:h-80 rounded-lg mx-auto transition-all duration-300 ease-in-out transform scale-100 group-hover:scale-105"
            src="https://borgenproject.org/wp-content/uploads/Healthcare-Facilities-in-India.jpg"
            alt=""
          />
        </div>
      </AnimatedDiv>

      {/* Vision Section */}
      <AnimatedDiv
        className="vision p-5 mt-10"
        style={sectionAnimation}
      >
        <h1 className="font-bold text-3xl">Vision : </h1>
        <div className="flex flex-col md:flex-row justify-between p-5">
          <p className="text-2xl md:w-1/2 mb-5 md:mb-0">
            Our vision is to transform rural healthcare by leveraging technology
            and compassionate care. <br /> We aspire to create a future where
            distance will no longer be a hindrance to well-being. <br /> We
            envision a world where every rural community member has the same
            healthcare opportunities as their urban counterparts.
          </p>
          <img
            className="h-64 md:h-80 rounded-lg mx-auto transition-all duration-300 ease-in-out transform scale-100 group-hover:scale-105"
            src="https://thecsrjournal.in/wp-content/uploads/2018/08/Healthcare-sakhis.jpg"
            alt=""
          />
        </div>
      </AnimatedDiv>

      {/* "Know More" Button */}
      <AnimatedDiv
        className="know-more text-center p-5"
        style={sectionAnimation}
      >
        <button className="h-12 text-xl bg-green-500 rounded-md w-64 hover:bg-green-600 transition-all duration-300 ease-in-out">
          <Link to="/about" className="text-white">
            Click Here For More
          </Link>
        </button>
      </AnimatedDiv>
    </AnimatedDiv>
  );
};

export default Home;
