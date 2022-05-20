import React from "react";
import TextLoop from "react-text-loop";

const sliderContent = {
  name: "Mélanie Tatier",
  description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
   magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`,
  btnText: "Prendre rdv",
  btnText2: "",
};

const SliderFour = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two slider-four"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/slider/1.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-12">
              <div className="type-box">
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead"> Acupuncture</p>
                    <p className="loop-text lead"> Phytothérapie</p>
                    <p className="loop-text lead"> Soins Energétiques</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div className="d-flex btn-wrapper">
                  <a
                    className="px-btn btn-outline mr-4"
                    href="#contact"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="500"
                  >
                    {sliderContent.btnText}
                  </a>
                  {/*<a*/}
                  {/*  className="px-btn btn-outline"*/}
                  {/*  href="#work"*/}
                  {/*  data-aos="fade-up"*/}
                  {/*  data-aos-duration="1200"*/}
                  {/*  data-aos-delay="500"*/}
                  {/*>*/}
                  {/*  {sliderContent.btnText2}*/}
                  {/*</a>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderFour;
