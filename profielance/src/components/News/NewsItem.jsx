/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptNewsAC, delNewsAC } from '../../Redux/Reducers/newsReducer';
import './NewsItem.scss';

function NewsItem({ news }) {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  function deleteNews() {
    dispatch(delNewsAC(news.id));
  }
  return (
    <div className="news__item">
      {user.role === 'admin' && news.status === false ? (
        <div className="adm-form">
          <button onClick={() => dispatch(acceptNewsAC(news.id))} type="button" className="adm-btn">Одобрить✅</button>
          <button onClick={deleteNews} type="button" className="adm-btn">Отклонить❌</button>
        </div>

      ) : ''}
      <div className="news__item-title">
        <p>
          {news.status ? (
            <>
              {news.title}
              <span>
                (проверена)
              </span>
            </>
          ) : (
            <>
              {news.title}
              <span>
                (не проверена)
              </span>
            </>
          )}
        </p>
      </div>
      <p className="text">{news.description}</p>
      <div className="news__item-footer">
        <p>
          {`Автор
          ${news.author}
          `}
        </p>
        <p>{news.createdAt}</p>
      </div>
    </div>
  );
}

export default NewsItem;
