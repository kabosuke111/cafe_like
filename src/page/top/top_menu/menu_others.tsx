import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import {useTrail} from 'react-spring';

const MenuOthers = () => {
  const URL_ORIGIN_IMAGE_THUMB = 'http://kabosuke.sakura.ne.jp/cafe_mason/images/menu/thumb/'

  const [menu,setMenu]:any = useState([
    ['','',[0,0],{'title': '','price':'','description': ''}]
  ]);

  const menuHeight = 20;
  const [anim,animAct] = useState({
    'height': `${menuHeight}px`
  });
  const ref = useRef(null);

  useEffect(()=>{
    axios.get("http://kabosuke.sakura.ne.jp/cafe_mason/menu_others.json")
    .then((json) => {
      let i = json.data;
      setMenu(i);
    })
  },[])

  useEffect(()=>{
    window.addEventListener('click', function(){
      animAct({
        'height': '0px'
      });
    });
  }, []);
  
  const blockInsert = (num: string): JSX.Element => {
    const block = [];
    const splitCount: number = 20;
    let nums: number = parseInt(num) / splitCount;
    
    for(let i = 0; i < nums; i++){
      block.push(<div className="c--anim__others__item m_absolute m_w_100" style={{...anim, 'top':`${i * 20}px`}} ref={ref}></div>);
    }

    return (<div className="c--anim__others m_absolute m_z_2 m_w_100">{block}</div>);
  }

  return (
      <article id="others" className="c--others m_of_x_hidden">
        <div className="c--others__title">
          <h3 className="c--others__title__self m_t_center">
            <span className="c--others__title__self__inner m_font_AC m_font_largest t_font_sub_color">Other Menu</span>
          </h3>
        </div>
        <div className="c--others__inner m_d_flex">
        {menu.map((key:any,index:number)=>{
          return (
            <section className="c--others__menu" id={`othersMenu_${index + 1}`}>
              <header className="c--others__menu__header m_relative">
                {/* {blockInsert(`${menu[index][2][1]}`)} */}
                <img
                  className="c--others__menu__image__self"
                  srcSet={`${URL_ORIGIN_IMAGE_THUMB}2x/${menu[index][1]}@2x.png 2x`}
                  src={URL_ORIGIN_IMAGE_THUMB + menu[index][1] + ".png"}
                  alt={menu[index][0]}
                />
                <h4 className="c--others__menu__genre m_d_flex_nowrap">
                  <span className="c--others__menu__genre__inner t_font_sub_color m_font_largest m_font_AC">{menu[index][0]}</span></h4>
              </header>
              <div className="c--others__menu__contents">
              {menu[index].map((items: any, nums: number)=>{
                return (
                  <React.Fragment>
                    {menu[index][nums].title && (
                      <dl className="c--others__menu__item">
                        <dt className="c--others__menu__title m_font_large m_d_i_b m_va_middle">{menu[index][nums].title}</dt>
                        <dd className="c--others__menu__price m_d_i_b m_va_middle">&yen;{menu[index][nums].price}</dd>
                        <dd className="c--others__menu__description">{menu[index][nums].description}</dd>
                      </dl>
                    )}
                  </React.Fragment>
                )
              })}
              </div>
            </section>
          )
        })}
        </div>
      </article>
  );
}


export default MenuOthers;