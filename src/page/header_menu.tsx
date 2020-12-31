import React from 'react';
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
  let objs: Objs = {
    make_texts: [],
    key_names: [],
    positions: 0,
    extract_strings: 0,
    extract_quot: 0,
    names: "",
  }

  objs = clsNameObj('section_', AT_SectionTitle);

  return (
    <nav className={`global-menu ${props.class_add}`}>
      <ul className="global-menu__ul m_d_flex_nowrap m_f_center">
        {objs.make_texts.map((key,index)=>
          <li className={`global-menu__item global-menu__item--${objs.key_names[index]} m_font_large`}>
            <AnchorLink href={`#${lowerCase(key)}`} className="global-menu__link m_d_i_b m_relative" offset="80">{key}</AnchorLink>
          </li>          
        )}

      </ul>
    </nav>
  );
}

export default HeaderMenu;
