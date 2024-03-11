import React, {useState} from 'react';
import './style/Section5.css';
import Consult1 from './../assets/img/consult-1.png';
import Consult2 from './../assets/img/consult-2.png';
import Consult3 from './../assets/img/consult-3.png';
import Dantist from './../assets/img/dantist.png';
import Nafisa3 from './../assets/img/nafisa-3.png';
import Avatar from './../assets/svg/woman-svgrepo-com.svg';
import Tel from './../assets/svg/telephone-svgrepo-com.svg';
import { Consult } from '../components/Consult/Consult';

export default function Section5() {
	const [modalOpen, setModalOpen] = useState(false);
	const [activeFaq, setActiveFaq] = useState(null);
	console.log(activeFaq)



	const openModal = () => {
        setModalOpen(true);
    };

	const toggleFaq = (index) => {
		console.log("Current index: ", index); // Для отладки
		setActiveFaq(activeFaq == index ? null : index);
	};

	const faqData = [
		{
		  question: "Больно ли ставить имплантат?",
		  answer: "Вопреки распространённому мнению, установка имплантатов безболезненная процедура, так как проводится с использованием современных анестетиков. После имплантации, пациент чувствует незначительную боль, которая купируется местными обезболивающими препаратами.",
		  // Добавьте данные-атрибуты перевода, если нужно
		},
		{
		  question: "Как долго пациент привыкает к зубам на имплантатах?",
		  answer: "Имплантация при множественном отсутствии зубов процесс длительный, и адаптация к новым зубам будет зависеть от того, сколько времени пациент ходил без зубов. Но все же, пациенты привыкают быстро, так как необходимо лишь время, для того чтобы вспомнить свои забытые рефлексы жевания.",
		  // Добавьте данные-атрибуты перевода, если нужно
		},
		{
		  question: "Кому не проводится имплантация?",
		  answer: "Имплатация не проводится пациентам с декомпенсированной формой сахарного диабета, злокачественных новообразований, туберкулёз, хронический алкоголизм и наркомания.",
		  // Добавьте данные-атрибуты перевода, если нужно
		},
		{
		  question: "Сколько лет служат имплантаты?",
		  answer: "Имплантаты не имеют определенного срока службы. Правильно установленный имплантат с качественной ортопедической конструкции, при должном уходе: хорошая гигиена, проф осмотры и другие могут прослужить всю жизнь.",
		  // Добавьте данные-атрибуты перевода, если нужно
		},
		{
		  question: "Что может помешать приживлению имплантата?",
		  answer: "Несоблюдение рекомендации врача, вредные привычки, такие как курение, употребление алкоголя, употребление наркотических препаратов, а так же неправильный протокол установки имплантата, некачественные системы имплантатов могут помешать приживлению.",
		  // Добавьте данные-атрибуты перевода, если нужно
		}
	  ];

  return (
    <div>
      	<section class="section-8">
		<div class="container">
			<h2 data-aos="fade-right" class="language-change">Как будет проходить <b>первая консультация?</b>
			</h2>
			<div class="grid-2-part">
				<div>
					<div class="consultacia">

						<div class="consultacia-item" data-aos="flip-right">
							<img src={Consult1} alt="" />
							<div class="consultacia-content">
								<b class="consultacia-head language-change" data-ru="Осмотр и диагностика полости рта"
									data-uz="Og'iz bo'shlig'ini tekshirish va diagnostika qilish">Осмотр и диагностика
									полости рта</b>
								<p class="consultacia-desc language-change"
									data-ru="Стоматолог проверяет состояние зубов и десен, используя рентген для точного выявления проблем."
									data-uz="Tish shifokori muammolarni aniq aniqlash uchun rentgen nurlari yordamida tish va tish go'shti holatini tekshiradi.">
									Стоматолог проверяет состояние зубов и десен, используя рентген для точного
									выявления проблем.</p>
							</div>
						</div>

						<div class="consultacia-item" data-aos="flip-right">
							<img src={Consult2} alt="" />
							<div class="consultacia-content">
								<b class="consultacia-head language-change" data-ru="Обсуждение и план лечения"
									data-uz="Muhokama va davolash rejasi">Обсуждение и план лечения</b>
								<p class="consultacia-desc language-change"
									data-ru="После осмотра стоматолог обсуждает проблемы, предлагает варианты лечения и согласовывает с пациентом план восстановления."
									data-uz="Tekshiruvdan so'ng tish shifokori muammolarni muhokama qiladi, davolash usullarini taklif qiladi va bemor bilan tiklanish rejasini tuzadi.">
									После осмотра стоматолог обсуждает проблемы, предлагает варианты лечения и
									согласовывает с пациентом план восстановления.</p>
							</div>
						</div>

						<div class="consultacia-item" data-aos="flip-right">
							<img src={Consult3} alt="" />
							<div class="consultacia-content">
								<b class="consultacia-head language-change" data-ru="Профилактика"
									data-uz="Oldini olish">Профилактика</b>
								<p class="consultacia-desc language-change"
									data-ru="Стоматолог рекомендует правильную гигиену полости рта, включая методы чистки, средства ухода и регулярные визиты на осмотры для предотвращения проблем."
									data-uz="Tish shifokori muammolarni oldini olish uchun to'g'ri og'iz gigienasini, shu jumladan tozalash usullari, parvarishlash vositalari va muntazam tekshiruv tashriflarini tavsiya qiladi.">
									Стоматолог рекомендует правильную гигиену полости рта, включая методы чистки,
									средства ухода и регулярные визиты на осмотры для предотвращения проблем.</p>
							</div>
						</div>

					</div>
				</div>

				<div>
					<img src={Dantist} alt="" data-aos="fade-left" />
				</div>
			</div>

			<div class="form-wrap">
				<form class="telegram-form" id="form-popup-2">
					<div class="text-center">
						<h2 class="language-change"
							data-ru="Заполните форму ниже и запишитесь на консультацию прямо сейчас"
							data-uz="Quyidagi shaklni to'ldiring va hozirda maslahat olish uchun ro'yxatdan o'ting"><b
								class="language-change" data-ru="Заполните форму ниже"
								data-uz="Quyidagi shaklni to'ldiring">Заполните форму ниже</b> и запишитесь консультацию
							прямо сейчас</h2>
					</div>

					<div class="form-content">

						<label for="name" class="form-label" data-aos="flip-down" >
							<img src={Avatar} alt="" class="input-icon" />
							<input type="text" name="name" id="name" placeholder="Ваше имя" data-uz="Sizning ismingiz"
								required="" autocomplete="off" />
						</label>

						<label for="phone" class="form-label" data-aos="flip-down">
							<img src={Tel} alt="Иконка телефона" class="input-icon" />
							<input type="text" name="phone" class="masked" id="phone" placeholder="Ваш телефон"
								   data-uz="Sizning telefon raqamingiz" required />
						  </label>
						  

						<label for="submit" class="form-label" data-aos="flip-down">
							<button class="main-btn language-change" type="submit" data-ru="Записаться на консультацию"
								data-uz="Konsultatsiyaga yozilish">Записаться на консультацию</button>
						</label>

					</div>
				</form>
			</div>
		</div>
	</section>
	<section class="section-10">
		<div class="container">
			<div class="s10-content">
				<h2 class="language-change" data-ru="Запишитесь прямо сейчас на консультацию"
					data-uz="Hoziroq maslahat uchun ro'yxatdan o'ting">Запишитесь прямо сейчас на <b>консультацию</b>
				</h2>
				<button class="main-btn popup-btn language-change" data-ru="Записаться на консультацию"
					data-uz="Konsultatsiyaga yozilish"  onClick={openModal}>Записаться на консультацию</button>
					{modalOpen && <Consult closeModal={() => setModalOpen(false)} />}
			</div>

			<img src={Nafisa3} alt="" class="s10-img" />
		</div>
	</section>


	<section className="section-11">
      <div className="container">
        <div className="text-center">
          <h2 className="language-change">Частые вопросы</h2>
        </div>
        <div className="faq">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${activeFaq === index ? 'faq-item-active' : 'faq-item-default'}`} data-aos="fade-down">
              <div className="faq-card" onClick={() => toggleFaq(index)}>
                <p className="language-change">{faq.question}</p>
                <div className="faq-plus"><p>+</p></div>
              </div>
			  {/* style={{ display: 'block'}} */}
              <div className={`faq-content ${activeFaq == index ? 'show' : ''}`} style={{display: activeFaq == index ? 'block' : '',
			  																			transition: 'display 1s ease-out'}} > 
                <p className="language-change">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

	<section class="section-12">
		<div class="container">
			<div class="text-center">
				<h2 class="language-change" data-ru="Остались вопросы? Свяжитесь со мной лично"
					data-uz="Savollar qoldimi? Shaxsan men bilan bog'laning">Остались вопросы? <br /> Свяжитесь со мной
					лично</h2>
			</div>
		</div>
	</section>
    </div>
  )
}
