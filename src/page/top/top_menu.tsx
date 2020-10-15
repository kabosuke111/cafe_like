import React from 'react';
import MenuTopics from './top_menu/menu_topics';
import MenuRecommend from './top_menu/menu_recommend';
import MenuOthers from './top_menu/menu_others'

const TopMenu = () => {

  return (
    <section id="l-index">
      <h2 className="title-section">Menu</h2>
      <p>美味しいピザを食べながらゆっくり一時どうでしょう？</p>
        <MenuTopics>本田</MenuTopics>
        <MenuRecommend />
        <MenuOthers />
    </section>
  );
}


export default TopMenu;
