import React from 'react';
import MenuTopics from './top_menu/menu_topics';
import MenuRecommend from './top_menu/menu_recommend';
import MenuOthers from './top_menu/menu_others';
import TitleImage from './parts_image/title/title_image';

const TopMenu = () => {

  return (
    <section id="menu" className="l-section menu">
      <TitleImage  src="menu" tagChange="nochange" />
      <div className="b--menu">
        <p className="b--menu__caption m_t_center">美味しいピザを食べながらゆっくり一時どうでしょう？</p>
          <MenuTopics />
          <MenuRecommend />
          <MenuOthers />
      </div>
      
    </section>
  );
}


export default TopMenu;
