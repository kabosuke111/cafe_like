import React from 'react';
import {section_title_image_state} from './../../../../store/pageTop/image/types';

interface Props {
  src: section_title_image_state;
}

const TitleImage = (props: Props) => {
  return (
    <header>
      <div>
        <img className="" src={props.src.show_title_image} />
      </div>
      <h2 className="">News</h2>
    </header>
  );
}

export default TitleImage;