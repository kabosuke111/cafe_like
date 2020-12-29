import React from 'react';
import ImageNews from './../../../../images/top/svg/title_news.svg'
import ImageMenu from './../../../../images/top/svg/title_menu.svg'
import ImageConcept from './../../../../images/top/svg/title_concept.svg'
import ImageAccess from './../../../../images/top/svg/title_access.svg'

interface Props {
  src: string;
}

const TitleImage = (props: Props) => {
  let image_src: string = '';

  switch(props.src){
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

//先頭のみ小文字から大文字へ
const upperCase = (text: string): string => {
  const firstCharset = text.charAt(0);
  const lowerText = text.slice(1);
  const upText = firstCharset.toUpperCase();
  const afterUpper = `${upText}${lowerText}`;
  return afterUpper;
}

  return (
    <header className="block__header m_t_center">
      <div className="block__header__icon">
        <img className={`block__header__icon__item block__header__icon__item--${props.src}`} src={image_src} />
      </div>
      <h2 className="block__header__title m_font_largest m_t_center m_d_i_b m_font_Ave m_l_h_1">{`${upperCase(props.src)}`}</h2>
    </header>
  );
}

export default TitleImage;