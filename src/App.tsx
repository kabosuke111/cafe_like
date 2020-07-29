import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {rootState} from './store/index';
import {NoNameAction1,NoNameAction2} from './store/pageTop/actions';
import TopIndex from './page/top/top_index'

function App() {

  return (
    <div id="l-wrapper">
      <TopIndex />
    </div>
  );
}

export default App;
