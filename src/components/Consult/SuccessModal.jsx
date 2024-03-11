import React from "react";
import './SuccessModal.css';
import Success from './../../assets/img/success.png';
import Close from './../../assets/svg/close.svg'


const SuccessModal = () => {
  return (
    <div>
      <div class="overlay overlay-success" id="overlay-success">
        <div class="success-popup">
          <div class="popup-content">
            <img src={Success} alt="" />

            <b
              class="language-change"
              data-ru="Ваша заявка принята!"
              data-uz="Sizning arizangiz qabul qilindi!"
            >
              Ваша заявка принята!
            </b>
            <p
              class="language-change"
              data-ru="Ожидайте звонка.Я свяжусь с Вами в ближайшее время."
              data-uz="Qo'ng'iroqni kuting. Tez orada siz bilan bog'lanaman."
            >
              Ожидайте звонка.Я свяжусь с Вами в ближайшее время.
            </p>
          </div>
          <div class="close-item">
            <img src={Close} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
