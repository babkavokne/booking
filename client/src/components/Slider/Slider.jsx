import React, { useState } from 'react';
import inn from '../../static/images/inn+pool.jpg'
import next from '../../static/icons/arrow-right.svg'
import prev from '../../static/icons/arrow-left.svg'
import cl from './Slider.module.sass'

const Slider = (props) => {

  const images = props.images
  const amountOfCardOnScreen = props.cardsAmount || 1
  const cardColumnGap = props.columnGap || 0
  const cardFlex = props.cardFlex || '100%'

  const nextImage = () => {
    const cards = document.querySelectorAll(`.${cl.card}`)
    const inner = document.querySelector(`.${cl.inner}`)

    console.log('inner', cards[0]);

    cards[0].style.marginLeft = +cards[0].style.marginLeft.slice(0, -2) - inner.offsetWidth + `px`;

    if (cards.length < amountOfCardOnScreen) {
      cards[0].style.marginLeft = 0
      return
    }

    if (-cards[0].style.marginLeft.slice(0, -2) >= ((cards.length - amountOfCardOnScreen) * cards[0].offsetWidth + cards.length * inner.style.columnGap.slice(0, -2))) {
      console.log('1');
      cards[0].style.marginLeft = -((cards.length - amountOfCardOnScreen) * cards[0].offsetWidth + (cards.length - amountOfCardOnScreen) * inner.style.columnGap.slice(0, -2)) + 'px'
    }
  }

  const prevImage = () => {
    const card = document.querySelector(`.${cl.card}`)
    const inner = document.querySelector(`.${cl.inner}`)
    card.style.marginLeft = +card.style.marginLeft.slice(0, -2) + inner.offsetWidth + `px`;
    if (+card.style.marginLeft.slice(0, -2) > 0) {
      card.style.marginLeft = 0
    }
  }
  return (
    <div className={cl.slider + ' ' + props.className}>
      <div className={cl.inner} style={{ columnGap: { cardColumnGap } + 'px' }}>
        {images ? images.map((image, i) => <img key={i} style={{ flex: `0 0 ${cardFlex}` }} className={cl.card} src={`http://localhost:5000/images/${image}`} alt="" />) : <h1>:c</h1>}
      </div>
      <div className={cl.next}><img src={next} onClick={nextImage} alt="" /></div>
      <div className={cl.prev}><img src={prev} onClick={prevImage} alt="" /></div>
    </div>
  );
}

export default Slider;
