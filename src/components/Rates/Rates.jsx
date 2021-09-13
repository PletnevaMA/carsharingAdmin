import React, { useEffect, useCallback } from "react";
import "./Rates.scss";
import Title from "../Global/Title/Title";
import { Table } from "../Global/Table/Table";
import { EntityContainer } from "../Global/EntityContainer/EntityContainer";
import EntityFilter from "../Global/EntityFilter/EntityFilter";
import EntityLine from "../Global/EntityLine/EntityLine";
import ButtonNewEntity from "../Global/ButtonNewEntity/ButtonNewEntity";
import { Path } from "../../const";
import Pop from "../Global/Pop/Pop";

import {
  getRates,
  createRates,
  editName,
  editPrice,
  editUnit,
  changeRate,
  deleteRate,
  createRate,
} from "../../redux/actions/rates";
import { useDispatch, useSelector } from "react-redux";
import { setPop, setPopCreate } from "../../redux/actions/pop";

const Rates = () => {
  const { rates } = useSelector((state) => state.rates);
  const { newRate } = useSelector((state) => state.rates);
  const { pop, popCreate } = useSelector((state) => state.pop);
  const { name, price, id } = newRate;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRates());
  }, [newRate]);

  const editNameRateHandler = useCallback(
    (e) => {
      return dispatch(editName(e.target.value));
    },
    [name]
  );

  const editPriceHandler = useCallback(
    (e) => {
      return dispatch(editPrice(e.target.value));
    },
    [price]
  );
  const editUnitHandler = useCallback(
    (e) => {
      return dispatch(editUnit(e.target.value));
    },
    [price]
  );

  const changeRateHandler = useCallback(() => {
    dispatch(changeRate(newRate, id));
    dispatch(setPop(false));
  }, [newRate, id]);

  const createRateHandler = useCallback(() => {
   
    dispatch(createRate(newRate));
    dispatch(setPopCreate(false));
  }, [newRate, id]);

  const editRate = [
    {
      label: "Тариф",
      value: newRate.rateTypeId.name,
      onChange: editNameRateHandler,
    },
    {
      label: "Цена",
      value: newRate.price,
      onChange: editPriceHandler,
      type: "number",
    },
    {
      label: "Период аренды",
      value: newRate.rateTypeId.unit,
      onChange: editUnitHandler,
    },
  ];
  const editRateHandler = useCallback((val) => {
    dispatch(createRates(val));
    dispatch(setPop(true));
  });

  const deleteRateHandler = useCallback((val, id) => {
    dispatch(createRates(val));
    dispatch(deleteRate(id));
  });

  return (
    <EntityContainer>
      <Title text="Тарифы" />
      <Table>
        <div className="options">
          <EntityFilter filter={null} placeholder="" />
          <ButtonNewEntity onClick={() => dispatch(setPopCreate(true))} />
        </div>
        <ul className="container">
          {rates.map((el) => {
            return (
              <EntityLine
                item1={el.rateTypeId.name? el.rateTypeId.name: "" }
                item2={el.price}
                item3={el.rateTypeId.unit?el.rateTypeId.unit: ""}
                onClickEdit={() => editRateHandler(el)}
                pathedit={Path.RATES}
                onClickDelete={() => deleteRateHandler(el, el.id)}
                pathdelete={Path.RATES}
                isVisible={true}
              />
            );
          })}
        </ul>
      </Table>
      {pop && <Pop editEntity={editRate} onClickButton={changeRateHandler} />}
      {popCreate && <Pop editEntity={editRate} onClickButton={createRateHandler} />}
    </EntityContainer>
  );
};

export default Rates;
