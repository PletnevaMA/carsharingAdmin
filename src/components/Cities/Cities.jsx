import React, { useEffect, useCallback } from "react";
import "./Cities.scss";
import Title from "../Global/Title/Title";
import { Table } from "../Global/Table/Table";
import { EntityContainer } from "../Global/EntityContainer/EntityContainer";
import EntityFilter from "../Global/EntityFilter/EntityFilter";
import EntityLine from "../Global/EntityLine/EntityLine";
import ButtonNewEntity from "../Global/ButtonNewEntity/ButtonNewEntity";
import { Path } from "../../const";

import { getCities } from "../../redux/actions/cities";
import { useDispatch, useSelector } from "react-redux";
import {
  createCity,
  editCity,
  changeCity,
  deleteCity,
  addCity,
} from "../../redux/actions/cities";
import { setPop, setPopCreate } from "../../redux/actions/pop";
import Pop from "../Global/Pop/Pop";

const Cities = () => {
  const { cities, newCity } = useSelector((state) => state.cities);
  const { pop, popCreate } = useSelector((state) => state.pop);
  const { id, name } = newCity;
  const dispatch = useDispatch();

  const editCityHandler = useCallback((val) => {
    dispatch(createCity(val));
    dispatch(setPop(true));
  });

  const deleteCityHandler = useCallback((val, id) => {
    dispatch(createCity(val));
    dispatch(deleteCity(id));
  });
  useEffect(() => {
    dispatch(getCities());
  }, [newCity]);

  const editNameCityHandler = useCallback(
    (e) => {
      return dispatch(editCity(e.target.value));
    },
    [name]
  );

  const changeCityHandler = useCallback(() => {
    dispatch(changeCity(newCity, id));
    dispatch(setPop(false));
  }, [newCity, id]);

  const createCityHandler = useCallback(() => {
    dispatch(addCity(newCity));
    dispatch(setPopCreate(false));
  }, [newCity, id]);

  const editCityArr = [
    {
      label: "Город",
      value: newCity.name,
      onChange: editNameCityHandler,
    },
  ];

  return (
    <>
      <EntityContainer>
        <Title text="Города" />
        <Table>
          <div className="options">
            <EntityFilter filter={null} placeholder="" />
            <ButtonNewEntity
              onClick={() => dispatch(setPopCreate(true))}
              pathedit={Path.CITIES}
            />
          </div>
          <ul className="container">
            {cities.map((el) => {
              return (
                <EntityLine
                  key={el.id}
                  item1={el.name}
                  onClickEdit={() => editCityHandler(el)}
                  pathedit={Path.CITIES}
                  onClickDelete={() => deleteCityHandler(el, el.id)}
                  pathdelete={Path.CITIES}
                  isVisible={true}
                />
              );
            })}
          </ul>
        </Table>
        {pop && (
          <Pop editEntity={editCityArr} onClickButton={changeCityHandler} />
        )}
        {popCreate && (
          <Pop editEntity={editCityArr} onClickButton={createCityHandler} />
        )}
      </EntityContainer>
    </>
  );
};

export default Cities;
