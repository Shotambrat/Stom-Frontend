import React, { useState } from 'react';
import './style/Section6.css';
import { Consult } from '../components/Consult/Consult';
import Clock from './../assets/img/clock.png';
import Telegram from './../assets/svg/telegram-svgrepo-com.svg';
import Instagram from './../assets/svg/instagram-1-svgrepo-com.svg';
import LogoResult from './../assets/img/logo_result.png'
// import ResultAgency from '../assets/svg';

export default function Section6() {
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
        setModalOpen(true);
    };



  return (
    <div>
      	<section class="section-13">


<div ><a href="https://yandex.uz/maps/org/83478281175/?utm_medium=mapframe&utm_source=maps" ></a><a href="https://yandex.uz/maps/10335/tashkent/category/medical_center_clinic/184106108/?utm_medium=mapframe&utm_source=maps"></a><iframe src="https://yandex.uz/map-widget/v1/org/83478281175/?ll=69.269606%2C41.286365&z=17.25" width='100%' height="400" frameborder="1" allowfullscreen="true" ></iframe> </div>

{/* style="position:relative;overflow:hidden;" */}
{/* style="color:#eee;font-size:12px;position:absolute;top:0px;" */}
{/* "color:#eee;font-size:12px;position:absolute;top:14px;" */}
{/* style="position:relative;" */}

		<div class="container">
			<div class="contact-wrap" data-aos="flip-right">

				<div class="contact-info">

					<div class="contact-title contact-item">
						<p class="language-change" data-ru="Ташкент, ул Нукусская, «Lanvin Clinic»"
							data-uz="Toshkent, Nukus ko'chasi, «Lanvin klinikasi»">
							Ташкент, ул Нукусская,<br /><span>«Lanvin Clinic»</span>
						</p>
					</div>

					<hr />

					<div class="header__info contact-item">
						<div class="phone-and-social">
							<a href="tel:+998972821015" class="phone-link">+998 97 282 10 15</a>
							<div class="social-wrap">
								<a href="https://t.me/dr_xusenova" class="social-link" target="_blank">
									<img src="images/telegram.svg" alt="" />
								</a>
							</div>
						</div>
						<button class="call-me-btn popup-btn language-change" data-ru="Перезвонить мне"
							data-uz="Menga qo'ng'iroq qiling" onClick={openModal}>Перезвонить мне</button>
							{modalOpen && <Consult closeModal={() => setModalOpen(false)} />}
					</div>

					<hr />

					<div class="contact-email contact-item">
						<a href="mailto:xusenovanafisa17@gmail.com">xusenovanafisa17@gmail.com</a>
					</div>

					<hr />

					<div class="contact-item">
						<div class="contact-rezhim">
							<img src={Clock} alt="" />
							<div class="rezhim-content">
								<b class="language-change" data-ru="График приема" data-uz="Qabul jadvali">График
									приема</b>
								<p class="language-change" data-ru="Пн-Сб с 09.00-20.00"
									data-uz="Dushanba-shanba 09.00 dan 20.00 gacha">Пн-Сб с 09.00-20.00</p>
							</div>
						</div>
						<button onClick={openModal} class="main-btn popup-btn language-change">Записаться на консультацию</button>
							{modalOpen && <Consult closeModal={() => setModalOpen(false)} />}
					</div>
				</div>
			</div>
		</div>
	</section>

	<footer>
		<div class="container">
			<p class="warning language-change" data-ru="*Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно
			информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями
			Административного кодекса Республики Узбекистан." data-uz="* Sizning e'tiboringizni ushbu veb-sayt faqat kiyishiga qaratamiz
			axborot tabiati va hech qanday sharoitda qoidalar bilan belgilanadigan ommaviy taklif emas
			O 'zbekiston Respublikasi ma' muriy kodeksining">*Обращаем Ваше внимание на то, что данный интернет-сайт носит
				исключительно
				информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями
				Административного кодекса Республики Узбекистан.</p>

				<div class="footer-grid">
					<div>
						<img src="images/logo_footer.svg" alt="" />
					</div>
					<div>
						<a href="https://www.instagram.com/stom_tashkent/" target="_blank" class="footer__social --inst">
							<img src={Instagram} alt="Instagram" />
						</a>
				
						<a href="https://t.me/dr_xusenova" target="_blank" class="footer__social --telegram">
							<img src={Telegram} alt="Telegram" />
						</a>
					</div>
					<div>
						<a class="language-change" data-ru="Политика конфиденциальности"
							data-uz="Maxfiylik siyosati">Политика конфиденциальности</a>
						<a class="language-change" data-ru="Использование cookie"
							data-uz="Cookie-fayllardan foydalanish">Использование cookie</a>
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
