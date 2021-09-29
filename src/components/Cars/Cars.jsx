import React, { useEffect, useCallback, useMemo } from "react";
import "./Cars.scss";
import Title from "../Global/Title/Title";
import { Table } from "../Global/Table/Table";
import { EntityContainer } from "../Global/EntityContainer/EntityContainer";
import EntityLine from "../Global/EntityLine/EntityLine";
import EntityFilter from "../Global/EntityFilter/EntityFilter";
import ButtonNewEntity from "../Global/ButtonNewEntity/ButtonNewEntity";

import { getCars } from "../../redux/actions/cars";
import { getCategory } from "../../redux/actions/category";
import { useDispatch, useSelector } from "react-redux";
import { Path } from "../../const";
import { createCar, deleteCar } from "../../redux/actions/carCreate";
import { Link } from "react-router-dom";

const Cars = () => {
  const { cars } = useSelector((state) => state.cars);
  const { categories } = useSelector((state) => state.category);
  const { filter } = useSelector((state) => state.filter);
  const { newCar } = useSelector((state) => state.carCreate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
    dispatch(getCategory());
  }, [newCar]);

  const setCategoryValue = (categoryValue) => {
    dispatch(categoryValue);
  };

  const deletePointHandler = useCallback((val, id) => {
    dispatch(createCar(val));
    dispatch(deleteCar(id));
  });

  const isVisible = (el) => {
    if (filter.length === 0) {
      return true;
    } else {
      if (el.categoryId !== null) {
        return el.categoryId.name === filter.value;
      } else {
        return false;
      }
    }
  };

  return (
    <EntityContainer>
      <Title text="Автомобили" />
      <Table>
        <div className="options">
          <EntityFilter
            filter={categories}
            placeholder="Категория"
            setValue={setCategoryValue}
          />
          <ButtonNewEntity pathedit={Path.CAR} />
        </div>
        <ul className="container">
          {cars.map((el) => {
            return (
              <EntityLine
                key={el.id}
                item1={el.name}
                item2={el.description}
                item3={`${el.priceMin} - ${el.priceMax}`}
                item4={el.categoryId ? el.categoryId.name : "Нет данных"}
                onClickEdit={() => dispatch(createCar(el))}
                pathedit={Path.CAR}
                onClickDelete={() => deletePointHandler(el, el.id)}
                pathdelete={Path.CARLIST}
                isVisible={isVisible(el)}
              />
            );
          })}
        </ul>
      </Table>
    </EntityContainer>
  );
};

export default Cars;
