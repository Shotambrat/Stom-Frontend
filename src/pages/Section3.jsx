import React, { useLayoutEffect } from 'react';
import './style/Section3.css';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Section3() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.fromTo('.year__right', {
      opacity: 0,
      x: -150,
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.year__right',
        start: 'top bottom',
      //   end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
      });

      gsap.fromTo('.year__left', {
        opacity: 0,
        x: 150,
      }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.year__left',
          start: 'top bottom',
        //   end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
        });
    }, []);

  const { t } = useTranslation();
  return (
    
	<section class="section-6">
  <div class="container">
    <div class="about-me">
    <b className="about-name">{t("doctorInfo.name")}</b>
    <p className="about-role">{t("doctorInfo.specialization")}</p>
      <div class="grid-2-part gugugu">

        <div class="year__right">
          <div class="experience-wrap" data-aos="fade-right">
          <b className="experience_caption">{t("section6.workExperienceTitle")}</b>
            <div class="slidedown --big">
              <div class="slidedown__block">
                <div class="slidedown__body">
                  <div class="experience_item-wrap">
                    <div class="experience_item">
                    <b className="experience__item_b">{t("section6.workPlaces.0.years")}</b>
                    <p className="experience__item_role">{t("section6.workPlaces.0.place")}</p>
                    </div>
                    <div class="experience_item experience_item_last">
                    <b className="experience__item_b">{t("section6.workPlaces.1.years")}</b>
                    <p className="experience__item_role">{t("section6.workPlaces.1.place")}</p>
                    </div>
                    <div class="experience_item experience_item_last">
                    <b className="experience__item_b">{t("section6.workPlaces.2.years")}</b>
                    <p className="experience__item_role">{t("section6.workPlaces.2.place")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="year__left">

          <div class="experience-wrap" data-aos="fade-left">
          <b className="experience_caption">{t("section6.educationTitle")}</b>

            <div class="slidedown --big">
              <div class="slidedown__block">
                <div class="slidedown__body">
                  <div class="experience_item-wrap">
                    <div class="experience_item">
                    <b className="experience__item_b">{t("section6.educationPlaces.0.years")}</b>
                    <p className="experience__item_role">{t("section6.educationPlaces.0.place")}</p>

                    </div>
                    <div class="experience_item ">
                    <b className="experience__item_b">{t("section6.educationPlaces.1.years")}</b>
                    <p className="experience__item_role">{t("section6.educationPlaces.1.place")}</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>
  )
}
