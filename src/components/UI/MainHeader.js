import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''}  to='/cocktails'>
              Cocktails
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
