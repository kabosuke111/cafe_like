import React from 'react';
import Pasta from './../../../images/menu/thumb/thumb-menu_pasta.jpg';
import Pasta2x from './../../../images/menu/2x/menu-pasta@2x.jpg';
const MenuTopics = () => {

  return (
    <article>
      <h3>今週のおすすめ</h3>
      <dl>
        <dt>白いパスタ</dt>
        <dd>
          <picture>
            <source srcSet={`${Pasta2x} 2x`} />
            <img src={Pasta} alt="" />
          </picture>
        </dd>
        <dd>3日熟したホワイトソースをたっぷりかけて、こしょうをまぶして出来上がり。</dd>
      </dl>
    </article>
  );
}


export default MenuTopics;
