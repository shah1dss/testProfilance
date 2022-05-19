/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addnewsAC } from '../../Redux/Reducers/newsReducer';
import './News.scss';
import NewsItem from './NewsItem';

function News() {
  const { user } = useSelector((state) => state.userReducer);
  let { news } = useSelector((state) => state.newsReducer);
  const [visible, setVisible] = useState(false);
  const [serachQuery, setSerachQuery] = useState('');
  const titleNews = useRef();
  const descNews = useRef();
  const dispatch = useDispatch();
  function addNews() {
    const date = new Date();
    const formatDate = `${date.getHours()}:${date.getMinutes()} ${date.toLocaleDateString(
      'ru',
    )}`;
    const newsObj = {
      id: Math.floor(Math.random() * 30),
      author: user.login,
      title: titleNews.current.value,
      description: descNews.current.value,
      createdAt: formatDate,
      status: false,
    };
    dispatch(addnewsAC(newsObj));
    setVisible(!visible);
  }
  if (serachQuery) {
    news = news.filter(
      (item) => item.title.toLowerCase().includes(serachQuery.toLowerCase())
      || item.description.toLowerCase().includes(serachQuery.toLowerCase()),
    );
  }
  return (
    <div className="news">
      <h1 className="title news__title">Новости</h1>
      <div className="news__form">
        <input
          type="text"
          placeholder="Поиск"
          className="news__form-input"
          value={serachQuery}
          onChange={({ target: { value } }) => setSerachQuery(value)}
        />
        {user.role === 'user' || user.role === 'admin' ? <button type="button" className="news__form-btn" onClick={() => setVisible(!visible)}>Добавить новость</button> : ''}
      </div>
      {visible
        ? (
          <div className="addForm">
            <div className="addForm__wrapper">
              <h3 className="title">Добавить новость</h3>
              <label htmlFor="loginInput" className="label addForm__input-lable">Введите заголовок:</label>
              <input id="loginInput" type="text" ref={titleNews} className="input addForm__input" />
              <label htmlFor="passwordInput" className="label addForm__input-lable">Введите содержание:</label>
              <textarea id="passwordInput" type="text" ref={descNews} className="input addForm__input" />
              <button type="button" className="button addForm__button" onClick={addNews}>Добавить</button>
            </div>
          </div>
        )
        : ''}
      <div className="news__list">
        {news.length > 0
          ? news.map((newsItem) => <NewsItem news={newsItem} key={newsItem.id} />)
          : <div className="news__list-error">Новостей на данный момент нет</div>}
      </div>
    </div>
  );
}

export default News;
