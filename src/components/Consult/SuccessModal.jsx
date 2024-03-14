import React from "react";
import './SuccessModal.css';
import Success from './../../assets/img/success.png';
import Close from './../../assets/svg/close.svg';
import { useTranslation } from 'react-i18next';


const SuccessModal = () => {

  const { t } = useTranslation();
  return (
    <div>
      <div class="overlay overlay-success" id="overlay-success">
        <div class="success-popup">
          <div class="popup-content">
            <img src={Success} alt="Success" />

            <b
            >
              {t('successPopup.message')}
            </b>
            <p
            >
              {t('successPopup.description')}
            </p>
          </div>
          <div class="close-item">
            <img src={Close} alt="Close" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
