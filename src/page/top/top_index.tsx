import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {rootState} from './../../store/index';
import {NoNameAction1,NoNameAction2} from './../../store/pageTop/actions'
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
