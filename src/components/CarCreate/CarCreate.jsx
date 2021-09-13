import React, { useCallback, useEffect, useState, memo } from "react";
import { EntityContainer } from "../Global/EntityContainer/EntityContainer";
import CarInformation from "./CarInformation/CarInformation";
import Title from "../Global/Title/Title";
import CarSetting from "./CarSetting/CarSetting";
import './CarCreate.scss';

const CarCreate = () => {

  return (    
      <EntityContainer>
        <Title>Карточка автомобиля</Title>
        <div className="car__container">
          <CarInformation            
          />
          <CarSetting/>
        </div>
      </EntityContainer>    
  );
}

export default CarCreate ;
