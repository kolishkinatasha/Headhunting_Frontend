import React from 'react';
import { TApp } from 'models/Application';

import classes from './RagisterCard.module.scss';

const RedisterCard: React.FC<TApp> = (props) => {
  const {
    id, pubvacancy, applicantsfio,
    location, currentstatus, invacancy, payment,
    department, begindate, project, priority,
    complexity, numberofvacancies, numberofdonevacancies,
    confirmaccount, hr, hrpartner, mentors, interviewers,
    creationdate,
  } = props;

  const statusColor = () => {
    switch (props.currentstatus) {
      case 'На рассмотрении':
      case 'На согласовании':
      case 'На исполнении':
      case 'Согласование с руководством':
      case 'Исполнена':
        return 'green';
      case 'Черновик':
      case 'Закрыта':
        return 'grey';
      case 'Отклонена':
      case 'Приостановлена':
        return 'red';
      default:
        return 'black';
    }
  };
  // console.log(props.id)

  return (
    <div key={id} className={classes.cards}>
      <section className={classes.banner}>
        <div className={classes.banner__content}>
          <h1>{pubvacancy}</h1>
          <h3>{applicantsfio}</h3>
          <h4>{location}</h4>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 120">
          <path d="M0 51.76c36.21-2.25 77.57-3.58 126.42-3.58 320 0 320 57 640 57 271.15 0 312.58-40.91 513.58-53.4V0H0z" fillOpacity=".2" />
          <path d="M0 24.31c43.46-5.69 94.56-9.25 158.42-9.25 320 0 320 89.24 640 89.24 256.13 0 307.28-57.16 481.58-80V0H0z" fillOpacity=".8" />
          <path d="M0 0v3.4C28.2 1.6 59.4.59 94.42.59c320 0 320 84.3 640 84.3 285 0 316.17-66.85 545.58-81.49V0z" />
        </svg>
      </section>
      <div className={classes.main_text}>
        <p><strong style={{ color: `${statusColor()}` }}>{currentstatus}</strong></p>
        <p className={classes.card_text}>Название вакансии (свободный бюджет): <br />
          <span style={{ marginLeft: '0' }}>{invacancy}</span>
        </p>
        <p className={classes.card_text}>Заработная плата:
          <strong>{payment} рублей</strong>
        </p>
        <p className={classes.card_text}>Структурное подразделение:
          <strong>{department}</strong>
        </p>
        <p className={classes.card_text}>Дата начала подбора:
          <strong>{begindate}</strong>
        </p>
        <p className={classes.card_text}>Дата выхода кандидата на работу:
          <strong>{begindate}</strong>
        </p>
        <p className={classes.card_text}>Проект:
          <span>{project}</span>
        </p>
        <p className={classes.card_text}>Приоритет:
          <strong>{priority}</strong>
        </p>
        <p className={classes.card_text}>Сложность:
          <strong>{complexity}</strong>
        </p>
        <p className={classes.card_text}>Количество вакансий:
          <strong>{numberofvacancies}</strong>
        </p>
        <p className={classes.card_text}>Количество подобранных вакансий:
          <strong>{numberofdonevacancies}</strong>
        </p>
        <p className={classes.card_text}>Аккаунт:
          <span>{confirmaccount}</span>
        </p>
        <p className={classes.card_text}>Рекрутёр:
          <span>{hr}</span>
        </p>
        <p className={classes.card_text}>HR партнёр:
          <span>{hrpartner}</span>
        </p>
        <p className={classes.card_text}>Наставники:
          <span>{mentors}</span>
        </p>
        <p className={classes.card_text}>Интервьюер:
          <span>{interviewers}</span>
        </p>
      </div>
      <p style={{ color: '#c4c4c4', textAlign: 'right', margin: '10px 5px' }}>Опубликовано {creationdate}</p>
    </div>
  );
};

export default RedisterCard;
