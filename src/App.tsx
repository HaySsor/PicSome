import styled from './App.module.scss';
import {Header} from './components/header/header.component';
import {Outlet} from 'react-router-dom';


export const App = () => {
  return (
    
      <div>
        <Header />
        <Outlet />
      </div>

  );
};
