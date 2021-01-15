import React, { useEffect,useState } from 'react';
import {AT_SectionTitle} from './../store/actionTypes';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {clsNameObj, lowerCase} from './../data/common';

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

  objs = clsNameObj('section_', AT_SectionTitle);

  return (
    <nav className={`global-menu ${props.class_add}`}>
      <ul className="global-menu__ul m_d_flex_nowrap m_f_center">
        {objs.make_texts.map((key,index)=>
          <li className={`global-menu__item global-menu__item--${objs.key_names[index]} m_font_large`}>
            {key !== 'Menu' 
              ? 
              <AnchorLink href={`#${lowerCase(key)}`} className="global-menu__link m_d_i_b m_relative" offset="80">{key}</AnchorLink>
              :
              <div onMouseLeave={()=>styleChangeOut()} className="m_relative">
                <p id="submenu_active" onMouseOver={()=>styleChangeEnter()} className="global-menu__link m_d_i_b m_relative"><span className="global-menu__link--menu m_z_2 m_relative">{key}</span></p>
                <ul id="submenu" className={`submenu--menu m_absolute ${S_class}`} style={subMenuStyle}>
                  {sub_menu.map((submenu_key) =>
                    <li className={`submenu--menu__item`}>
                      <AnchorLink className={`submenu--menu__link m_d_block ${S_class}`} href={`#${submenu_key}`} offset="80">{submenu_key}</AnchorLink>
                    </li>
                  )}
                </ul>
              </div>
            }
          </li>
        )}

      </ul>
    </nav>
  );
}

export default HeaderMenu;
