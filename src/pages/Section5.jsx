import React, { useState, useLayoutEffect } from "react";
import "./style/Section5.css";
import Consult1 from "./../assets/img/consult-1.png";
import Consult2 from "./../assets/img/consult-2.png";
import Consult3 from "./../assets/img/consult-3.png";
import Dantist from "./../assets/img/dantist.png";
import Nafisa3 from "./../assets/img/nafisa-3.png";
import Avatar from "./../assets/svg/woman-svgrepo-com.svg";
import Tel from "./../assets/svg/telephone-svgrepo-com.svg";
import { Consult } from "../components/Consult/Consult";
import { useTranslation } from "react-i18next";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import axios from 'axios';
import SuccessModal from "../components/Consult/SuccessModal";

export default function Section5() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const [name, setName] = useState('');
	const [tel, setTel] = useState('');
  const { t } = useTranslation();


	const handleNameChange = (e) => setName(e.target.value);
  const handleTelChange = (e) => setTel(e.target.value);

  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращение стандартного поведения формы

    // Создание FormData объекта и добавление данных формы
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', tel);

    try {
      // Замените 'URL_К_ВАШЕМУ_AJAX.PHP' на реальный URL вашего скрипта на сервере
      const response = await axios.post('../../ajax.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data === '1') {
        // Успешная отправка, отображаем модальное окно успеха или любое другое уведомление
        <SuccessModal />
        // Вызов SuccessModal (проверьте, нужен ли здесь вызов компонента)
      } else {
        // Обработка ошибок с сервера
        <SuccessModal />

      }

      // Сброс формы
      setName('');
      setTel('');
    } catch (error) {
      console.error('Ошибка при отправке формы: ', error);
      alert('Не удалось отправить форму');
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq == index ? null : index);
  };


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.fromTo('.cons1', {
      opacity: 0,
      x: -300,
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.cons1',
        start: 'top center',
      //   end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
      });
	  gsap.fromTo('.cons2', {
		opacity: 0,
		x: 300,
	  }, {
		opacity: 1,
		x: 0,
		scrollTrigger: {
		  trigger: '.cons2',
		  start: 'top center',
		//   end: 'bottom center',
		  toggleActions: 'play none none reverse'
		}
		});
		gsap.fromTo('.cons3', {
			opacity: 0,
			x: -300,
		  }, {
			opacity: 1,
			x: 0,
			scrollTrigger: {
			  trigger: '.cons3',
			  start: 'top center',
			//   end: 'bottom center',
			  toggleActions: 'play none none reverse'
			}
			});
