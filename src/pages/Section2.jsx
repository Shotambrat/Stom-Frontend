import React, {useState, useLayoutEffect} from 'react';
import './style/Section2.css';
import FooterLogo from './../assets/img/logo_footer.png'
import SectioniMG2 from './../assets/img/section-2.png';
import Uslugi1 from './../assets/img/usligi-1.png'
import Uslugi2 from './../assets/img/usligi-2.png'
import Uslugi3 from './../assets/img/usligi-3.png'
import Uslugi4 from './../assets/img/usligi-4.png'
import Uslugi5 from './../assets/img/usligi-5.png'
import Uslugi6 from './../assets/img/usligi-6.png'
import Problems from './../assets/img/problems.png'
import Cart2 from './../assets/svg/left-arrow-direction-svgrepo-com.svg';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';



export default function Section2() {
	const { t } = useTranslation();
	const [activeItem, setActiveItem] = useState("dot-item-5"); // По умолчанию активен пятый элемент
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
        setModalOpen(true);
    };
	  
		const handleMouseEnter = (itemId) => {
		  setActiveItem(itemId);
		};
		useLayoutEffect(() => {

			const items = document.querySelectorAll('.uslugi__item');

			gsap.registerPlugin(ScrollTrigger);
		
			gsap.fromTo('.fade__right', {
			  opacity: 0,
			  x: -150,
			}, {
				opacity: 1,
				x: 0,
				scrollTrigger: {
				  trigger: '.fade__right',
				  start: 'top center',
				//   end: 'bottom center',
				  toggleActions: 'play none none reverse'
				}
			});
		
			gsap.fromTo('.about-vrach', {
			  opacity: 0,
			  x: 150,
			}, {
				opacity: 1,
				x: 0,
				scrollTrigger: {
				  trigger: '.about-vrach',
				  start: 'top center',
				  end: 'bottom center',
				  toggleActions: 'play none none reverse'
				}
			});

			items.forEach(item => {
				gsap.fromTo(item, {
				  opacity: 0,
				  x: -400,
				}, {
				  opacity: 1,
				  x: 0,
				  duration: 0.1,
				  scrollTrigger: {
					trigger: item,
					start: 'bottom-=200px center',
					end: 'top center',
					toggleActions: 'play none none reverse',
				  }
				});
			  });
		  }, []);
  return (
    <>
    <section class="section-2">
		<div class="container">
			<div class="advantages">
				<div className="advantage-item1">
				<span className="advantage-text">{t('aboutDoctor.citate')}</span>
				</div>


				<div className="advantage-item">
					<img src={FooterLogo} alt="" />
				</div>
			</div>
		</div>
	</section>


	<section class="section-2-2">
		<div class="container">
			<div class="grid-2-part">
				<div>
					<img src={SectioniMG2} alt="" className='fade__right' />
				</div>
				<div class="about-vrach" data-aos="fade-left">


					<div class="slidedown">
						<div class="slidedown__block">
							<div class="slidedown__body">
							<b>{t('aboutDoctor.intro')}</b>
							<p>{t('aboutDoctor.details')}</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</section>

  <section class="section-3">
		<div class="container">
			<h2>{t('specializations.title')}</h2>

			<div class="uslugi">

				<div class="uslugi__item">
				<p>{t('specializations.items.treatmentAndFilling')}</p>
					<img src={Uslugi1} alt="" />
				</div>

				<div class="uslugi__item">
				<p>{t('specializations.items.toothRemovalAndRestoration')}</p>
					<img src={Uslugi2} alt="" />
				</div>

				<div class="uslugi__item">
				<p>{t('specializations.items.crowns')}</p>
					<img src={Uslugi3} alt="" />
				</div>
				<div class="uslugi__item">
				<p>{t('specializations.items.implants')}</p>
					<img src={Uslugi4} alt="" />
				</div>

				<div class="uslugi__item">
				<p>{t('specializations.items.veneers')}</p>
					<img src={Uslugi5} alt="" />
				</div>

				<div onClick={openModal} class="uslugi__item uslugi__item_brown popup-btn">
				<p>{t('specializations.consultationButton')}</p>
					<img src={Uslugi6} alt="" />
				</div>

			</div>
		</div>
	</section>

	<section class="section-4">
		<div class="container">
			<div class="text-center">
			<h2>
				<b>
            {t('section4.title')}

				</b>
          	</h2>

				<div class="problems">
					<img src={Problems} alt="" />

					<div class="dots">

					<div
						className={`dot-item dot-item-1 dot-item-left ${activeItem === "dot-item-1" ? "dot-item-active" : ""}`}
						onMouseEnter={() => handleMouseEnter("dot-item-1")}
					>
							 <b className="dot-title">{t('section4.problems.cariesAndToothDecay.title')}</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2} alt="" class="cart2" />
									<p>{t('section4.problems.cariesAndToothDecay.title')}</p>
								</div>
								<div class="problem-info">
								<p>{t('section4.problems.cariesAndToothDecay.description')}</p>
								</div>
							</div>
						</div>
						<div
							className={`dot-item dot-item-2 dot-item-left ${activeItem === "dot-item-2" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-2")}
						>
							<b className="dot-title">{t('section4.problems.periodontitisAndGingivitis.title')}</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2} alt="" class="cart2" />
									<p>{t('section4.problems.periodontitisAndGingivitis.title')}</p>
								</div>
								<div class="problem-info">
								<p>{t('section4.problems.periodontitisAndGingivitis.description')}</p>
								</div>
							</div>
						</div>
						<div
							className={`dot-item dot-item-3 dot-item-left ${activeItem === "dot-item-3" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-3")}
						>
							<b className="dot-title">{t('section4.problems.orthodontics.title')}</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2}alt="" class="cart2" />
									<p>{t('section4.problems.orthodontics.title')}</p>
								</div>
								<div class="problem-info">
								<p>{t('section4.problems.orthodontics.description')}</p>
								</div>
							</div>
						</div>
						<div
							className={`dot-item dot-item-4 dot-item-left ${activeItem === "dot-item-4" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-4")}
						>
							<b className="dot-title">{t('section4.problems.surgicalIntervention.title')}</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2} alt="" class="cart2" />
									<p>{t('section4.problems.surgicalIntervention.title')}</p>
								</div>
								<div class="problem-info">
								<p>{t('section4.problems.surgicalIntervention.description')}</p>
								</div>
							</div>
						</div>

						<div
							className={`dot-item dot-item-5 dot-item-right ${activeItem === "dot-item-5" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-5")}
						>
							<b className="dot-title">{t('section4.problems.traumaAndWear.title')}</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2}alt="" class="cart2" />
									<p>{t('section4.problems.traumaAndWear.title')}</p>
								</div>
								<div class="problem-info">
								<p>{t('section4.problems.traumaAndWear.description')}</p>
								</div>
							</div>
						</div>
						<div
							className={`dot-item dot-item-6 dot-item-right ${activeItem === "dot-item-6" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-6")}
						>
							<b className="dot-title">{t('section4.problems.cancerAndOtherDiseases.title')}</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2} alt="" class="cart2" />
									<p>{t('section4.problems.cancerAndOtherDiseases.title')}</p>
								</div>
								<div class="problem-info">
								<p>{t('section4.problems.cancerAndOtherDiseases.description')}</p>
								</div>
							</div>
						</div>
						<div
							className={`dot-item dot-item-7 dot-item-right ${activeItem === "dot-item-7" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-7")}
						>
							  <b className="dot-title">{t('section4.problems.dentalAesthetics.title')}</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2} alt="" class="cart2" />
									<p>{t('section4.problems.dentalAesthetics.title')}</p>
								</div>
								<div class="problem-info">
								<p>{t('section4.problems.dentalAesthetics.description')}</p>
								</div>
							</div>
						</div>
						<div
							className={`dot-item dot-item-8 dot-item-right ${activeItem === "dot-item-8" ? "dot-item-active" : ""}`}
							onMouseEnter={() => handleMouseEnter("dot-item-8")}
							onMouseLeave={() => setActiveItem(null)}
              			>	
							 <b className="dot-title">{t('section4.problems.preventionAndEducation.title')}</b>
							<div class="problem-content">
								<div class="problem-header">
									<img src={Cart2} alt="" class="cart2" />
									<p>{t('section4.problems.preventionAndEducation.title')}</p>

								</div>
								<div class="problem-info">
								<p>{t('section4.problems.preventionAndEducation.description')}</p>

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
