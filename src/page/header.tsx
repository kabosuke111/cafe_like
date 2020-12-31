import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {rootState} from './../store/index';
import ImageTopHeader from './../images/top/top-header.jpg';
import IconHeader from './../images/top/svg/top_image.svg';
import HeaderMenu from './header_menu';
import HeaderAddress from './header_address';

interface MenuScrollLiteral {
  y: number;
  MENU_SHOW_POINT: number;
}

const Header = () => {
  const menuScroll: MenuScrollLiteral = {
    y: window.pageYOffset,
    MENU_SHOW_POINT: 107,
  }

  const siteTitle = useSelector((state: rootState) => state.toppage.show_title);
  const [classAdd, classAddAct] = useState('');

  useEffect(() => {
    document.addEventListener('scroll', ()=>{
      menuScroll.y = window.pageYOffset;
      if(menuScroll.y >= menuScroll.MENU_SHOW_POINT){
        classAddAct('is-menu_scroll');
      } else {
        classAddAct('');
      }
    })
  }, [classAdd]);
  
  return (
    <header id="l-header">
      <div className="header__up m_d_flex_nowrap m_f_center">
        <h1 className="site__title">{siteTitle}</h1>
        <HeaderAddress />
      </div>
      <div className="header__down">
        <HeaderMenu class_add={classAdd} />
      </div>
      <picture className="header__image">
        <img className="header__image__item" src={ImageTopHeader} />
      </picture>
      <div className="header__caption m_bc_main">
        <div className="header__caption__group">
          <img className="header__caption__icon m_d_block" src={IconHeader} />
          <p className="header__caption__text m_t_center m_l_h_2">メイソンおじさんのカフェへようこそ。<br />
          鳥の鳴き声が時々聞こえるこの小さなカフェでは、<br />
          ゆっくり穏やかに時間が流れていきます。</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
