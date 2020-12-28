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
      <article>
        <h3>迷ったときのおすすめメニュー</h3>
        {menu.map((key)=>{
          return (
            <dl>
              <dt>{key.title}</dt>
              <dd>{key.price}</dd>
              <dd><img srcSet={`${URL_ORIGIN_IMAGE_THUMB}2x/${key.image}@2x.jpg 2x`} src={URL_ORIGIN_IMAGE_THUMB + key.image + ".jpg"} alt="" /></dd>
              <dd>{key.description}</dd>
            </dl>
          )
        })}
      </article>
  );
}


export default MenuRecommend;
