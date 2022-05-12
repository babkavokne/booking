import React from 'react';
import facebook from '../../static/icons/facebook.svg';
import youtube from '../../static/icons/youtube.svg'
import insta from '../../static/icons/insta.svg'
import location from '../../static/icons/location-grey.svg'
import mail from '../../static/icons/mail-grey.svg'
import phone from '../../static/icons/phone-grey.svg'
import MyButton from '../MyButton/MyButton'
import cl from './Footer.module.sass';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={cl.wrapper}>
      <div className="container">
        <div className={cl.footer}>
          <div className={cl.infoblock}><Link to='/' className={cl.logo}>
            Best
            <span>tour</span>
            plan
          </Link></div>
          <div className={cl.infoblock}>
            <div className={cl.header}>ALL CATEGORIES</div>
            <NavLink className={cl.item} to='/'>All Deals</NavLink>
            <NavLink className={cl.item} to='/'>Hotels</NavLink>
            <NavLink className={cl.item} to='/'>Activities</NavLink>
            <NavLink className={cl.item} to='/'>Spa Packages</NavLink>
            <NavLink className={cl.item} to='/'>Hotel Day Packages</NavLink>
            <NavLink className={cl.item} to='/'>Restaurants</NavLink>
            <NavLink className={cl.item} to='/'>Fitness</NavLink>
            <NavLink className={cl.item} to='/'>Rodrigues</NavLink>
          </div>
          <div className={cl.infoblock}>
            <div className={cl.header}>ADDITIONAL INFORMATION</div>
            <NavLink className={cl.item} to='/'>About Us</NavLink>
            <NavLink className={cl.item} to='/'>Contact Us</NavLink>
            <NavLink className={cl.item} to='/'>How does it work?</NavLink>
            <NavLink className={cl.item} to='/'>Frequently Asked Questions</NavLink>
            <NavLink className={cl.item} to='/'>Deals.mu loyalty program</NavLink>
            <NavLink className={cl.item} to='/'>Promote your Business on BTP</NavLink>
            <div className={cl.social}>
              <div className={cl.header}>Social Network</div>
              <div className={cl.icons}>
                <img src={facebook} alt="" />
                <img src={youtube} alt="" />
                <img src={insta} alt="" />
              </div>
            </div>
          </div>
          <div className={cl.infoblock}>
            <div className={cl.header}>LEGAL INFORMATION</div>
            <NavLink className={cl.item} to='/'>Terms & Conditions</NavLink>
            <NavLink className={cl.item} to='/'>Disclaimer</NavLink>
            <NavLink className={cl.item} to='/'>Cancellation policy</NavLink>
            <NavLink className={cl.item} to='/'>Privacy</NavLink>
          </div>
          <div className={`${cl.infoblock} ${cl.contact}`}>
            <div className={cl.header}>Contact Details</div>
            <div className={cl.item}>Feel free to contact us by phone, email or by our contact form</div>
            <div className={cl.info}>
              <div className={cl.item}>
                <img src={location} alt="" />
                9748 Blossom Hill Rd undefined Lansing, Idaho 68545 United States
              </div>
              <div className={cl.item}>
                <img src={mail} alt="" />
                Tel (business hours) : 269 1500
                Tel (hotline) Monday - Saturday: 52-56-61-38 (08:00 am – 20:00 pm)
                Tel (hotline) Sunday: 52-56-61-38 (08:00 am – 14:00 pm)
              </div><div className={cl.item}>
                <img src={phone} alt="" />
                cherly.lawson@example.com
              </div>
            </div>
          </div>
          <div className={cl.infoblock}>
            <div className={cl.header}>Send us a message</div>
            <form className={cl.form}>
              <div className={cl.topline}>
                <input className={cl.input} type="text" placeholder="Your Full Name*" />
                <input className={cl.input} type="text" placeholder="Phone Number*" />
              </div>
              <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
              <div className={cl.bottom}>
                <MyButton className={cl.button}>
                  Send
                </MyButton>
                * Required Fields
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
