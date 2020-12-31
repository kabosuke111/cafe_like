import React from 'react';
import MenuTopics from './top_menu/menu_topics';
import MenuRecommend from './top_menu/menu_recommend';
import MenuOthers from './top_menu/menu_others';
import TitleImage from './parts_image/title/title_image';

const TopMenu = () => {

  return (
    <section className="l-section menu">
      <TitleImage  src="menu" />
      <p>美味しいピザを食べながらゆっくり一時どうでしょう？</p>
        <MenuTopics />
        <MenuRecommend />
        <MenuOthers />
    </section>
  );
}


export default TopMenu;
