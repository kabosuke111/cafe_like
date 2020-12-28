import React from 'react';
import TopNews from './top_news';
import TopConcept from './top_concept';
import TopMenu from './top_menu';
import TopAccess from './top_access';


const TopIndex = () => {

  return (
    <main className="l-main">
      <TopNews />
      <TopConcept />
      <TopMenu />
      <TopAccess />
    </main>
  );
}

export default TopIndex;
