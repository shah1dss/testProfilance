import React, { useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Auth.scss';
import { useDispatch } from 'react-redux';
import { users } from '../../Redux/Consts/users';
import { initUserAction } from '../../Redux/Reducers/userReducer';

function Auth() {
  const loginUser = useRef();
  const passwordUser = useRef();
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [validate, setValidate] = useState(false);
  const dispatch = useDispatch();
  function auth() {
    if (loginUser.current.value === '' || passwordUser.current.value === '') {
      setError('Заполните все поля!');
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    } else {
      // eslint-disable-next-line array-callback-return
      users.map((userBd) => {
        if (userBd.login === loginUser.current.value) {
          if (userBd.password === passwordUser.current.value) {
            setValidate(true);
            dispatch(initUserAction(userBd));
          }
        }
      });
      if (!validate) {
        setError('Неверный логин или пароль!');
        setShow(true);
        setTimeout(() => setShow(false), 3000);
      }
    }
  }
  return (
    <Popup
      trigger={(
        <span className="link">
          Войти
        </span>
    )}
      modal
    >
      <div className="modal">
        <div className="modal__wrapper">
          <h3 className="title">Авторизация</h3>
          {show ? <span className="error">{error}</span> : ''}
          <label htmlFor="loginInput" className="modal__input-lable">Логин:</label>
          <input id="loginInput" type="text" ref={loginUser} className="modal__input" />
          <label htmlFor="passwordInput" className="modal__input-lable">Пароль:</label>
          <input id="passwordInput" type="password" ref={passwordUser} className="modal__input" />
          <button type="button" className="modal__button" onClick={auth}>Войти</button>
        </div>
      </div>
    </Popup>
  );
}

export default Auth;
