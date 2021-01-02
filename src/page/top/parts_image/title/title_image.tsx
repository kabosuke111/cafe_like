import React from 'react';
import ImageNews from './../../../../images/top/svg/title_news.svg';
import ImageMenu from './../../../../images/top/svg/title_menu.svg';
import ImageConcept from './../../../../images/top/svg/title_concept.svg';
import ImageAccess from './../../../../images/top/svg/title_access.svg';
import TitleImageInner from './title_image/title_image_inner';

interface Props {
  src: string;
  tagChange?: string;
}

const TitleImage = (props: Props) => {
  
  return (
    <React.Fragment>
      {
        props.tagChange !== "nochange" ?
        <div className="block__header m_t_center"><TitleImageInner propsData={props} /></div>
        :
        <header className="block__header m_t_center"><TitleImageInner propsData={props} /></header>
      }
    </React.Fragment>
    
  );
}

export default TitleImage;