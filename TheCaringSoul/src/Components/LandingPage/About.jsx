import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import about_img from "../../assets/About/about-sm.png";
import logo1 from "../../assets/About/logo1.png";
import logo2 from "../../assets/About/logo2.png";
import logo3 from "../../assets/About/logo3.png";
import tick from "../../assets/About/tick-icon.png";
import vector_heart2 from "../../assets/About/vector-heart-2.png";
import vector_heart1 from "../../assets/About/vector-heart1.png";

AOS.init({
  duration: 1000, // Animation duration (1s)
  once: true, // Animations run only once
});

export default function About() {
  const aboutCard = [
    {
      logo: logo1,
      title: "Consistent Quality Care",
      desc: "Our geriatric care managers oversee each home care patient weekly. This ensures that our specialists maintain consistent oversightto ensure the highest quality of care that exceeds your expectations.",
    },
    {
      logo: logo2,
      title: "LPN and RN Levels of Care",
      desc: "We aim to remove the overwhelming stress We aim to remove the overwhelming stress related to new and or chronic complex medical conditions. Nursing care gives you peace of mind that clinical and social needs are met so you can focus on important in life really important in life yours relationship with your loved ones.",
    },
    {
      logo: logo3,
      title: "Personalized Care Management",
      desc: "Our Care Managers are trained to evaluate each client’s individual needs to develop a care plan specific to the needs of your loved one. Care managers can assist with navigating healthcare systems and choosing the right path for you or your loved one",
    },
  ];

  const aboutPoints = [
    "Providing care with empathy and respect.",
    "Skilled professionals you can trust.",
    "Enhancing dignity and well-being.",
    "Care tailored to your needs.",
    "Building lasting relationships.",
  ];

  return (
    <>
      {/*About Cards*/}
      <div className="card-container relative md:mt-10">
        <img
          src={vector_heart1}
          alt="Heart"
          className="absolute top-0 left-16 w-40 hidden lg:block"
          data-aos="fade-down" /* Scroll animation from top */
        />
        <img
          src={vector_heart2}
          alt="Heart"
          className="absolute bottom-0 right-16 w-40 hidden lg:block"
          data-aos="fade-up" /* Scroll animation from bottom */
        />
        <div className="box-container  justify-center items-center p-16 gap-7 flex-wrap hidden md:grid grid-cols-2 grid-rows-2 justify-items-center lg:flex">
          {aboutCard.map((item) => {
            return (
              <div
                style={{ height: "312px", width: "387px" }}
                className="box cursor-pointer group relative bg-[#FFF6FD] flex justify-center items-center border border-solid border-[#B5B5B5] rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-none"
              >
                <div className="absolute flex flex-col justify-center items-center gap-8 transition-opacity duration-1000 ease-in-out opacity-100 group-hover:opacity-0">
                  <div className="logo" style={{ width: "74px" }}>
                    <img
                      src={item.logo}
                      alt="Consistent Quality Care"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <p className="text-xl font-bold">{item.title}</p>
                </div>

                <div className="absolute hover-content flex flex-col gap-3 p-4 transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100">
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*About Main Container*/}
      <div className="about-container md:p-16">
        <div
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          className="flex flex-col justify-center items-center bg-[#FFF6FD] md:rounded-3xl px-10 py-20 md:flex-col md:items-center lg:flex-row"
        >
          {/*About Image*/}
          <div className="w-3/5 flex justify-center items-center">
            <img
              src={about_img}
              alt="About Image"
              style={{ width: "700px", minWidth: "430px" }}
            />
          </div>
          {/*About Desc*/}
          <div className="md:text-center lg:text-left">
            <div className="title text-pretty md:text-balance">
              <h1 className=" text-3xl  lg:leading-[60px] md:text-5xl text-[#567A9B] font-[800]">
                About <span className="text-[#BDCFE7]">The</span>{" "}
                <span className="text-[#A7C9D3]">Caring</span>{" "}
                <span className="text-[#B4D1B3]">Souls</span>
                <br /> A Mission to Care <br /> with Compassionate!
              </h1>
            </div>
            <p className="text-[#69858C] font-[700] text-lg md:text-xl my-5">
              To enhance the independence, dignity, and well-being of our
              clients by offering personalized, high-quality home care services.
            </p>
            <div className="about-points mt-10">
              <div className="flex gap-[20px] items-center my-5">
                <img src={tick} alt="tick icon" style={{ width: "28px" }} />
                <p className="text-[#69858C] text-md md:text-xl font-medium">
                  Providing care with empathy and respect.
                </p>
              </div>
              <div className="flex gap-[20px] items-center my-5">
                <img src={tick} alt="tick icon" style={{ width: "28px" }} />
                <p className="text-[#69858C] text-md md:text-xl font-medium">
                  Skilled professionals you can trust.
                </p>
              </div>
              <div className="flex gap-[20px] items-center my-5">
                <img src={tick} alt="tick icon" style={{ width: "28px" }} />
                <p className="text-[#69858C] text-md md:text-xl font-medium">
                  Enhancing dignity and well-being.
                </p>
              </div>
              <div className="flex gap-[20px] items-center my-5">
                <img src={tick} alt="tick icon" style={{ width: "28px" }} />
                <p className="text-[#69858C] text-md md:text-xl font-medium">
                  Care tailored to your needs.
                </p>
              </div>
              <div className="flex gap-[20px] items-center my-5">
                <img src={tick} alt="tick icon" style={{ width: "28px" }} />
                <p className="text-[#69858C] text-md md:text-xl font-medium">
                  Building lasting relationships.
                </p>
              </div>
            </div>
            <div className="md:flex justify-start">
              {/* <button className="bg-[#567A9B] text-white py-2 px-4 mt-2 rounded-md">More Info</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
