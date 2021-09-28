import React, { useCallback, useEffect, useState} from "react";
import "./CarSetting.scss";
import Input from "../../Global/Input/Input";
import SelectEntity from "../../Global/Select/Select";
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
  createCar,
  addCar,
} from "../../../redux/actions/carCreate";
import { getCategory } from "../../../redux/actions/category";
import { useDispatch } from "react-redux";
import ButtonCard from "../../Global/ButtonCard/ButtonCard";
import { Path } from "../../../const";

const CarSetting = () => {
  const { newCar } = useSelector((state) => state.carCreate);
  const { categoryId, name, priceMin, priceMax, id } = newCar;

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
  let label;
  if (newCar.id === "") {
    label = "Создать";
  } else label = "Применить";

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

  const newColorHandler = useCallback((e) => {
    setColor(e.target.value);
  });

  const changCarHandler = useCallback(() => {
    if (label === "Создать") {
      dispatch(addCar(newCar));
    }
    if (label === "Применить") {
      dispatch(changeCar(newCar, id));
    }
  }, [newCar, id]);

  const deleteCarHandler = useCallback(() => {
    dispatch(deleteCar(id));
  }, [id]);

  const cancelCarHandler = useCallback(() => {
    dispatch(
      createCar({
        id: "",
        priceMax: 0,
        priceMin: 0,
        name: "",
        thumbnail: {
          size: 0,
          originalname: "",
          mimetype: "",
          path: "",
        },
        description: "",
        categoryId: {
          name: "",
          description: "",
          id: "",
        },
        colors: [],
      })
    );
  });

  let categoryIdName;
  newCar.categoryId !== null
    ? (categoryIdName = newCar.categoryId.id)
    : (categoryIdName = "");
  return (
    <div className="car-setting">
      <div className="car-setting__block">
        <div className="car-setting__container">
          <span className="car-setting__title">Настройка автомобиля</span>
          <div className="car-setting__setting">
            <Input
              value={newCar.name}
              label="Модель автомобиля"
              onChange={editNameHandler}
            />
            <SelectEntity
              value={categoryIdName}
              label="Тип автомобиля"
              onChange={editCategoryCar}
              list="category"
              objectsList={categories}
            />
          </div>
          <div className="car-setting__setting">
            <Input
              value={newCar.priceMin}
              label="Минимальная цена"
              onChange={editPriceMinHandler}
              type="number"
            />
            <Input
              value={newCar.priceMax}
              label="Максимальная цена"
              onChange={editPriceMaxHandler}
              type="number"
            />
          </div>
          <div className="car-setting__setting add">
            <Input
              label="Доступные цвета"
              onChange={newColorHandler}
              value={colorNew}
            />
          </div>
          <button
            className="car-setting__buttons__add"
            onClick={() => {
              dispatch(addColor(colorNew));
              setColor("");
            }}
          ></button>
          <ColorSetting />
        </div>
        <div className="car-setting__buttons">
          <div className="car-setting__buttons-container">
            <ButtonCard
              onClick={changCarHandler}
              label={label}
              className="button button__blue "
              pathedit={Path.CARLIST}
            />

            <ButtonCard
              onClick={cancelCarHandler}
              label="Отменить"
              className="button button__gray "
              pathedit={Path.CARLIST}
            />
          </div>
          <div className="car-setting__buttons-container"></div>
          <ButtonCard
            onClick={deleteCarHandler}
            label="Удалить"
            className="button button__red "
            pathedit={Path.CARLIST}
          />
        </div>
      </div>
    </div>
  );
};

export default CarSetting;
