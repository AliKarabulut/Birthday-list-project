import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from "./Form.module.css";

const Form = ({ onPeople }) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const [imgUrl, setImgUrl] = useState("");

  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const isFormValid = () => {
    return name.trim() !== "" && day.trim() !== "" && month.trim() !== "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error('Boş alanları kontrol ediniz', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return;
    }

    const monthIndex = parseInt(month) - 1;
    const monthName = months[monthIndex];

    const newData = {
      name: name,
      birthday: `${day} ${monthName}`,
      image: imgUrl,
    };
    onPeople(newData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name:</label>
      <input
        type="text"
        id="name-input"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="day-input">Day:</label>
      <input
        type="number"
        id="day-input"
        name="day"
        min="1"
        max="31"
        onChange={(e) => setDay(e.target.value)}
      />

      <label htmlFor="month-input">Month:</label>
      <input
        type="number"
        id="month-input"
        name="month"
        min="1"
        max="12"
        onChange={(e) => setMonth(e.target.value)}
      />

      <label htmlFor="img-input">Image (URL):</label>
      <input
        type="text"
        id="img-input"
        name="img"
        onChange={(e) => setImgUrl(e.target.value)}
      />

      <button className={styles.btn} type="submit">Ekle</button>
      <ToastContainer />
    </form>
  );
};

export default Form;
