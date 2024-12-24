import React, { useState, useEffect } from "react";
import { FaGreaterThan } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What services does The Caring Soul provide?",
      content:
        "We offer in-home nursing, personal care, therapy support, medication management, and companionship.",
    },
    {
      question: "How do I book an appointment?",
      content:
        "You can book an appointment online through our easy-to-use booking system or contact us directly.",
    },
    {
      question: "Are your caregivers licensed and trained?",
      content:
        "Yes, all our caregivers are licensed professionals with extensive training and experience.",
    },
    {
      question: "Do you offer services covered by insurance?",
      content:
        "Yes, we accept many insurance plans. Contact us to confirm coverage for your needs.",
    },
    {
      question: "Can I customize the care plan for my loved one?",
      content:
        "Absolutely! We provide personalized care plans tailored to individual needs.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOpenIndex((prevIndex) => (prevIndex + 1) % faqData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [faqData.length]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? openIndex : index);
  };

  return (
    <>
      <div className="font-proxima bg-[#F8E8F5] bg-[url('/src/assets/FAQ_mobilebg.png')] md:bg-[url('/src/assets/FAQ_bg.jpg')] bg-center bg-no-repeat bg-cover ">
        <center>
          <h1 className="text-4xl text-[#567A9B] font-medium p-6 pt-20">FAQs</h1>
          <h2 className="text-4xl text-[#8a868f] font-medium p-6 md:hidden">
            Most Frequently Asked Questions
          </h2>
        </center>
        <div className="flex flex-col md:flex-row justify-between gap-6 p-6 relative pb-[220px]">
          
          <div className="FAQ-left w-full md:w-1/2 md:bg-[#F8E8F5] h-1/2 rounded-lg md:rounded-none relative top-20 md:left-5 z-10">
            <div>
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`left-ques relative p-5 border-2 border-solid rounded-[40px] md:rounded-none md:border-none m-3 md:m-0 transition-all duration-300 ${
                    openIndex === index ? "bg-white" : "hover:bg-[#fff]"
                  } group`}
                >
                  <div
                    className={`absolute left-5 top-6 h-4 w-4 rounded-full ${
                      openIndex === index
                        ? "bg-[#00BFA5]"
                        : "bg-[#d4c5d0] group-hover:bg-[#5886e8]"
                    } transition-colors duration-300`}
                  ></div>

             
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="ml-6 w-full h-full flex justify-between items-center text-lg font-medium text-gray-800 focus:outline-none group"
                  >
                    {faq.question}
                    <span
                      className={`text-xl mr-6 transform transition-transform duration-300 ${
                        openIndex === index
                          ? "rotate-90 md:rotate-0"
                          : ""
                      } ${
                        openIndex === index
                          ? "text-[#00BFA5]"
                          : "text-gray-300 group-hover:text-[#5886e8]"
                      }`}
                    >
                      <FaGreaterThan />
                    </span>
                  </button>

                 
                  <div
                    className={`mt-4 text-gray-600 ${
                      openIndex === index ? "block" : "hidden"
                    } md:hidden`}
                  >
                    {faq.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="FAQ-right hidden md:block w-1/2 h-[500px] bg-[#fff] p-6 rounded-lg shadow-md flex flex-col relative right-10">
            <div className="ml-5 relative h-full w-full">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                    openIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h2 className="text-2xl font-bold text-gray-700 mb-4">
                    {faq.question}
                  </h2>
                  <p className="text-gray-600">{faq.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
