import React, { useState } from "react";
import "./Consult.css";
import Avatar from "./../../assets/svg/woman-svgrepo-com.svg";
import Telephone from "./../../assets/svg/telephone-svgrepo-com.svg";
import Close from './../../assets/svg/close.svg';
import Nafisa from './../../assets/img/nafisa.png';
import axios from 'axios';
import { API_URL } from "../../api/api";
import SuccessModal from "./SuccessModal";

export const Consult = ({ closeModal }) => {
	const [name, setName] = useState('');
	const [tel, setTel] = useState('');

	console.log(name);
	console.log(tel);


	const handleNameChange = (e) => setName(e.target.value);
  	const handleTelChange = (e) => setTel(e.target.value);

	  const handleSubmit = async (e) => {
		e.preventDefault(); // Prevents the default form submission behavior
	
		try {
		  await axios.post(`${API_URL}submit-form`, { name, phone: tel });
		  <SuccessModal />
		  // Optionally reset the form here
		  setName('');
		  setTel('');
		} catch (error) {
		  console.error('Error submitting form: ', error);
		  alert('Failed to submit the form');
		}
	  };

  return (
    <div>
      <div class="overlay overlay-form" id="overlay-form" >
        <form action="" class="feedback-form telegram-form" id="form-popup" onSubmit={handleSubmit}>
          <div class="form-inner">
            <h2
              class="caption language-change"
              id="form-header"
              data-ru="Получите ответы на все свои вопросы"
              data-uz="Barcha savollaringizga javob oling"
            >
              Получите ответы на все свои вопросы
            </h2>
            <p
              class="form-description language-change"
              id="form-desc"
              data-ru="Заполните форму ниже и я свяжусь с Вами в ближайшее время!"
              data-uz="Quyidagi shaklni to'ldiring va men tez orada siz bilan bog'lanaman!"
            >
              Заполните форму ниже и я свяжусь с Вами в ближайшее время!
            </p>

            <div class="form-content">
              <label for="name" class="form-label">
                <img src={Avatar} class="input-icon" alt="" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ваше имя"
                  data-uz="Sizning ismingiz"
                  required=""
				  value={name}
            	  onChange={handleNameChange}
                />
              </label>

              <label for="phone" class="form-label">
                <img src={Telephone} class="input-icon" alt="" />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  class="masked"
                  placeholder="Ваш телефон"
                  required=""
				  value={tel}
            	  onChange={handleTelChange}
                />
              </label>

              <label for="submit" class="form-label">
                <button class="main-btn" type="submit" id="submit2">
                  Записаться на консультацию
                </button>
              </label>

              <label for="policy2" class="policy-item">
                <input
                  type="checkbox"
                  name="policy"
                  class="policy__checkbox"
                  id="policy2"
                />
                <div class="square square_active" id="square2">
                  <img
                    src="images/grephic--check.svg"
                    alt=""
                    class="okay-img"
                  />
                </div>
                <p class="language-change policy__text">
                  <span>Cогласен/а на</span> обработку персональных данных
                </p>
              </label>
            </div>
          </div>
          <div onClick={closeModal} class="close-item">
            <img src={Close} alt="" />
          </div>

          <img src={Nafisa} alt="nafisa" class="popup-human" />
        </form>
      </div>
    </div>
  );
};
