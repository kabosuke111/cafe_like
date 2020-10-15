import React from 'react';
import TopNews from './top_news';
import TopConcept from './top_concept';
import TopMenu from './top_menu';
import TopAccess from './top_access';


const TopIndex = () => {

  return (
    <main id="l-index">
      <TopNews />
      <TopConcept />
      <TopMenu />
      <TopAccess />
    </main>
  );
}

export default TopIndex;
