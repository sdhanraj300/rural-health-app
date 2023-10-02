import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="mt-10 hero text-center flex flex-row p-5">
        <div className="heading h-[25rem] flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold mx-5">
            Empowering Rural Healthcare: Telemedicine and Wellness Resources
          </h1>
          <p className="text-xl mt-5">
            Connecting Rural Residents to Quality Healthcare Services <br /> No
            More Distance, No More Barriers Your Health, Our Priority
          </p>
        </div>
        <div className="logo">
          <img
            className="rounded-full h-[25rem] mr-5"
            src="https://images-platform.99static.com/aSqqkfNJuQfMzFE8rnsm-w81BNg=/124x124:1116x1116/500x500/top/smart/99designs-contests-attachments/127/127575/attachment_127575228"
            alt=""
          />
        </div>
      </div>
      <div className="mission p-5 mt-10">
        <h1 className="font-bold text-3xl">Mission : </h1>
        <div className="flex flex-row justify-between p-5">
          <p className="text-2xl">
            At RuralHealth Connect, our mission is to bring accessible <br />{" "}
            and quality healthcare within reach of every individual in rural
            communities. <br /> We are committed to breaking down geographical
            barriers, <br /> ensuring timely medical assistance, <br /> and
            empowering residents with knowledge and resources for a healthier
            life
          </p>
          <img
            className="h-[20rem] rounded-lg"
            src="https://borgenproject.org/wp-content/uploads/Healthcare-Facilities-in-India.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="vision p-5 mt-10">
        <h1 className="font-bold text-3xl">Vission : </h1>
        <div className="flex flex-row justify-between p-5">
          <p className="text-2xl">
            Our vision is to transform rural healthcare by leveraging technology
            and compassionate care. <br /> We aspire to create a future where
            distance will no longer be a hindrance to well-being. <br /> We
            envision a world where every rural community member has the same
            healthcare opportunities as their urban counterparts.
          </p>
          <img
            className="h-[20rem] rounded-lg"
            src="https://thecsrjournal.in/wp-content/uploads/2018/08/Healthcare-sakhis.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="know-more text-center p-5">
        <button className="h-[40px] text-xl bg-blue-300 rounded-md w-[15rem] hover:bg-emerald-300">
          <Link to="/about" className="text-blue-700">
            Click Here For More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
