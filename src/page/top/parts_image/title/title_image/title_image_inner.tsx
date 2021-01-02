import React from 'react';
import ImageNews from './../../../../../images/top/svg/title_news.svg';
import ImageMenu from './../../../../../images/top/svg/title_menu.svg';
import ImageConcept from './../../../../../images/top/svg/title_concept.svg';
import ImageAccess from './../../../../../images/top/svg/title_access.svg';
import {upperCase} from '../../../../../data/common';

interface Props {
  propsData: {
    src: string;
    tagChange?: string;
  }
}

const TitleImageInner = (props: Props) => {
  let image_src: string = '';

  switch(props.propsData.src){
    case "news":
      image_src = ImageNews;
      break;
    case "concept":
      image_src = ImageConcept;
      break;
    case "menu":
      image_src = ImageMenu;
      break;
    case "access":
      image_src = ImageAccess;
      break;
  }

  return (
    <React.Fragment>
      <div className="block__header__icon">
        <img className={`block__header__icon__item block__header__icon__item--${props.propsData.src}`} src={image_src} />
      </div>
      <h2 className="block__header__title m_font_largest m_t_center m_d_i_b m_font_Ave m_l_h_1">{`${upperCase(props.propsData.src)}`}</h2>
    </React.Fragment>    
  );
}

export default TitleImageInner;