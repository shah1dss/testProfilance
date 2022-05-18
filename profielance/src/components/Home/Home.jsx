import React from 'react';
import { useSelector } from 'react-redux';
import './Home.scss';

function Home() {
  const { user } = useSelector((state) => state.userReducer);
  return (
    <div className="home">
      <h1>Главная</h1>
      {user?.role ? (
        <p>
          Привет
          &nbsp;&nbsp;
          {user.login}
        </p>
      ) : <p>Привет гость</p>}

    </div>
  );
}

export default Home;