// form-wrap
	  gsap.fromTo('.text-right', {
		opacity: 0,
		x: -150,
	  }, {
		opacity: 1,
		x: 0,
		scrollTrigger: {
		  trigger: '.text-right',
		  start: 'top bottom',
		//   end: 'bottom center',
		  toggleActions: 'play none none reverse'
		}
		});

		gsap.fromTo('.form-content', {
			opacity: 0,
			y: -150,
		  }, {
			opacity: 1,
			y: 0,
			scrollTrigger: {
			  trigger: '.form-content',
			  start: 'top center',
			//   end: 'bottom center',
			  toggleActions: 'play none none reverse'
			}
			});
    }, []);

  return (
    <div>
      <section class="section-8">
        <div class="container">
          <h2 className="text-right">{t("section8.firstConsultationTitle")}</h2>
          <div class="grid-2-part huhuhu">
            <div>
              <div class="consultacia">
                <div class="consultacia-item cons1" data-aos="flip-right">
                  <img src={Consult1} alt="" />
                  <div class="consultacia-content">
                    <b className="consultacia-head">
                      {t(
                        "section8.consultationSteps.inspectionAndDiagnostics.title"
                      )}
                    </b>
                    <p className="consultacia-desc">
                      {t(
                        "section8.consultationSteps.inspectionAndDiagnostics.description"
                      )}
                    </p>
                  </div>
                </div>

                <div class="consultacia-item cons2" data-aos="flip-right">
                  <img src={Consult2} alt="" />
                  <div class="consultacia-content">
                    <b className="consultacia-head">
                      {t(
                        "section8.consultationSteps.discussionAndTreatmentPlan.title"
                      )}
                    </b>
                    <p className="consultacia-desc">
                      {t(
                        "section8.consultationSteps.discussionAndTreatmentPlan.description"
                      )}
                    </p>
                  </div>
                </div>

                <div class="consultacia-item cons3" data-aos="flip-right">
                  <img src={Consult3} alt="" />
                  <div class="consultacia-content">
                    <b className="consultacia-head">
                      {t("section8.consultationSteps.prevention.title")}
                    </b>
                    <p className="consultacia-desc">
                      {t("section8.consultationSteps.prevention.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dantist">
              <img src={Dantist} alt="" data-aos="fade-left" />
            </div>
          </div>

          <div class="form-wrap">
            <form class="telegram-form" id="form-popup-2" onSubmit={handleSubmit}>
              <div class="text-center">
                <h2>
                  <b> {t("section8.consultationFormTitle")} </b>
                </h2>
              </div>

              <div class="form-content">
                <label for="name" class="form-label" data-aos="flip-down">
                  <img src={Avatar} alt="" class="input-icon" />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t("section8.consultationForm.namePlaceholder")}
                    required
                    autocomplete="off"
                    value={name}
                    onChange={handleNameChange}
                  />
                </label>

                <label for="phone" class="form-label" data-aos="flip-down">
                  <img src={Tel} alt="Иконка телефона" class="input-icon" />
                  <input
                    type="text"
                    name="phone"
                    class="masked"
                    id="phone"
                    value={tel}
                    onChange={handleTelChange}
                    placeholder={t(
                      "section8.consultationForm.phonePlaceholder"
                    )}
                    required
                  />
                </label>

                <label for="submit" class="form-label" data-aos="flip-down">
                  <button className="main-btn" type="submit">
                    {t("section8.consultationForm.submitButtonText")}
                  </button>
                </label>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section class="section-10">
        <div class="container">
          <div class="s10-content">
            <h2>{t("section10.consultationNow")}</h2>
            <button class="main-btn popup-btn" onClick={openModal}>
              {t("section10.consultationButton")}
            </button>
            {modalOpen && <Consult closeModal={() => setModalOpen(false)} />}
          </div>

          <img src={Nafisa3} alt="" class="s10-img" />
        </div>
      </section>

      <section className="section-11">
        <div className="container">
          <div className="text-center">
            <h2>{t("section11.frequentQuestions")}</h2>
          </div>
          <div className="faq">
            {t("section11.faqItems", { returnObjects: true }).map(
              (faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeFaq === index ? "faq-item-active" : "faq-item-default"
                  }`}
                  data-aos="fade-down"
                >
                  <div className="faq-card" onClick={() => toggleFaq(index)}>
                    <p>{faq.question}</p>
                    <div className="faq-plus">
                      <p>+</p>
                    </div>
                  </div>
                  <div
                    className={`faq-content ${
                      activeFaq === index ? "show" : ""
                    }`}
                    style={{ display: activeFaq === index ? "block" : "none" }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )
            )}
            {/* {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${activeFaq === index ? 'faq-item-active' : 'faq-item-default'}`} data-aos="fade-down">
              <div className="faq-card" onClick={() => toggleFaq(index)}>
                <p className="language-change">{faq.question}</p>
                <div className="faq-plus"><p>+</p></div>
              </div>
              <div className={`faq-content ${activeFaq == index ? 'show' : ''}`} style={{display: activeFaq == index ? 'block' : '',
			  				transition: 'display 1s ease-out'}} > 
                <p className="language-change">{faq.answer}</p>
              </div>
            </div>
          ))} */}
          </div>
        </div>
      </section>

      <section class="section-12">
        <div class="container">
          <div class="text-center">
		  <h2>{t('section12.haveQuestions')}</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
