import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import Browser from './components/Browser';
import Tree from './components/Tree'
import Menu from './components/Menu';

import { getFolderContent } from 'redux/explorer/actions';
import useKeysActions from 'hooks/useKeysActions';

const App = () => {
  const dispatch = useDispatch();

  useKeysActions();

  useEffect(()=>{
    dispatch(getFolderContent());
  }, []);

  return (
    <>
      <div className="App">
        <div className="flex">
          <div className="w-1/4">
            <Tree />
          </div>
          <div className="w-3/4">
            <Browser />
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
}

export default App;
