import React,{useState, useEffect} from 'react';
import axios from 'axios';

const MenuRecommend = () => {
  const URL_ORIGIN_IMAGE_THUMB = 'http://kabosuke.sakura.ne.jp/cafe_mason/images/menu/thumb/'

  const [menu,setMenu] = useState([
    {'title': '','price':'','image': '','description': ''}
  ]);

  useEffect(()=>{
    axios.get("http://kabosuke.sakura.ne.jp/cafe_mason/menu_recommend.json")
    .then((json) => {
      let i = json.data;
      setMenu(i);
    })
  },[])
  
  return (
      <article id="recommend" className="c--recom m_of_x_hidden">
        <h3 className="c--recom__title m_font_Typ m_font_largest t_font_sub_color m_t_center m_sp_font_large m_sp_w_100">迷ったときのおすすめメニュー</h3>
        <div className="m_d_flex_nowrap_start">
        {menu.map((key)=>{
          return (
            <dl className="c--recom__menu">
              <dt className="c--recom__menu__image">
                <img
                  className="c--recom__menu__image__self"
                  srcSet={`${URL_ORIGIN_IMAGE_THUMB}2x/${key.image}@2x.jpg 2x`}
                  src={URL_ORIGIN_IMAGE_THUMB + key.image + ".jpg"}
                  alt=""
                />
              </dt>
              <dt className="c--recom__menu__title t_font_sub_color m_d_i_b m_va_middle">{key.title}</dt>
              <dd className="c--recom__menu__price t_back_sub_color m_font_white m_d_i_b m_va_middle">&yen;{key.price}</dd>
              <dd className="c--recom__menu__description">{key.description}</dd>
            </dl>
          )
        })}
        </div>
      </article>
  );
}


export default MenuRecommend;
