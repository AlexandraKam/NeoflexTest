import React from 'react';

function ShopCard(props) {
  const { cardProduct } = props;
  return (
    <div className='card'>
      <img className='card-img' src={cardProduct.img}></img>
      <div className='card-footer'>
        <div className='card-title'>{cardProduct.name}</div>
        <div className='card-rate'>{cardProduct.rate}</div>
        <div className='card-price'>{cardProduct.price} ₽</div>
        <div className='card-add-cart'>Купить</div>
      </div>
    </div>
  )
}

export default ShopCard;