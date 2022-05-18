import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUserAction } from '../../Redux/Reducers/userReducer';
import Auth from '../Auth/Auth';
import './Header.scss';

function Header() {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="./img/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <Link to="/news" className="link">
            Новости
          </Link>
        </div>
        <div className="nav__item">
          {user?.role ? <button type="button" className="link" onClick={() => dispatch(logoutUserAction())}>Выйти</button> : <Auth />}
        </div>
      </div>
    </header>
  );
}

export default Header;
