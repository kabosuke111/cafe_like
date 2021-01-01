import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { title } from 'process';



const MenuOthers = () => {
  const URL_ORIGIN_IMAGE_THUMB = 'http://kabosuke.sakura.ne.jp/cafe_mason/images/menu/thumb/'

  const [menu,setMenu]:any = useState([
    ['','',{'title': '','price':'','description': ''}]
  ]);

  useEffect(()=>{
    axios.get("http://kabosuke.sakura.ne.jp/cafe_mason/menu_others.json")
    .then((json) => {
      let i = json.data;
      setMenu(i);
    })
  },[])
  
  return (
      <article className="c--others m_of_x_hidden">
        <h3 className="c--others__title m_font_AC m_font_largest t_font_sub_color m_t_center">Other Menu</h3>
        <div className="m_d_flex_nowrap_start">
        {menu.map((key:any,index:any)=>{
          return (
            <section>
              <header>
                <img
                  className="c--others__menu__image__self"
                  srcSet={`${URL_ORIGIN_IMAGE_THUMB}2x/${menu[index][1]}@2x.png 2x`}
                  src={URL_ORIGIN_IMAGE_THUMB + menu[index][1] + ".png"}
                  alt={menu[index][0]}
                />
                <h4>{menu[index][0]}</h4>
              </header>
              
              {menu[index].map((items: any, nums: any)=>{
                return (
                  <>
                    {menu[index][nums].title && (
                      <dl className="c--others__menu">
                        <dt className="c--others__menu__title t_font_sub_color m_d_i_b m_va_middle">{menu[index][nums].title}</dt>
                        <dd className="c--others__menu__price t_back_sub_color m_font_white m_d_i_b m_va_middle">&yen;{menu[index][nums].price}</dd>
                        <dd className="c--others__menu__description">{menu[index][nums].description}</dd>
                      </dl>
                    )}
                    
                  </>
                  
                )
              })}
              
            </section>
          )
        })}
        </div>
      </article>
  );
}


export default MenuOthers;