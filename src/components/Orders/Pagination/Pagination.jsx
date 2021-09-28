import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Pagination.scss";

const Pagination = ({ page = 0, amountOrders = 0, editPage = () => {} }) => {
  const [maxPage, setMaxPage] = useState(0);

  let minPage = 1;
  let middlePage;
  let rightPage;
  let leftPage;

  if (page === 1) {
    leftPage = 1;
    middlePage = 2;
    rightPage = 3;
  } else {
    middlePage = page;
    rightPage = page + 1;
    leftPage = page - 1;
  }

  const buttonClickedHandler = (e) => {
    dispatch(editPage(Number(e.target.textContent)));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    setMaxPage((p) => Math.ceil(amountOrders / 3));
  }, [amountOrders]);

  if (page >= 4) {
    return (
      <section className="pagination">
        <div className="pagination__container">
          <div className="pagination__wrapper">
            <button
              className="pagination__button"
              onClick={(e) => buttonClickedHandler(e)}
            >
              <span>{minPage}</span>
            </button>
            <button className="pagination__button">
              <span>...</span>
            </button>

            <button
              className="pagination__button"
              onClick={(e) => buttonClickedHandler(e)}
            >
              <span>{leftPage}</span>
            </button>
            <button
              className={`pagination__button ${
                page === middlePage ? "active" : null
              }`}
              onClick={(e) => buttonClickedHandler(e)}
            >
              <span>{middlePage}</span>
            </button>
            <button
              className="pagination__button"
              onClick={(e) => buttonClickedHandler(e)}
            >
              <span>{rightPage}</span>
            </button>
            <button className="pagination__button">
              <span>...</span>
            </button>
            <button
              className={`pagination__button ${
                page === maxPage ? "active" : null
              }`}
              onClick={(e) => buttonClickedHandler(e)}
            >
              <span>{maxPage}</span>
            </button>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="pagination">
        <div className="pagination__container">
          <div className="pagination__wrapper">
            <button
              className={`pagination__button ${
                page === leftPage ? "active" : null
              }`}
              onClick={(e) => buttonClickedHandler(e)}
            >
              <span>{leftPage}</span>
            </button>

            {amountOrders > 3 && (
              <button
                className={`pagination__button ${
                  page > 1 && page === middlePage ? "active" : null
                }`}
                onClick={(e) => buttonClickedHandler(e)}
              >
                <span>{middlePage}</span>
              </button>
            )}
            {amountOrders > 6 && (
              <button
                className={`pagination__button ${
                  page === rightPage ? "active" : null
                }`}
                onClick={(e) => buttonClickedHandler(e)}
              >
                <span>{rightPage}</span>
              </button>
            )}
            {amountOrders > 9 && (
              <button className={`pagination__button `}>
                <span>...</span>
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }
};

export default Pagination;
