import React from 'react';
import title_news from '../../images/top/svg/title_news.svg';

const TopNews = () => {
  const news_item = [
    {
      times: `2020-03-02`,
      times_text: `2020/03/02(Wed)`,
      news_text: `ポップアップ看板を作りました。`,
    },
    {
      times: `2020-04-28`,
      times_text: `2020/04/28(Thu)`,
      news_text: `にんじんのカロリーを考えます。`,
    },
    {
      times: `2020-07-11`,
      times_text: `2020/07/11(Mon)`,
      news_text: `なんじゃらホイップを作成しようと日夜励んでます。`,
    },
    {
      times: `2020-09-30`,
      times_text: `2020/09/30(Fri)`,
      news_text: `ブロッコリーのカロリーを考えます。`,
    },
    {
      times: `2020-10-12`,
      times_text: `2020/10/12(Fri)`,
      news_text: `ハトホルの神殿にゴミを入れます`,
    },
    {
      times: `2020-12-06`,
      times_text: `2020/12/06(Sun)`,
      news_text: `ホンダらポーいのホゲホゲポー`,
    }
  ]

  return (
    <section className="l-section top-news">
      <div>
        <img src={title_news} alt="News" />
      </div>
      <h2 className="title-section">News</h2>
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
