import React from 'react';
import TitleImage from './parts_image/title/title_image';
import {News_item} from './../../data/data_news';

const TopNews = () => {
  //newsのデータを取得
  const news_item = News_item;

  return (
    <section id="news" className="l-section news">
      <TitleImage  src="news" />
      <div className="b--news m_d_flex m_f_center">
      {news_item.map((key)=>(
        <a  className="b--news__article" href="#">
          <article>
            <p><time className="b--news__time m_font_AC t_font_sub_color u_font_20" dateTime={key.times}>{key.times_text}</time></p>
            <p className="b--news__text">{key.news_text}</p>
          </article>
        </a>
      ))}
      </div>
    </section>
  );
}


export default TopNews;
