import React from 'react';
import { NavLink } from 'react-router-dom';

import arrow from '../img/icons/arrow.svg'
import vector6 from '../img/icons/Vector-6.svg'
import vector5 from '../img/icons/Vector-5.svg'
import vector7 from '../img/icons/Vector-7.svg'


export const Navbar = () => {
  return (
    <div className="chat__nav">
      <div className="chat__nav__btn-wrapper">
        <div className="chat__nav__btn-content">
          <NavLink to='/' className="chat__nav-btn">
            общий
          </NavLink>
          <NavLink to='/clan' className="chat__nav-btn">
            клан
          </NavLink>
          <NavLink to='/friends' className="chat__nav-btn">
            друзья
          </NavLink>
          <NavLink to='/news' className="chat__nav-btn">
            новости
          </NavLink>
        </div>
      </div>
      <button className="chat__nav-arrow">
        <img src={arrow} alt="" />
      </button>
      <div className="chat__panel">
        <form action="#" className="chat__panel-form">
          <select name="language" className="select">
            <option value="RU">RU</option>
            <option value="EN">EN</option>
            <option value="ZHO">ZHO</option>
          </select>
        </form>
        <div className="chat__panel__recycle">
          <button className="btn-recycle min">
            <img src={vector6} alt="" />
          </button>
          <button className="btn-recycle max">
            <img src={vector5} alt="" />
          </button>
        </div>
        <div className="chat__panel__close">
          <button className="btn-close">
            <img src={vector7} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
