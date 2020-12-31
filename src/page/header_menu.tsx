import React from 'react';
import {AT_SectionTitle} from './../store/actionTypes'

interface Methods {
  get_origin_array: Function;
  make_array_single: Function;
}

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
  

  const objs: Objs = {
    make_texts: [],
    key_names: [],
    positions: 0,
    extract_strings: 0,
    extract_quot: 0,
    names: "",
  }

  const methods: Methods = {
    get_origin_array: (origin: Array<string> = []): Array<string> => {
      Object.keys(AT_SectionTitle).map((key)=>{origin.push(key)});
      return origin;
    },

    //オブジェクトを検索をして、指定の文章だけ抽出した配列を作る
    make_array_single: (find_text: string): Array<string> => {
      objs.names = JSON.stringify(methods.get_origin_array());
      while(objs.extract_strings > -1) {
        objs.extract_strings = objs.names.indexOf(find_text, objs.positions);
        objs.extract_quot = objs.names.indexOf('"', objs.extract_strings);
        objs.positions = objs.extract_strings + 1;
        objs.key_names.push(objs.names.slice(objs.extract_strings, objs.extract_quot));
      }
      objs.key_names.pop();
      objs.key_names.map((key: string)=>{
        objs.make_texts.push(AT_SectionTitle[key]);
      });
      return objs.make_texts;
    },
  }

  methods.make_array_single('section_');

  return (
    <nav className={`global-menu ${props.class_add}`}>
      <ul className="global-menu__ul m_d_flex_nowrap m_f_center">
        {objs.make_texts.map((key,index)=>
          <li className={`global-menu__item global-menu__item--${objs.key_names[index]} m_font_large`}>
            <a href="#" className="global-menu__link m_d_i_b m_relative">{key}</a>
          </li>          
        )}

      </ul>
    </nav>
  );
}

export default HeaderMenu;
