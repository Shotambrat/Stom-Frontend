import React, { useState } from "react";
import "./Consult.css";
import Avatar from "./../../assets/svg/woman-svgrepo-com.svg";
import Telephone from "./../../assets/svg/telephone-svgrepo-com.svg";
import Close from "./../../assets/svg/close.svg";
import Nafisa from "./../../assets/img/nafisa.png";
import axios from "axios";
import SuccessModal from "./SuccessModal";
import { useTranslation } from "react-i18next";

export const Consult = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const { t } = useTranslation();

  const handleNameChange = (e) => setName(e.target.value);
  const handleTelChange = (e) => setTel(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращение стандартного поведения формы

    // Создание FormData объекта и добавление данных формы
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", tel);

    try {
      // Замените 'URL_К_ВАШЕМУ_AJAX.PHP' на реальный URL вашего скрипта на сервере
      const response = await axios.post("../../ajax.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data === "1") {
        // Успешная отправка, отображаем модальное окно успеха или любое другое уведомление
        <SuccessModal />;
        // Вызов SuccessModal (проверьте, нужен ли здесь вызов компонента)
      } else {
        // Обработка ошибок с сервера
        <SuccessModal />;
      }

      // Сброс формы
      setName("");
      setTel("");
    } catch (error) {
      console.error("Ошибка при отправке формы: ", error);
      alert("Не удалось отправить форму");
    }
  };

  return (
    <div>
      <div class="overlay overlay-form" id="overlay-form">
        <form
          action=""
          class="feedback-form telegram-form"
          id="form-popup"
          onSubmit={handleSubmit}
        >
          <div class="form-inner">
            <h1 className="caption language-change" id="form-header">
              {t("formPopup.header")}
            </h1>
            <p className="form-description language-change" id="form-desc">
              {t("formPopup.description")}
            </p>
            <div class="form-content">
              <label for="name" class="form-label">
                <img src={Avatar} class="input-icon" alt="" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t("formPopup.namePlaceholder")}
                  data-uz="Sizning ismingiz"
                  required
                  value={name}
                  onChange={handleNameChange}
                />
              </label>

              <label for="phone" class="form-label">
                <img src={Telephone} class="input-icon" alt="" />
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  class="masked"
                  placeholder={t("formPopup.phonePlaceholder")}
                  required
                  value={tel}
                  onChange={handleTelChange}
                />
              </label>

              <label for="submit" class="form-label">
                <button className="main-btn" type="submit">
                  {t("formPopup.submitButtonText")}
                </button>
              </label>

              <label for="policy2" class="policy-item">
                <input
                checked
                  type="checkbox"
                  name="policy"
                  class="policy__checkbox"
                  id="policy2"
                />
                <div class="square square_active" id="square2"></div>
                <p className="policy__text">
                  <span>{t("formPopup.agreement")}</span>
                </p>
              </label>
            </div>
          </div>
          <div onClick={closeModal} class="close-item">
            <img src={Close} alt={t("formPopup.closeButtonAlt")} />
          </div>

          <img src={Nafisa} alt="nafisa" className="popup-human" />
        </form>
      </div>
    </div>
  );
};
