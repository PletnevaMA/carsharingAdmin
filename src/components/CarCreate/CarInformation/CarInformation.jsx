import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  editDescriptionCar,
  editImageCar,
} from "../../../redux/actions/carCreate";

import "./CarInformation.scss";

const CarInformation = () => {
  const { newCar } = useSelector((state) => state.carCreate);
  const dispatch = useDispatch();

  const changeImageHandler = (evt) => {
    evt.preventDefault();

    const file = evt.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const image = {
        originalname: file.name,
        size: file.size,
        mimetype: file.type,
        path: reader.result,
      };
      dispatch(editImageCar(image));
    };
  };

  const editDescriptionHandler = useCallback(
    (e) => {
      return dispatch(editDescriptionCar(e.target.value));
    },
    [newCar.description]
  );

  function pathImage(img) {
    return img.includes("/files")
      ? `https://api-factory.simbirsoft1.com${img}`
      : img;
  }
  return (
    <section className="information">
      <div className="information__image">
        <img
          src={pathImage(newCar.thumbnail ? newCar.thumbnail.path : "")}
          alt="Изображение отсутствует"
          className="information__image__image"
        />
        <span className="information__image__name">{newCar.name}</span>
        <span className="information__image__category">
          {newCar.categoryId ? newCar.categoryId.name : ""}
        </span>
        <div className="information__image__download">
          <input
            type="file"
            name=""
            id="file"
            onChange={(e) => changeImageHandler(e)}
          />
          <label htmlFor="file">Обзор</label>
        </div>
      </div>
      <div className="information__progress">
        <div className="information__progress__container">
          <span className="information__progress__title">Заполнено</span>
          <span className="information__progress__percent">60%</span>
        </div>
        <progress
          value="60"
          max="100"
          className="information__progress__line"
        ></progress>
      </div>
      <div className="information__description">
        <span className="information__description__label">Описание</span>
        <textarea
          className="information__description__text"
          value={newCar.description}
          onChange={editDescriptionHandler}
        />
      </div>
    </section>
  );
};

export default CarInformation;
