import React, { useEffect, useCallback } from "react";
import "./Points.scss";
import Title from "../Global/Title/Title";
import { Table } from "../Global/Table/Table";
import { EntityContainer } from "../Global/EntityContainer/EntityContainer";
import EntityLine from "../Global/EntityLine/EntityLine";
import EntityFilter from "../Global/EntityFilter/EntityFilter";
import ButtonNewEntity from "../Global/ButtonNewEntity/ButtonNewEntity";

import {
  getPoints,
  createPoint,
  editAddress,
  editCityPoint,
  editPointName,
  changePoint,
  deletePoint,
  addPoint,
} from "../../redux/actions/points";
import { getCities } from "../../redux/actions/cities";
import { useDispatch, useSelector } from "react-redux";
import { Path } from "../../const";
import Pop from "../Global/Pop/Pop";
import { setPop, setPopCreate } from "../../redux/actions/pop";

const Points = () => {
  const { points } = useSelector((state) => state.points);
  const { cities } = useSelector((state) => state.cities);
  const { newPoint } = useSelector((state) => state.points);
  const { filter } = useSelector((state) => state.filter);
  const { pop, popCreate } = useSelector((state) => state.pop);

  const { address, name, cityId, id } = newPoint;
  const dispatch = useDispatch();

  const editPointHandler = useCallback((val) => {
    dispatch(createPoint(val));
    dispatch(setPop(true));
  });

  const deletePointHandler = useCallback((val, id) => {
    dispatch(createPoint(val));
    dispatch(deletePoint(id));
  });

  let cityPoint;

  newPoint.cityId !== null
    ? (cityPoint = newPoint.cityId.name)
    : (cityPoint = "");

  const editAddressHandler = useCallback(
    (e) => {
      return dispatch(editAddress(e.target.value));
    },
    [address]
  );

  const editPointNameHandler = useCallback(
    (e) => {
      return dispatch(editPointName(e.target.value));
    },
    [name]
  );

  const editPoint = [
    {
      label: "Адрес",
      value: newPoint.address,
      onChange: editAddressHandler,
    },
    {
      label: "Название",
      value: newPoint.name,
      onChange: editPointNameHandler,
    },
    {
      label: "Город",
      value: cityPoint,
      onChange: editCityPoint,
      arr: cities,
      list: "cities",
    },
  ];

  useEffect(() => {
    dispatch(getPoints());
    dispatch(getCities());
  }, [newPoint]);

  const changePointHandler = useCallback(() => {
    dispatch(changePoint(newPoint, id));
    dispatch(setPop(false));
  }, [newPoint, id]);

  const createPointHandler = useCallback(() => {
    dispatch(addPoint(newPoint, id));
    dispatch(setPopCreate(false));
  }, [newPoint, id]);

  const isVisible = (el) => {
    if (filter.length === 0) {
      return true;
    } else {
      if (el.cityId !== null) {
        return el.cityId.name === filter.value;
      } else {
        return false;
      }
    }
  };

  return (
    <EntityContainer>
      <Title text="Адреса" />
      <Table>
        <div className="options">
          <EntityFilter filter={cities} placeholder="Город" />
          <ButtonNewEntity
            onClick={() => dispatch(setPopCreate(true))}
            pathedit={Path.POINTS}
          />
        </div>
        <ul className="container">
          {points.map((el) => {
            return (
              <EntityLine
                key={el.id}
                item1={el.name}
                item2={el.address}
                item3={el.cityId ? el.cityId.name : "Нет данных"}
                onClickEdit={() => editPointHandler(el)}
                pathedit={Path.POINTS}
                onClickDelete={() => deletePointHandler(el, el.id)}
                pathdelete={Path.POINTS}
                isVisible={isVisible(el)}
              />
            );
          })}
        </ul>
      </Table>
      {pop && <Pop editEntity={editPoint} onClickButton={changePointHandler} />}
      {popCreate && (
        <Pop editEntity={editPoint} onClickButton={createPointHandler} />
      )}
    </EntityContainer>
  );
};

export default Points;
