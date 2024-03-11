import React from 'react';
import './style/Section4.css';
import Sert1 from '../assets/img/sertificat-1.jpg';
import Sert2 from '../assets/img/sertificat-2.jpg';
import Sert3 from '../assets/img/sertificat-3.jpg';
import Sert4 from '../assets/img/sertificat-4.jpg';
import Sert5 from '../assets/img/sertificat-5.jpg';

export default function Section4() {
  return (
    <>
    	<section class="section-7">
		<div class="container">
			<div class="swiper swiper-2">
				<div class="swiper-wrapper">
					<div class="swiper-slide" data-aos="flip-right">
						<img src={Sert1} alt="" />
					</div>
					<div class="swiper-slide" data-aos="flip-right">
						<img src={Sert2} alt="" />
					</div>
					<div class="swiper-slide" data-aos="flip-right">
						<img src={Sert3} alt="" />
					</div>
					<div class="swiper-slide" data-aos="flip-right">
						<img src={Sert4} alt="" />
					</div>
					<div class="swiper-slide" data-aos="flip-right">
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
			<h2 data-aos="fade-right"><b class="language-change" data-ru="Прайс" data-uz="Narxlar">Прайс</b></h2>

			<div class="price-wrap">

				<div class="price-item" data-aos="fade-right">
					<p class="language-change" data-ru="Осмотр" data-uz="Tekshirish">Осмотр</p>
					<b>50 000 сум.</b>
				</div>

				<div class="price-item" data-aos="fade-right">
					<p class="language-change" data-ru="Консультация" data-uz="Maslahat">Консультация</p>
					<b>200 000 сум.</b>
				</div>

				<div class="price-item" data-aos="fade-right">
					<p class="language-change" data-ru="Рентген" data-uz="Rentgen">Рентген</p>
					<b>40 000 сум.</b>
				</div>

				<div class="price-item" data-aos="fade-right">
					<p class="language-change" data-ru="Анестизия" data-uz="Anesteziya">Анестизия</p>
					<b>15 000 - 50 000 сум.</b>
				</div>

				<div class="price-item" data-aos="fade-right">
					<p class="language-change" data-ru="Кофердам" data-uz="Kofferdam">Кофердам</p>
					<b>80 000 сум.</b>
				</div>

				<div class="price-item" data-aos="fade-right">
					<p class="language-change" data-ru="Наложение ректационной нити (1 зуб)"
						data-uz="Retraktsion ipni qo'llash (1 tish)">Наложение ректационной нити (1 зуб)</p>
					<b>15 000 сум.</b>
				</div>

				<div class="price-item" data-aos="fade-right">
					<p class="language-change" data-ru="Профессиональное отбеливание зубов"
						data-uz="Professional tishlarni oqartirish">Профессиональное отбеливание зубов</p>
					<b>1 500 000 сум.</b>
				</div>

				<div class="price-item" data-aos="fade-right">
					<p class="language-change" data-ru="Ультразвуковая чистка зубов"
						data-uz="Ultrasonik tishlarni tozalash">Ультразвуковая чистка зубов</p>
					<b>600 000 сум.</b>
				</div>

			</div>
		</div>
	</section>
    </>
  )
}
