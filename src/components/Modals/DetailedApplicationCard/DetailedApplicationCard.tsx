import React from 'react';
import { ModalBlockContent } from 'components/layouts/Modal';
import { observer } from 'mobx-react';
import { Link } from '@mui/material';
import applications from 'stores/application/applications';

import classes from './DetailedApplicationCard.module.scss';
import TextBlock from './TextBlock';
import profile from '../../../stores/profile/profile';

const DetailedApplicationCard: React.FC = observer(() => {
  const detailedApp = applications.filteredData[0];

  const allowRoles = ['Администратор', 'Главный рекрутер', 'Рекрутер'];

  const HighRoleInfoBlock: React.FC = observer(() => (
    <>
      <TextBlock xs={6} title="Приоритет">
        {detailedApp?.priority}
      </TextBlock>
      <TextBlock xs={6} title="Сложность">
        {detailedApp?.complexity}
      </TextBlock>
    </>
  ));

  const statusColor = () => {
    switch (detailedApp?.claimstatus) {
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

  return (
    <>
      <ModalBlockContent
        title={`Заявка на подбор №${detailedApp?.id} от ${detailedApp?.creationdate}`}
      >
        <TextBlock xs={3}>
          <div
            className={classes.status}
            style={{ backgroundColor: statusColor() }}
          >
            {detailedApp?.claimstatus}
          </div>
        </TextBlock>
        <TextBlock xs={9}>
          <div>{detailedApp?.hr}</div>
        </TextBlock>
        <TextBlock xs={4} title="Автор заявки">
          <Link>{detailedApp?.autor}</Link>
        </TextBlock>
        <TextBlock xs={4} title="Руководитель / Аккаунт">
          <Link>{detailedApp?.confirmaccount}</Link>
        </TextBlock>
        <TextBlock xs={4} title="Рекрутер">
          <Link>{detailedApp?.hr}</Link>
          <p>Дата начала подбора {detailedApp?.begindate}</p>
        </TextBlock>
      </ModalBlockContent>
      <ModalBlockContent title="Информация по вакансии">
        <TextBlock xs={6} title="Вакансия штатного расписания">
          {detailedApp?.invacancy}
        </TextBlock>
        <TextBlock xs={6} title="Наименование вакансии для подбора">
          {detailedApp?.pubvacancy}
        </TextBlock>
        <TextBlock xs={6} title="Основание для подбора">
          {detailedApp?.reason}
        </TextBlock>
        <TextBlock xs={6} title="Обоснование">
          {detailedApp?.whyisitneeded}
        </TextBlock>
        <TextBlock xs={6} title="Характер работы">
          {detailedApp?.description}
        </TextBlock>
        <TextBlock xs={6} title="Локация">
          {detailedApp?.location}
        </TextBlock>
        <TextBlock xs={6} title="Аккаунт">
          {detailedApp?.confirmaccount}
        </TextBlock>
        <TextBlock xs={6} title="Департамент">
          {detailedApp?.department}
        </TextBlock>
        <TextBlock xs={3} title="Заработная плата">
          {detailedApp?.payment}
        </TextBlock>
        <TextBlock xs={3} title="Количество вакансий">
          {detailedApp?.numberofvacancies}
        </TextBlock>
        <TextBlock xs={6} title="Проект">
          {detailedApp?.project}
        </TextBlock>
      </ModalBlockContent>
      <ModalBlockContent title="Требования к компетентности сотрудника">
        <TextBlock xs={12} title="Образование">
          {detailedApp?.education}
        </TextBlock>
        <TextBlock xs={6} title="Основные навыки">
          {detailedApp?.basicskills}
        </TextBlock>
        <TextBlock xs={6} title="Дополнительные навыки">
          {detailedApp?.extraskills}
        </TextBlock>
        <TextBlock xs={6} title="Количество лет">
          {detailedApp?.numberofyears}
        </TextBlock>
        <TextBlock xs={6} title="Требуемый опыт">
          {detailedApp?.requiredexperience}
        </TextBlock>
        <TextBlock xs={12} title="Должностные обязанности">
          {detailedApp?.jobduties}
        </TextBlock>
        <TextBlock xs={5} title="График работы">
          {detailedApp?.schedule}
        </TextBlock>
        <TextBlock xs={3} title="Занятость">
          {detailedApp?.occupation}
        </TextBlock>
        <TextBlock xs={4} title="Испытательный срок (в месяцах)">
          {detailedApp?.probation}
        </TextBlock>
        <TextBlock xs={6} title="Наличие премирования">
          {detailedApp?.bonuses}
        </TextBlock>
      </ModalBlockContent>
      <ModalBlockContent title="Информация HR">
        {allowRoles.includes(profile.role) && <HighRoleInfoBlock />}
        <TextBlock xs={12} title="Рекрутер-исполнитель">
          {detailedApp?.hrpartner}
        </TextBlock>
        <TextBlock xs={6} title="Текущий статус для Аккаунта">
          {detailedApp?.claimstatus}
        </TextBlock>
        <TextBlock xs={6} title="Количество подобранных вакансий">
          {detailedApp?.numberofdonevacancies}
        </TextBlock>
        <TextBlock xs={6} title="ФИО кандидатов">
          {detailedApp?.applicantsfio}
        </TextBlock>
        <TextBlock xs={6} title="Дата выхода на работу" />
        <TextBlock xs={12} title="Проводящие собеседования">
          {detailedApp?.interviewers}
        </TextBlock>
      </ModalBlockContent>
    </>
  );
});
export default DetailedApplicationCard;
