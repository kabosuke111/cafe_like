import React from 'react';
import {useSelector} from 'react-redux';
import {rootState} from './../store/index';
import ImageTopHeader from './../images/top/top-header.jpg';
import HeaderMenu from './header_menu';
import HeaderAddress from './header_address';

const Header = () => {
  const siteTitle = useSelector((state: rootState) => state.toppage.show_title);
    
  return (
    <header id="l-header">
      <div className="header__up m_d_flex_nowrap m_f_center">
        <h1 className="site__title">{siteTitle}</h1>
        <HeaderAddress />
      </div>
      <div className="header__down">
        <HeaderMenu />
      </div>
      <picture className="header__image">
        <img className="header__image__item" src={ImageTopHeader} />
      </picture>
    </header>
  );
}

export default Header;
