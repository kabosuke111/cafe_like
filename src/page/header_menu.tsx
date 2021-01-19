import React, { useEffect,useState } from 'react';
import {AT_SectionTitle} from './../store/actionTypes';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {clsNameObj, lowerCase} from './../data/common';
import {data} from './../data/common';

interface Objs {
  make_texts: Array<string>;
  key_names: Array<string>;
  positions: number;
  extract_strings: number;
  extract_quot: number;
  names: string;
}

interface Props {
  class_add: string;
}

const HeaderMenu = (props: Props) => {
  const [S_display, S_display_act] = useState('none');
  const [S_class, S_class_act] = useState('');
  const [showClass, showClassAct] = useState('');

  //スクリーンサイズを都度入手するためのstate
  const [screenSize, sSizeAct] = useState(document.body.clientWidth);

  window.addEventListener('resize', ()=>{
    sSizeAct(document.body.clientWidth);
  });

  let objs: Objs = {
    make_texts: [],
    key_names: [],
    positions: 0,
    extract_strings: 0,
    extract_quot: 0,
    names: "",
  }

  let subMenuStyle = {
    'display': S_display,
  }

  const sub_menu: Array<string> = ["topics","recommend","others"]

  const styleChangeEnter = () => {
    S_display_act('block');
    S_class_act('is-active');
  }

  const styleChangeOut = () => {
    S_display_act('none')
    S_class_act('');
  }

  const menuShow = () => {
    showClassAct('is-active');
  }

  const menuHidden = () => {
    showClassAct('');
  }

  const addBtnElement = () => {
    return screenSize < data.mediaquery ? <div className="sp_show m_t_center"><button className="sp_show__button" onClick={()=>menuShow()} style={{position:'relative',zIndex: 10}}>click</button></div> : null;
  }

  const addListElement = () => {
    return screenSize < data.mediaquery ? <li className={`global-menu__item close_menu m_font_large`}><button onClick={()=>menuHidden()} style={{position:'relative',zIndex: 10}}>close</button></li> : null;
  }

  objs = clsNameObj('section_', AT_SectionTitle);

  return (
    <nav className={`global-menu ${props.class_add} m_relative`}>
      {addBtnElement()}
      <ul className={`global-menu__ul m_d_flex_nowrap m_f_center m_sp_f_column m_sp_fixed m_sp_airsrock m_sp_w_100 m_sp_h_100 m_z_2 ${showClass}`}>
        {objs.make_texts.map((key,index)=>
          <li className={`global-menu__item global-menu__item--${objs.key_names[index]} m_font_large m_sp_w_100 m_sp_t_center`}>
            {key !== 'Menu' 
              ? 
              <AnchorLink href={`#${lowerCase(key)}`} className="global-menu__link m_d_i_b m_relative" offset="80">{key}</AnchorLink>
              :
              <div onMouseLeave={()=>styleChangeOut()} className="m_relative">
                <AnchorLink href={`#${lowerCase(key)}`} id="submenu_active" onClick={()=>S_class === '' ? styleChangeEnter(): styleChangeOut()} onMouseOver={()=>styleChangeEnter()} className="global-menu__link m_d_i_b m_relative" offset="80"><span className="global-menu__link--menu m_z_2 m_relative">{key}</span></AnchorLink>
                <ul id="submenu" className={`submenu--menu m_absolute m_sp_static ${S_class}`} style={subMenuStyle}>
                  {sub_menu.map((submenu_key) =>
                    <li className={`submenu--menu__item m_sp_w_100 m_sp_t_center`}>
                      <AnchorLink className={`submenu--menu__link m_d_block ${S_class}`} href={`#${submenu_key}`} offset="80">{submenu_key}</AnchorLink>
                    </li>
                  )}
                </ul>
              </div>
            }
          </li>
        )}
        {addListElement()}
      </ul>
    </nav>
  );
}

export default HeaderMenu;
