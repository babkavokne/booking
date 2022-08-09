import React from 'react';
import avatar from '../../static/images/emma.jpg'
import leftArrow from '../../static/icons/arrow-left.svg'
import rightArrow from '../../static/icons/arrow-right.svg'
import ReactStars from "react-rating-stars-component";
import ReviewCard from './components/ReviewCard/ReviewCard'
import cl from './GuestReview.module.sass'

const GuestReview = () => {

  const nextImage = () => {
    const cards = document.querySelectorAll(`.${cl.card}`)
    const inner = document.querySelector(`.${cl.inner}`)
    cards[0].style.marginLeft = +cards[0].style.marginLeft.slice(0, -2) - inner.offsetWidth + `px`;

    if (cards.length < 4) {
      cards[0].style.marginLeft = 0
      return
    }

    console.log('cards.length - 4) * cards[0].offsetWidth', (cards.length - 4) * cards[0].offsetWidth);
    console.log(((cards.length - 4) * cards[0].offsetWidth + cards.length * inner.style.columnGap.slice(0, -2)));

    if (-cards[0].style.marginLeft.slice(0, -2) >= ((cards.length - 4) * cards[0].offsetWidth + cards.length * inner.style.columnGap.slice(0, -2))) {
      console.log('1');
      cards[0].style.marginLeft = -((cards.length - 4) * cards[0].offsetWidth + (cards.length - 4) * inner.style.columnGap.slice(0, -2)) + 'px'
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
    <div className="wrapper">
      <div className="container">
        <div className={cl.guestreview}>
          <div className={cl.header}>What people thinks about us</div>
          <div className={cl.slider}>
            <div className={cl.inner}>
              <ReviewCard className={cl.card}></ReviewCard>
            </div>
            <img src={leftArrow} alt="Arrow-button left (previous): Icon" className={`${cl.arrow} ${cl.left}`} onClick={prevImage} />
            <img src={rightArrow} alt="Arrow-button left (next): Icon" className={`${cl.arrow} ${cl.right}`} onClick={nextImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestReview;
