import React from 'react';
import Pasta from './../../../images/menu/thumb/thumb-menu_pasta.jpg';
import Pasta2x from './../../../images/menu/2x/menu-pasta@2x.jpg';
const MenuTopics = () => {

  return (
    <article className="c--topics">
      <h3 className="c--topics__title">今週のおすすめ</h3>
      <div className="c--topics__item">
        <div className="c--topics__item__inner m_relative m_center">
          <div className="c--topics__item__textgroup">
            <div className="c--topics__item__textgroup__group m_d_flex m_f_between">
              <p className="c--topics__item__title m_font_largest m_d_i_b">白いパスタ</p>
              <p className="c--topics__item__price m_font_large m_d_i_b">&yen;1,200</p>
            </div>
            <p className="c--topics__item__description m_font_large">3日熟したホワイトソースをたっぷりかけて、こしょうをまぶして出来上がり。</p>
          </div>
          <picture className="c--topics__item__image m_t_right">
            <source srcSet={`${Pasta2x} 2x`} className="c--topics__item__image__self" />
            <img src={Pasta} alt="" className="c--topics__item__image__self" />
          </picture>
        </div>
        
      </div>
    </article>
  );
}


export default MenuTopics;
