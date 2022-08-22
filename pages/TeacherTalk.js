import React, { useState, useRef, useEffect } from "react";
import "./TeacherTalk.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// Data
import data from "../OnAirData.json";

function TeacherActivity() {
  return (
    <div>
      <Header />
      <TalkWindow1 />
      <OnAir />
      <TalkWindow2 />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <nav className="nav sticky">
      <div className="header--text">
        <h2> Entertainment..!</h2>
      </div>
    </nav>
  );
}

function TalkWindow1() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="conteiner--TW2">
      <div className="card--conteiner">
        <div className="row11">
          <div className="card1">
            <h3>Card 11111</h3>
          </div>
        </div>
        <div className="carousel mt-1 boder-6  my-12 mx-auto">
          {/* <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
          Our epic carousel
        </h2> */}
          <div className="relative overflow-hidden">
            <div className="flex justify-between absolute top left w-full h-full">
              <button
                onClick={movePrev}
                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled("prev")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only">Prev</span>
              </button>
              <button
                onClick={moveNext}
                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </button>
            </div>
            <div
              ref={carousel}
              className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
            >
              {data.resources.map((resource, index) => {
                return (
                  <div
                    key={index}
                    className="carousel-item text-center relative w-64 h-64 snap-start"
                  >
                    <a
                      href={resource.link}
                      className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                      style={{
                        backgroundImage: `url(${resource.picture.large || ""})`,
                      }}
                    >
                      <img
                        src={resource.picture.large || ""}
                        alt={resource.gender}
                        className="w-full aspect-square hidden"
                      />
                    </a>
                    <a
                      href={resource.link}
                      className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                    >
                      <h3 className="text-white py-6 px-3 mx-auto text-xl">
                        {resource.name.last}
                      </h3>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OnAir() {
  let navigate = useNavigate();
  return (
    <div
      className="on-air mt-36"
      onClick={() => {
        navigate("/onair");
      }}
    >
      <div className="on-air--text">
        <h3>Educators on Air</h3>
      </div>
    </div>
  );
}

function TalkWindow2() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="conteiner--TW2">
      <div className="card--conteiner">
        <div className="row11">
          <div className="card1">
            <h3>Card 1</h3>
          </div>
        </div>

        <div className="carousel my-12 mx-auto mb-1">
          <h2 className="text-3xl text-center leading-8 font-semibold  text-slate-700">
            Our epic Staff Room Charts
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex justify-between absolute top left w-full h-full">
              <button
                onClick={movePrev}
                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled("prev")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only">Prev</span>
              </button>
              <button
                onClick={moveNext}
                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </button>
            </div>
            <div
              ref={carousel}
              className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
            >
              {data.resources.map((resource, index) => {
                return (
                  <div
                    key={index}
                    className="carousel-item text-center relative w-64 h-64 snap-start"
                  >
                    <a
                      href={resource.link}
                      className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                      style={{
                        backgroundImage: `url(${resource.picture.larges || ""})`,
                      }}
                    >
                      <img
                        src={resource.picture.large || ""}
                        alt={""}
                        className="w-full aspect-square hidden"
                      />
                    </a>
                    <a
                      href={resource.link}
                      className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                    >
                      <h3 className="text-white py-6 px-3 mx-auto text-xl">
                        {resource.name.last}
                      </h3>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherActivity;
