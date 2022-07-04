import React from 'react';
import avatar from '../../static/images/emma.jpg'
import leftArrow from '../../static/icons/arrow-left.svg'
import rightArrow from '../../static/icons/arrow-right.svg'
import ReactStars from 'react-stars'
import cl from './GuestReview.module.sass'

const GuestReview = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div className={cl.guestreview}>
          <div className={cl.header}>What people thinks about us</div>
          <div className={cl.slider}>
            <div className={cl.item}>
              <div className={cl.profile}>
                <img src={avatar} alt="User avatar: Image"></img>
                <div className={cl.name}>Megan Fox</div>
                <div className={cl.registry}>Stayed 18 Nov, 2019</div>
                <div className={cl.rating}>
                  {/* <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={'#ffd700'}
                  /> */}
                </div>
              </div>
              <div className={cl.review}>
                It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend.
              </div>
            </div>
            <img src={leftArrow} alt="Arrow-button left (previous): Icon" className={`${cl.arrow} ${cl.left}`} />
            <img src={rightArrow} alt="Arrow-button left (next): Icon" className={`${cl.arrow} ${cl.right}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestReview;
