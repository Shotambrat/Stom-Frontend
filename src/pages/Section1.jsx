import React, {useState} from 'react';
import './style/Section1.css';
import Nafisa from './../assets/img/nafisa.png';
import  Logo from './../assets/svg/tooth-svgrepo-com.svg';
import Telegramm from './../assets/svg/telegram-svgrepo-com.svg';
import { Consult } from '../components/Consult/Consult';
import Geo from './../assets/svg/geo-location-svgrepo-com.svg'


export default function Section1() {

	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
        setModalOpen(true);
    };


  return (
    <main>
		<header>
			<div class="container">
				<div class="logo">
					<img src={Logo} alt="" class="logo__img" />
				</div>

				<div class="header__info">
					<div class="phone-and-social">
						<a href="tel:+998972821015" class="phone-link">+998 97 282 10 15</a>
						<div class="social-wrap">
							<a href="https://t.me/dr_xusenova" class="social-link" target="_blank">
								<img src={Telegramm} alt="" />
							</a>
							<button class="language-btn">Uz</button>
						</div>
					</div>
					<button class="call-me-btn popup-btn language-change" onClick={openModal}>Перезвонить мне</button>
					{modalOpen && <Consult closeModal={() => setModalOpen(false)} />}
				</div>
			</div>
		</header>

		<div class="container main__container">
			<div class="main__content" >

				<div class="geo_location">
					<img src={Geo} alt="Geo" />
					<p class="language-change">Ташкент</p>
				</div>

				<h1 class="caption language-change">Комплексный спектр
					стоматологических услуг <br /><span>под ключ</span></h1>
				<h6 class="caption language-change" >Дарю идеальные улыбки уже <span>12
						лет</span></h6>

				<div class="btn-wrap">
					<button class="main-btn popup-btn language-change" onClick={openModal}>Записаться на консультацию</button>

					<p class="btn-info language-change" data-ru="Запишитесь прямо сейчас консультацию"
						data-uz="Xoziroq maslahat uchun ro'yxatdan o'ting">Запишитесь прямо сейчас на консультацию</p>
				</div>
			</div>

			<div class="vrach-wrap" data-aos="fade-left">
				<img src={Nafisa} alt="Nafisa" class="nafisa" />
				<div class="vrach-info">
					<b class="vrach-name language-change" data-ru="Хусенова Нафиса Шухратовна"
						data-uz="Xusenova Nafisa Shuxratovna">Хусенова Нафиса Шухратовна</b>
					<hr />
					<p class="vrach-role language-change" data-ru="Врач стоматолог-имплантолог,ортопед"
						data-uz="Stomatolog-implantolog, ortoped">Врач стоматолог-имплантолог,ортопед</p>
				</div>
			</div>

		</div>
	</main>
  )
}
