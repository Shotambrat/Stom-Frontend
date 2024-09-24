import React, { useState, useLayoutEffect } from "react";
import "./style/Section1.css";
import Nafisa from "./../assets/img/nafisa.png";
import Logo from "./../assets/img/logo.png";
import Telegramm from "./../assets/svg/telegram-svgrepo-com.svg";
import { Consult } from "../components/Consult/Consult";
import Geo from "./../assets/svg/geo-location-svgrepo-com.svg";
import { useTranslation } from "react-i18next"; // Импорт из react-i18next
import gsap from "gsap";

export default function Section1() {
  const { t, i18n } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useLayoutEffect(() => {
    gsap.fromTo(
      ".logologo",
      {
        y: -100,
        opacity: 0,
        stagger: 0.2,
      },
      {
        duration: 0.3,
        ease: "linear",
        y: 0,
        opacity: 1,
      }
    );
    gsap.fromTo(
      ".main__content",
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        duration: 0.3,
        opacity: 1,
        ease: "linear",
      }
    );

    gsap.fromTo(
      ".vrach-wrap",
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        duration: 0.3,
        opacity: 1,
        ease: "linear",
      }
    );
  }, []);

  return (
    <main>
      <header>
        <div class="container">
          <div className="logologo">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
          </div>

          <div className="head-inf">
            <div class="header__info">
              <div class="phone-and-social">
                <a
                  onClick={() => {
                    fetch(
                      "https://api.stom-tashkent.uz/api/count?button=call",
                      {
                        method: "POST",
                      }
                    ).catch((error) => {
                      console.error("Error:", error);
                    });
                  }}
                  href="tel:+998972821015"
                  class="phone-link"
                >
                  +998 97 282 10 15
                </a>
                <div class="social-wrap">
                  <a
                    href="https://t.me/dr_xusenova"
                    class="social-link"
                    target="_blank"
                    onClick={() => {
                      fetch(
                        "https://api.stom-tashkent.uz/api/count?button=telegram",
                        {
                          method: "POST",
                        }
                      ).catch((error) => {
                        console.error("Error:", error);
                      });
                    }}
                  >
                    <img src={Telegramm} alt="" />
                  </a>
                  <button
                    onClick={() => changeLanguage(t("header.changeLanguage"))}
                  >
                    {t("header.changeLanguage")}
                  </button>
                </div>
              </div>
              <button class="call-me-btn" onClick={openModal}>
                {t("header.callMe")}
              </button>
              {modalOpen && <Consult closeModal={() => setModalOpen(false)} />}
            </div>
          </div>
        </div>
      </header>

      <div class="container main__container">
        <div class="main__content">
          <div class="geo_location">
            <img src={Geo} alt="Geo" />
            <p>{t("main.location")}</p>
          </div>

          <h1 class="caption language-change">
            {t("main.servicesCaption")} <br />
            <span>{t("main.servicesCaptionSpan")}</span>
          </h1>
          <h6 class="caption language-change">
            {t("main.smilesYears")} <span>{t("main.smilesYearsSpan")}</span>
          </h6>
          <div class="btn-wrap">
            <button
              class="main-btn popup-btn language-change"
              onClick={openModal}
            >
              {t("main.consultationButtonText")}
            </button>
            <p class="btn-info language-change">
              {t("main.consultationButtonInfo")}
            </p>
          </div>
        </div>

        <div class="vrach-wrap" data-aos="fade-left">
          <img src={Nafisa} alt="Nafisa" class="nafisa" />
          <div class="vrach-info">
            <b class="vrach-name language-change">{t("doctorInfo.name")}</b>{" "}
            <hr />
            <p class="vrach-role language-change">
              {t("doctorInfo.specialization")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
