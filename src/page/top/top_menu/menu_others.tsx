import React from 'react';

const MenuOthers = () => {

  return (
      <article>
        <h3>Other Menu</h3>
        <dl>
          <dt>チキンバターの胡麻和え</dt>
          <dd>¥1,400</dd>
          <dd><img srcSet={`${2} 2x`} alt="" /></dd>
          <dd>街角でふいに見かけて、ノスタルジックな気分に浸れるごま和え。</dd>
        </dl>
      </article>
  );
}


export default MenuOthers;
