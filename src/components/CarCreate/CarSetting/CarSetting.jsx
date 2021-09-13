import React, { useCallback, useEffect, useState, memo } from "react";
import "./CarSetting.scss";
import Input from "../../Global/Input/Input";
import { useSelector } from "react-redux";
import ColorSetting from "./ColorSetting/ColorSetting";
import {
  addColor,
  editNameCar,
  editCategoryCar,
  editPriceMinCar,
  editPriceMaxCar,
  changeCar,
  deleteCar,
  createCar
} from "../../../redux/actions/carCreate";
import { getCategory } from "../../../redux/actions/category";
import { useDispatch } from "react-redux";
import ButtonCard from "../../Global/ButtonCard/ButtonCard";
import { Path } from "../../../const";

const CarSetting = () => {
  const { newCar } = useSelector((state) => state.carCreate);
  const { colors, categoryId, name, priceMin, priceMax, id } = newCar;

  const [colorNew, setColor] = useState("");

  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [categoryId]);

  const editNameHandler = useCallback(
    (e) => {
      return dispatch(editNameCar(e.target.value));
    },
    [name]
  );
  const editCategoryHandler = useCallback(
    (e) => {
      return dispatch(editCategoryCar(e.target.value));
    },
    [categoryId]
  );
  const editPriceMinHandler = useCallback(
    (e) => {
      return dispatch(editPriceMinCar(e.target.value));
    },
    [priceMin]
  );
  const editPriceMaxHandler = useCallback(
    (e) => {
      return dispatch(editPriceMaxCar(e.target.value));
    },
    [priceMax]
  );
  const editColorsHandler = useCallback(() => {
    return dispatch(addColor(colorNew));
  }, [colors]);
  const newColorHandler = useCallback((e) => {
    setColor(e.target.value);
  });

  const changCarHandler = useCallback(() => {
    dispatch(changeCar(newCar, id));
  }, [newCar, id]);

  const deleteCarHandler = useCallback(() => {
    dispatch(deleteCar(id));
  }, [id]);

  const cancelCarHandler = useCallback(() => {
    dispatch(createCar());
  },);

  let categoryIdName;
  newCar.categoryId !== null
    ? (categoryIdName = newCar.categoryId.name)
    : (categoryIdName = "");
  return (
    <div className="car-setting">
      <div className="car-setting__block">
        <div className="car-setting__container">
          <span className="car-setting__title">Настройка автомобиля</span>
          <div className="car-setting__setting">
            <Input
              key={Math.random(0, 1)}
              value={newCar.name}
              label="Модель автомобиля"
              onChange={editNameHandler}
            />
            <Input
              key={Math.random(0, 1)}
              value={categoryIdName}
              label="Тип автомобиля"
              onChange={editCategoryHandler}
              list="category"
              arr={categories}
            />
          </div>
          <div className="car-setting__setting">
            <Input
              key={Math.random(0, 1)}
              value={newCar.priceMin}
              label="Минимальная цена"
              onChange={editPriceMinHandler}
              type="number"
            />
            <Input
              key={Math.random(0, 1)}
              value={newCar.priceMax}
              label="Максимальная цена"
              onChange={editPriceMaxHandler}
              type="number"
            />
          </div>
          <div className="car-setting__setting add">
            <Input
              key={Math.random(0, 1)}
              label="Доступные цвета"
              onChange={newColorHandler}
            />
            {console.log(colorNew)}
          </div>
          <button
            className="car-setting__buttons__add"
            onClick={editColorsHandler}
          ></button>
          <ColorSetting key={Math.random(0, 1)} />
        </div>
        <div className="car-setting__buttons">
          <div className="car-setting__buttons-container">
            <ButtonCard
              onClick={changCarHandler}
              label="Сохранить"
              className="button button__blue "
              pathedit = {Path.CARLIST}
            />
         
            <ButtonCard
              onClick={cancelCarHandler}
              label="Отменить"
              className="button button__gray "
              pathedit = {Path.CARLIST}
            />
          </div>
          <div className="car-setting__buttons-container"></div>          
          <ButtonCard
            onClick={deleteCarHandler}
            label="Удалить"
            className="button button__red "
            pathedit = {Path.CARLIST}
          />
        </div>
      </div>
    </div>
  );
};

export default CarSetting;
