import React from "react";
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Please pick from the following categories</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Art.jpg'
              text='Explore these amazing pieces of art'
              label='Art'
              path='/categories/art'
            />
            <CardItem
              src='images/Food.jpg'
              text='Invigorate your senses with these mouth watering dishes'
              label='Food'
              path='/categories/food'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Park.jpg'
              text='Re-energize and get a boost with these amazing parks'
              label='Parks'
              path='/categories/parks'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;