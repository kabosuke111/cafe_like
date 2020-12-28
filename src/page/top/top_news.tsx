import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { ActionTitleImageNews } from '../../store/pageTop/image/actions';
import {rootState} from './../../store/index';
import TitleImage from './parts_image/title/title_image';
import {News_item} from './../../data/data_news'

const TopNews = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: rootState) => state.titleimage);

  //newsのデータを取得
  const news_item = News_item;

  const dispatchAct = () => {
    dispatch(ActionTitleImageNews())
  }

  //タイトル画像をNEWSに変える
  useEffect(()=>{
    dispatch(ActionTitleImageNews())
  },[]);

  return (
    <section className="l-section news">
      <TitleImage  src={selector} />
      {news_item.map((key)=>(
        <article>
          <p><time dateTime={key.times}>{key.times_text}</time></p>
          <p>{key.news_text}</p>
        </article>
      ))}
    </section>
  );
}


export default TopNews;
