import { v4 as uuidv4 } from "uuid";
const Action = {
  LOGIN_USER: "loginUser",
};

const Path = {
  MAIN : '/panel',
  ORDERS: '/panel/orderlist',
  ORDER: '/panel/order',
  CAR: '/panel/car',
  CARLIST: '/panel/carlist',
  CITIES: '/panel/cities',
  POINTS: '/panel/points',
  RATES: '/panel/rates',
  LOGIN: '/login'
}
const url = "https://api-factory.simbirsoft1.com/api/";
const appId = "5e25c641099b810b946c5d5b";

const secret_key = '4cbcea96de';


export { Action, Path, url, secret_key, appId };
