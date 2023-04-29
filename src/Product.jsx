import React from 'react'
import { data } from "./data";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
    <nav>
        <div className="container">
            <p id='ip'>iPhone</p>
            <p id='p'>
                Интернет-магазин MacBro предлагает купить iPhone в Ташкенте. Компания давно специализируется на поставках смартфонов от ведущего<br/>
                американского производителя. Мы являемся дистрибьютором Apple в Узбекистане, что позволяет обеспечить оптимальные условия продажи<br/>
                самой популярной марки телефонов. Ознакомьтесь с информацией о продукции, представленной в этой рубрике каталога, и преимуществами<br/>
                продажи Айфонов в Узбекистане в интернет-магазине MacBro. Также в обзоре даны ответы на часто задаваемые вопросы покупателей.<br/>
            </p>
        </div>
    </nav>

    <div id="body">
      <div className="container">
      {data.map((el) => {
        return(
          <Link to={`product/${el.id}`} key={data.id}>
            <div id="card" key={data.id}>
            <img id='img' src={el.img} alt="" />
            <p id="name">{el.name}</p>
            <p id="price">{el.price}</p>
          </div>
          </Link>
        )
      })}
      </div>
    </div>
    </>
  )
}

export default Product