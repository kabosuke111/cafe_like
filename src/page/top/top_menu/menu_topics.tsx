import React from 'react';
import Pasta from './../../../images/menu/thumb/thumb-menu_pasta.jpg';
import Pasta2x from './../../../images/menu/2x/menu-pasta@2x.jpg';
const MenuTopics = () => {

  return (
    <article id="topics" className="c--topics m_relative">
      <div className="c--topics__item m_relative">
        <div className="c--topics__item__inner m_relative m_center m_circle">
          <div className="c--topics__item__textgroup m_absolute m_middle m_z_1">
            <div className="c--topics__title m_absolute">
              <h3 className="c--topics__title__inner m_font_Typ u_font_41 t_font_sub_color m_l_h_17 m_d_i_b">今週のおすすめ</h3>
            </div>
            <div className="c--topics__item__textgroup__group m_d_flex m_f_between">
              <p className="c--topics__item__title m_font_largest m_d_i_b">白いパスタ</p>
              <p className="c--topics__item__price m_font_large m_d_i_b">&yen;1,200</p>
            </div>
            <p className="c--topics__item__description m_font_large">3日熟したホワイトソースをたっぷりかけて、こしょうをまぶして出来上がり。</p>
          </div>
          <picture className="c--topics__item__image m_t_right m_absolute m_middle m_z_2">
            <source srcSet={`${Pasta2x} 2x`} className="c--topics__item__image__self" />
            <img src={Pasta} alt="" className="c--topics__item__image__self" />
          </picture>
        </div>
        
      </div>
    </article>
  );
}


export default MenuTopics;
