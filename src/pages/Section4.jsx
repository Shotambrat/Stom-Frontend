import React, { useLayoutEffect } from "react";
import "./style/Section4.css";
import Sert1 from "../assets/img/sertificat-1.jpg";
import Sert2 from "../assets/img/sertificat-2.jpg";
import Sert3 from "../assets/img/sertificat-3.jpg";
import Sert4 from "../assets/img/sertificat-4.jpg";
import Sert5 from "../assets/img/sertificat-5.jpg";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Section4() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".price-right1",
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".price-right1",
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".price-right2",
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".price-right2",
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".price-right3",
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".price-right3",
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".price-right4",
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".price-right4",
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".price-right5",
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".price-right5",
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".price-right6",
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".price-right6",
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".price-right7",
      {
        opacity: 0,
        x: -50,
        duration: 0.1,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".price-right7",
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".price-right8",
      {
        opacity: 0,
        x: -50,
        duration: 0.1,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".price-right8",
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <section class="section-7">
        <h2 className="holah">Сертификаты</h2>
        <div class="gaga">
          <div class="swiper swiper-2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src={Sert1} alt="" />
              </div>
              <div class="swiper-slide">
                <img src={Sert2} alt="" />
              </div>
              <div class="swiper-slide">
                <img src={Sert3} alt="" />
              </div>
              <div class="swiper-slide">
                <img src={Sert4} alt="" />
              </div>
              <div class="swiper-slide">
                <img src={Sert5} alt="" />
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </section>

      <section class="section-7-2">
        <div class="container">
          <b className="price-text">{t("section7.priceTitle")}</b>

          <div class="price-wrap">
            <div class="price-item price-right1">
              <p>{t("section7.priceList.0.service")}</p>
              <b>{t("section7.priceList.0.price")}</b>
            </div>

            <div class="price-item price-right2">
              <p>{t("section7.priceList.1.service")}</p>
              <b>{t("section7.priceList.1.price")}</b>
            </div>

            <div class="price-item price-right3">
              <p>{t("section7.priceList.2.service")}</p>
              <b>{t("section7.priceList.2.price")}</b>
            </div>

            <div class="price-item price-right4">
              <p>{t("section7.priceList.3.service")}</p>
              <b>{t("section7.priceList.3.priceRange")}</b>
            </div>

            <div class="price-item price-right5">
              <p>{t("section7.priceList.4.service")}</p>
              <b>{t("section7.priceList.4.price")}</b>
            </div>

            <div class="price-item price-right6">
              <p>{t("section7.priceList.5.service")}</p>
              <b>{t("section7.priceList.5.price")}</b>
            </div>

            <div class="price-item price-right7">
              <p>{t("section7.priceList.6.service")}</p>
              <b>{t("section7.priceList.6.price")}</b>
            </div>

            <div class="price-item price-right8">
              <p>{t("section7.priceList.7.service")}</p>
              <b>{t("section7.priceList.7.price")}</b>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
