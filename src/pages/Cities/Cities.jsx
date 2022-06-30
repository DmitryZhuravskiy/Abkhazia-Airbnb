import React from "react";
import "./Cities.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../components/Banner/Banner";

const TownArr = [
  {
    id: 0,
    town: "Гагра",
    link: "/town-card",
    image: "../../images/cities/gagra.jpg",
  },
  {
    id: 1,
    town: "Новый Афон",
    link: "/town-card",
    image: "../../images/cities/new-afon.jpg",
  },
  {
    id: 2,
    town: "Гудаута",
    link: "/town-card",
    image: "../../images/cities/gudauta.jpg",
  },
  {
    id: 3,
    town: "Сухум",
    link: "/town-card",
    image: "../../images/cities/sukhum.jpg",
  },
  {
    id: 4,
    town: "Очамчира",
    link: "/town-card",
    image: "../../images/cities/ochamchira.jpg",
  },
  {
    id: 5,
    town: "Пицунда",
    link: "/town-card",
    image: "../../images/cities/pitsunda.jpg",
  },
  {
    id: 6,
    town: "Цандрыпш",
    link: "/town-card",
    image: "../../images/cities/tsandrypsh.jpg",
  },
];

const Cities = () => {
  return (
    <div>
      <Header />
      <div className="cities">
        <Navigation active="cities" />
        <Banner title="Города Абхазии" image="../../images/cities/banner.jpg" />
        <section className="housing-catalog__page-way">
          <Link to="/" className="page-way__first">
            Главная
          </Link>
          <div className="page-way__decoration"></div>
          <p className="page-way__second">Города Абхазии</p>
        </section>
        <section className="housing-catalog__searching-results-title-wrapper cities__body-title">
          <h3 className="housing-catalog__searching-results-title">
            Узнайте больше о городах Абхазии
          </h3>
          <div className="housing-catalog__searching-results-title-decoration"></div>
        </section>
        <ul className="cities__gallery">
          {TownArr.map((el) => (
            <li className={`cities__town-item box-${el.id + 1}`} key={el.id}>
              <h5 className="cities__town-name">{el.town}</h5>
              <Link className="cities__town-card-link" to={el.link}>
                Подробнее
              </Link>
              <img
                className="cities__town-image"
                src={el.image}
                alt={el.town}
              />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Cities;
