import React from 'react';
import { useSelector } from 'react-redux';
import './Home.scss';

function Home() {
  const { user } = useSelector((state) => state.userReducer);
  return (
    <div className="home">
      <h1 className="title home__title">Главная</h1>
      {user?.role ? (
        <p className="home-text">
          {`Добро пожаловать ${user.login}`}
        </p>
      ) : <p className="home-text">Добро пожаловать гость</p>}

    </div>
  );
}

export default Home;
