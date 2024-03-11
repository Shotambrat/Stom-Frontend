import React, {useState} from 'react';
import './style/Section2.css';
import FooterLogo from './../assets/svg/tooth-svgrepo-com.svg'
import SectioniMG2 from './../assets/img/section-2.png';
import Uslugi1 from './../assets/img/usligi-1.png'
import Uslugi2 from './../assets/img/usligi-2.png'
import Uslugi3 from './../assets/img/usligi-3.png'
import Uslugi4 from './../assets/img/usligi-4.png'
import Uslugi5 from './../assets/img/usligi-5.png'
import Uslugi6 from './../assets/img/usligi-6.png'
import Problems from './../assets/img/problems.png'
import Cart2 from './../assets/svg/left-arrow-direction-svgrepo-com.svg';


export default function Section2() {
		const [activeItem, setActiveItem] = useState("dot-item-5"); // По умолчанию активен пятый элемент
	  
		const handleMouseEnter = (itemId) => {
		  setActiveItem(itemId);
		};
  return (
    <>
    <section class="section-2">
		<div class="container">
			<div class="advantages">
				<div class="advantage-item">
					<span class="advantage-text language-change">Любовь побеждает
						все, кроме бедности и зубной боли</span>
				</div>


				<div class="advantage-item">
					<img src={FooterLogo} alt="" />
				</div>
			</div>
		</div>
	</section>


	<section class="section-2-2">
		<div class="container">
			<div class="grid-2-part">
				<div>
					<img src={SectioniMG2} alt="" data-aos="fade-right" />
				</div>
				<div class="about-vrach" data-aos="fade-left">


					<div class="slidedown">
						<div class="slidedown__block">
							<div class="slidedown__body">
								<b>Приветствую!
									Я – Нафиса Шухратовна, семейный стоматолог с 12 летним стажем, посвященного
									улучшению улыбок.</b>

								<p>
									Оказываю полный спектр услуг – от удаления кариеса до установки протезов. <br />
									Специализируюсь не только на лечении, но и на сохранение здоровья зубов путем
									эффективной профилактики. Стремлюсь к комфортному и безболезненному проведению
									процедур. Свой кабинет вижу как уютное пространство, где каждый чувствует себя
									защищенным.</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</section>

  <section class="section-3">
		<div class="container">
			<h2 class="language-change" data-ru="Ко мне вы можете обратиться по таким специализациям:"
				data-uz="Siz menga quyidagi mutaxassisliklar bo'yicha murojaat qilishingiz mumkin:">Ко мне вы можете
				обратиться <b>по таким специализациям:</b></h2>

			<div class="uslugi">

				<div class="uslugi__item">
					<p>Лечение <br /> Пломбирование </p>
					<img src={Uslugi1} alt="" />
				</div>

				<div class="uslugi__item" data-aos="fade-right">
					<p class="language-change" data-ru="Удаление зубов Реставрация" data-uz="Tishlarni olib tashlash
					Qayta tiklash">
						Удаление зубов <br /> Реставрация</p>
					<img src={Uslugi2} alt="" />
				</div>

				<div class="uslugi__item" data-aos="fade-right">
					<p class="language-change" data-ru="Коронки" data-uz="Tojlar">Коронки</p>
					<img src={Uslugi3} alt="" />
				</div>

				<div class="uslugi__item" data-aos="fade-right">
					<p class="language-change" data-ru="Имплантаты" data-uz="Implantlar">Имплантаты</p>
					<img src={Uslugi4} alt="" />
				</div>

				<div class="uslugi__item" data-aos="fade-right">
					<p class="language-change" data-ru="Виниры" data-uz="Qoplamalar">Виниры</p>
					<img src={Uslugi5} alt="" />
				</div>

				<div class="uslugi__item uslugi__item_brown popup-btn" data-aos="fade-right">
					<p class="language-change" data-ru="Записаться на консультацию"
						data-uz="Maslahat olish uchun ro'yxatdan o'ting">Записаться на косультацию</p>
					<img src={Uslugi6} alt="" />
				</div>

			</div>
		</div>
	</section>

	<section class="section-4">
		<div class="container">
			<div class="text-center">
				<h2 class="language-change" data-ru="Какие проблемы решаю?" data-uz="Qanday muammolar hal qilinadi?">
					Какие проблемы <b>решаю?</b></h2>

				<div class="problems">
					<img src={Problems} alt="" />

					<div class="dots">

					<div
						className={`dot-item dot-item-1 dot-item-left ${activeItem === "dot-item-1" ? "dot-item-active" : ""}`}
						onMouseEnter={() => handleMouseEnter("dot-item-1")}
					>
							<b class="dot-title language-change" data-ru="Кариес и зубная дека"
								data-uz="Karies va tish palubasi">Кариес и зубная дека</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2} alt="" class="cart2" />
									<p class="language-change" data-ru="Кариес и зубная дека"
										data-uz="Karies va tish palubasi">Кариес и зубная дека</p>
								</div>
								<div class="problem-info">
									<p class="language-change"
										data-ru="Стоматолог проводит осмотр и диагностику, затем удаляет пораженные ткани и восстанавливает поврежденные зубы с использованием пломб и реставраций."
										data-uz="Tish shifokori tekshiruv va diagnostika o'tkazadi, so'ngra ta'sirlangan to'qimalarni olib tashlaydi va shikastlangan tishlarni plomba va restavratsiya yordamida tiklaydi.">
										Стоматолог проводит осмотр и диагностику, затем удаляет пораженные ткани и
										восстанавливает поврежденные зубы с использованием пломб и реставраций.</p>
								</div>
							</div>
						</div>
						<div
							className={`dot-item dot-item-2 dot-item-left ${activeItem === "dot-item-2" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-2")}
						>
							<b class="dot-title language-change" data-ru="Пародонтит и гингивит"
								data-uz="Periodontit va gingivit">Пародонтит и гингивит</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2} alt="" class="cart2" />
									<p class="language-change" data-ru="Пародонтит и гингивит"
										data-uz="Periodontit va gingivit">Пародонтит и гингивит</p>
								</div>
								<div class="problem-info">
									<p class="language-change" data-ru="На первой консультации я смогу поставить вам точный диагноз и прописать план
									лечения со всеми расценками, которые осанутся неизменными"
										data-uz="Birinchi maslahatlashuvda men sizga aniq tashxis qo'yishim va o'zgarishsiz qoladigan barcha stavkalar bilan davolash rejasini yozishim mumkin">
										На первой консультации я смогу поставить вам точный диагноз и прописать план
										лечения со всеми расценками, которые осанутся неизменными</p>
								</div>
							</div>
						</div>
						<div
							className={`dot-item dot-item-3 dot-item-left ${activeItem === "dot-item-3" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-3")}
						>
							<b class="dot-title language-change" data-ru="Ортодонтия"
								data-uz="Ortodontiya">Ортодонтия</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2}alt="" class="cart2" />
									<p class="language-change" data-ru="Ортодонтия" data-uz="Ortodontiya">Ортодонтия</p>
								</div>
								<div class="problem-info">
									<p class="language-change" data-ru="В своей работе я использую только высококлассные материалы, качество которых
									подтверждено сертификатами"
										data-uz="Men o'z ishimda faqat yuqori sifatli materiallardan foydalanaman, ularning sifati sertifikatlar bilan tasdiqlangan">
										В своей работе я использую только высококлассные материалы, качество которых
										подтверждено сертификатами</p>
								</div>
							</div>
						</div>
						<div
							className={`dot-item dot-item-4 dot-item-left ${activeItem === "dot-item-4" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-4")}
						>
							<b class="dot-title language-change" data-ru="Хирургическое вмешательство"
								data-uz="Jarrohlik aralashuvi">Хирургическое вмешательство</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2} alt="" class="cart2" />
									<p class="language-change" data-ru="Хирургическое вмешательство"
										data-uz="Jarrohlik aralashuvi">Хирургическое вмешательство</p>
								</div>
								<div class="problem-info">
									<p class="language-change" data-ru="Я слежу за тем, чтобы во время приема пациент не испытывал ни эмоциональный, ни
									физический дискомфорт." data-uz="Qabul paytida bemor hissiy yoki jismoniy noqulaylikni boshdan kechirmasligiga ishonch hosil qilaman.">
										Я слежу за тем, чтобы во время приема пациент не испытывал ни эмоциональный, ни
										физический дискомфорт.</p>
								</div>
							</div>
						</div>

						<div
							className={`dot-item dot-item-5 dot-item-right ${activeItem === "dot-item-5" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-5")}
						>
							<b class="dot-title language-change" data-ru="Травмы и чрезмерный износ"
								data-uz="Jarohatlar va haddan tashqari eskirish">Травмы и чрезмерный износ</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2}alt="" class="cart2" />
									<p class="language-change" data-ru="Травмы и чрезмерный износ"
										data-uz="Jarohatlar va haddan tashqari eskirish">Травмы и чрезмерный износ</p>
								</div>
								<div class="problem-info">
									<p class="language-change" data-ru="Система очистки инструментов в несколько этапов гарантирует 100% стерилизацию.
									Половина материалов являются одноразовыми."
										data-uz="Asboblarni tozalash tizimi bir necha bosqichda 100% sterilizatsiyani kafolatlaydi. Materiallarning yarmi bir martalik.">
										Система очистки инструментов в несколько этапов гарантирует 100% стерилизацию.
										Половина материалов являются одноразовыми.</p>
								</div>
							</div>
						</div>
						<div
							className={`dot-item dot-item-6 dot-item-right ${activeItem === "dot-item-6" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-6")}
						>
							<b class="dot-title language-change"
								data-ru="Определение и лечение рака и других заболеваний"
								data-uz="Saraton va boshqa kasalliklarni aniqlash va davolash">Определение и лечение
								рака и других заболеваний</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2} alt="" class="cart2" />
									<p class="language-change" data-ru="Определение и лечение рака и других заболеваний"
										data-uz="Saraton va boshqa kasalliklarni aniqlash va davolash">Определение и
										лечение рака и других заболеваний</p>
								</div>
								<div class="problem-info">
									<p class="language-change" data-ru="У меня на постоянной основе действуют различные системы лояльности. Так же
									доступно лечение в банковскую рассрочку"
										data-uz="Menda doimiy ravishda turli xil sodiqlik tizimlari mavjud. Bankni bo'lib-bo'lib to'lash orqali davolanish ham mavjud">
										У меня на постоянной основе действуют различные системы лояльности. Так же
										доступно лечение в банковскую рассрочку</p>
								</div>
							</div>
						</div>
						<div
							className={`dot-item dot-item-7 dot-item-right ${activeItem === "dot-item-7" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-7")}
						>
							<b class="dot-title language-change" data-ru="Стоматологическая эстетика"
								data-uz="Tish estetikasi">Стоматологическая эстетика</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2} alt="" class="cart2" />
									<p class="language-change" data-ru="Стоматологическая эстетика"
										data-uz="Tish estetikasi">Стоматологическая эстетика</p>
								</div>
								<div class="problem-info">
									<p class="language-change"
										data-ru="Проведение процедур по отбеливанию зубов, наращиванию зубов, восстановлению формы зубов и улучшению общей внешности улыбки."
										data-uz="Tishlarni oqartirish, tishlarni qurish, tish shaklini tiklash va tabassumning umumiy ko'rinishini yaxshilash bo'yicha protseduralarni o'tkazish.">
										Проведение процедур по отбеливанию зубов, наращивание зубов, восстановление
										формы зубов и улучшению общей внешности улыбки.</p>
								</div>
							</div>
						</div>
						<div
							className={`dot-item dot-item-8 dot-item-right ${activeItem === "dot-item-8" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-8")}
							onMouseLeave={() => setActiveItem(null)}
              			>	
							<b class="dot-title language-change" data-ru="Профилактика и обучение пациентов"
								data-uz="Bemorlarning oldini olish va o'qitish">Профилактика и обучение пациентов</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2} alt="" class="cart2" />
									<p class="language-change" data-ru="Профилактика и обучение пациентов"
										data-uz="Bemorlarning oldini olish va o'qitish">Профилактика и обучение
										пациентов</p>
								</div>
								<div class="problem-info">
									<p class="language-change" data-ru="Я иду в ногу со временем, поэтому использую только новейшее дорогостоящее
									оборудование, чтобы Вам было максимально комфортно."
										data-uz="Men zamon bilan hamnafasman, shuning uchun imkon qadar qulay bo'lishingiz uchun faqat eng yangi qimmatbaho uskunalardan foydalanaman.">
										Я иду в ногу со временем, поэтому использую только новейшее дорогостоящее
										оборудование, чтобы Вам было максимально комфортно.</p>
								</div>
							</div>
						</div>


					</div>
				</div>
			</div>
		</div>
	</section>
  </>
  )
}
