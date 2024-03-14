import React, { useState, useLayoutEffect } from 'react';
import './style/Section6.css';
import { Consult } from '../components/Consult/Consult';
import Clock from './../assets/img/clock.png';
import Telegram from './../assets/svg/telegram-svgrepo-com.svg';
import Instagram from './../assets/svg/instagram-1-svgrepo-com.svg';
import LogoResult from './../assets/img/logo_result.png';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LogoFooter from './../assets/img/logo_footer.png'
// import ResultAgency from '../assets/svg';

export default function Section6() {
	const { t } = useTranslation();
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
        setModalOpen(true);
    };
// container
useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.fromTo('.contact-wrap', {
      opacity: 0,
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.contact-wrap',
        start: 'top center',
      //   end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
      });
    }, []);


  return (
    <div>
      	<section class="section-13">


<div ><a href="https://yandex.uz/maps/org/83478281175/?utm_medium=mapframe&utm_source=maps" ></a><a href="https://yandex.uz/maps/10335/tashkent/category/medical_center_clinic/184106108/?utm_medium=mapframe&utm_source=maps"></a><iframe src="https://yandex.uz/map-widget/v1/org/83478281175/?ll=69.269606%2C41.286365&z=17.25" width='100%' height="400" frameborder="1" allowfullscreen="true" ></iframe> </div>

{/* style="position:relative;overflow:hidden;" */}
{/* style="color:#eee;font-size:12px;position:absolute;top:0px;" */}
{/* "color:#eee;font-size:12px;position:absolute;top:14px;" */}
{/* style="position:relative;" */}

		<div class="container">
			<div class="contact-wrap" >

				<div class="contact-info">

					<div class="contact-title contact-item">
					<p>{t('section13.contactInfo.address')}</p>
					</div>

					<hr />

					<div class="header__info contact-item">
						<div class="phone-and-social">
						<a href="tel:+998972821015" className="phone-link">{t('section13.contactInfo.phone')}</a>
							<div class="social-wrap">
								<a href="https://t.me/dr_xusenova" class="social-link" target="_blank">
									<img src={Telegram} alt="teltel" />
								</a>
							</div>
						</div>
						<button className="call-me-btn popup-btn" onClick={openModal}>{t('header.callMe')}</button>
							{modalOpen && <Consult closeModal={() => setModalOpen(false)} />}
					</div>

					<hr />

					<div class="contact-email contact-item">
					<a href={`mailto:${t('section13.contactInfo.email')}`}>{t('section13.contactInfo.email')}</a>

					</div>

					<hr />

					<div class="contact-item">
						<div class="contact-rezhim">
							<img src={Clock} alt="" />
							<div class="rezhim-content">
							<b>{t('section13.contactInfo.scheduleTitle')}</b>
                                        <p>{t('section13.contactInfo.schedule')}</p>
							</div>
						</div>
						<button onClick={openModal} className="main-btn popup-btn">{t('section13.contactInfo.consultationButton')}</button>
							{modalOpen && <Consult closeModal={() => setModalOpen(false)} />}
					</div>
				</div>
			</div>
		</div>
	</section>

	<footer>
		<div class="container">
		<p className="warning">{t('footer.note')}</p>

				<div class="footer-grid ">
					<div>
						<img src={LogoFooter} alt="" />
					</div>
					<div>
						<a href="https://www.instagram.com/stom_tashkent/" target="_blank" class="footer__social --inst">
							<img src={Instagram} alt="Instagram" />
						</a>
				
						<a href="https://t.me/dr_xusenova" target="_blank" class="footer__social --telegram">
							<img src={Telegram} alt="Telegram" />
						</a>
					</div>
					<div className='unClickable'>
					<p className="privacy-policy">{t('footer.privacyPolicy')}</p>
                        <p className="cookie-use">{t('footer.cookieUse')}</p>
					</div>
					<a href="https://result-me.uz" target="_blank" class="">
						<img src={LogoResult} alt="" />
					</a>
				</div>
				
		</div>
	</footer>
    </div>
  )
}
