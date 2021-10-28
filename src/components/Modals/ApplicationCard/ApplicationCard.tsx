import {
  Row,
  Button,
  Typography,
} from '@ff/ui-kit';
import React, { useCallback, useEffect, useState } from 'react';
import { ModalBlockContent } from 'components/layouts/Modal';
import { observer } from 'mobx-react';

import app from '../../../stores/applicationCardInputData';
import style from './ApplicationCard.module.scss';
import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
import appOutputData from '../../../stores/applicationCardOutputData';
import profile from '../../../stores/profile';
import applications from '../../../stores/application/applications';
import { TApp } from '../../../models/Application';

type ApplicationCardProps = {
  id?: number
};

const ApplicationCard: React.FC<ApplicationCardProps> = observer(({ id }) => {
  // передавать в компонент id и передавать при нажатии кнопки id в метод класса.
  // Если передаем в компонент id значит мы редактируем существующую заявку
  // Если не передаем то компонент не подставляет value и будет создавать новую

  const [buttonChange, setButtonChange] = useState(false);
  const [currentApp, setCurrentApp] = useState<TApp[]>([]);

  const allowRoles = ['Администратор', 'Главный рекрутер'];

  useEffect(() => {
    if (id) {
      setButtonChange(!buttonChange);
      setCurrentApp(applications.filteredData);
    }
  }, [id]);

  let arrContext = '';

  const handleChangeTextarea = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    appOutputData.setDataFromTextArea(e.target.dataset.name, e.target.value);
  }, []);
  const handleChangeSelect = useCallback((currentItem: any) => {
    appOutputData.setDataFromSelect(arrContext, currentItem);
  }, [arrContext]);
  const handleOpenSelect = useCallback((key: string) => {
    arrContext = key;
  }, []);
  const selectValueHandler = useCallback((data: string, options: Array<object>) => {
    let result = '';
    // v Не нужен будет если формировать объект заявки с указанием value селекта, а не label как сделано сейчас
    for (const keys in app.selects) {
      // @ts-ignore
      if (app.selects[keys] === options) {
        // @ts-ignore
        for (const key in app.selects[keys]) {
          // @ts-ignore
          if (app.selects[keys][key].label === data) result = app.selects[keys][key].value;
        }
      }
    }
    return result;
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    appOutputData.sendData();
  };
  const updateApp = () => {
    appOutputData.updateData(id);
  };

  const HRBlock = useCallback(() => (
    <ModalBlockContent title="Информация HR">
      <TextAreaInput
        label={app.textAreas.complexity}
        placeholder="Число"
        xs={6}
        handleChangeTextarea={handleChangeTextarea}
        dataName="complexity"
        value={currentApp[0] ? String(currentApp[0]?.complexity) : ''}
      />
      <TextAreaInput
        label={app.textAreas.priority}
        placeholder="Число"
        xs={6}
        handleChangeTextarea={handleChangeTextarea}
        dataName="priority"
        value={currentApp[0] ? String(currentApp[0]?.priority) : ''}
      />
      <TextAreaInput
        label={app.textAreas.hr}
        placeholder="Текст"
        xs={12}
        handleChangeTextarea={handleChangeTextarea}
        dataName="hr"
        value={currentApp[0]?.hr}
      />
      {/* Нет на бэке */}
      <SelectInput
        title="Номер вакансии из свободного бюджета"
        option={[]}
        placeholder="пока нет на бэке"
        xs={6}
        handleChangeSelect={() => {}}
        handleOpenSelect={() => {}}
      />
      <TextAreaInput
        label={app.textAreas.hrpartner}
        placeholder="Текст"
        xs={6}
        handleChangeTextarea={handleChangeTextarea}
        dataName="hrpartner"
        value={currentApp[0]?.hrpartner}
      />
      <SelectInput
        title="Статус для Аккаунта"
        option={app.selects.currentstatus}
        placeholder="На рассмотрении"
        xs={6}
        handleChangeSelect={handleChangeSelect}
        handleOpenSelect={() => handleOpenSelect('currentstatus')}
        value={selectValueHandler(currentApp[0]?.currentstatus, app.selects.currentstatus)}
      />
      <SelectInput
        title="Статус заявки"
        option={app.selects.claimstatus}
        placeholder="На рассмотрении"
        xs={6}
        handleChangeSelect={handleChangeSelect}
        handleOpenSelect={() => handleOpenSelect('claimstatus')}
        value={selectValueHandler(currentApp[0]?.claimstatus, app.selects.claimstatus)}
      />
      <TextAreaInput
        label={app.textAreas.numberofdonevacancies}
        placeholder="Число"
        xs={6}
        handleChangeTextarea={handleChangeTextarea}
        dataName="numberofdonevacancies"
        value={currentApp[0] ? String(currentApp[0]?.numberofdonevacancies) : ''}
      />
      <TextAreaInput
        label={app.textAreas.applicantsfio}
        placeholder="Текст"
        xs={9}
        handleChangeTextarea={handleChangeTextarea}
        dataName="applicantsfio"
        value={currentApp[0]?.applicantsfio}
      />
      {/* Будет datepicker */}
      <TextAreaInput
        label="Дата выхода на работу"
        placeholder="пока нет на бэке"
        xs={3}
        handleChangeTextarea={() => {}}
        dataName=""
      />
      <TextAreaInput
        label={app.textAreas.interviewers}
        placeholder="Текст"
        xs={9}
        handleChangeTextarea={handleChangeTextarea}
        dataName="interviewers"
        value={currentApp[0]?.interviewers}
      />
      <TextAreaInput
        label={app.textAreas.mentors}
        placeholder="Текст"
        xs={9}
        handleChangeTextarea={handleChangeTextarea}
        dataName="mentors"
        value={currentApp[0]?.mentors}
      />
    </ModalBlockContent>
  ), [currentApp, handleChangeSelect, handleOpenSelect, handleChangeTextarea, selectValueHandler]);

  return (
    <form
      className="container"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <ModalBlockContent title="Общая информация по вакансии">
        <SelectInput
          title="Вакансия штатного расписания"
          option={app.selects.invacancy}
          placeholder="web-разработчик React"
          xs={6}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('invacancy')}
          value={selectValueHandler(currentApp[0]?.invacancy, app.selects.invacancy)}
        />
        <SelectInput
          title="Наименование вакансии для подбора"
          option={app.selects.pubvacancy}
          placeholder="web-разработчик React"
          xs={6}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('pubvacancy')}
          value={selectValueHandler(currentApp[0]?.pubvacancy, app.selects.pubvacancy)}
        />
        <SelectInput
          title="Основание для подбора"
          option={app.selects.reason}
          placeholder="Новый проект"
          xs={6}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('reason')}
          value={selectValueHandler(currentApp[0]?.reason, app.selects.reason)}
        />
        <TextAreaInput
          label={app.textAreas.whyisitneeded}
          placeholder="Текст"
          xs={6}
          handleChangeTextarea={handleChangeTextarea}
          dataName="whyisitneeded"
          value={currentApp[0]?.whyisitneeded}
        />
        <SelectInput
          title="Характер работы"
          option={app.selects.description}
          placeholder="Гибридный"
          xs={6}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('description')}
          value={selectValueHandler(currentApp[0]?.description, app.selects.description)}
        />

        <SelectInput
          title="Локация"
          option={app.selects.location}
          placeholder="Москва"
          xs={6}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('location')}
          value={selectValueHandler(currentApp[0]?.location, app.selects.location)}
        />
        <SelectInput
          title="Аккаунт"
          option={app.selects.confirmaccount}
          placeholder="ФИО"
          xs={6}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('confirmaccount')}
          value={selectValueHandler(currentApp[0]?.confirmaccount, app.selects.confirmaccount)}
        />
        <SelectInput
          title="Департамент"
          option={app.selects.department}
          placeholder="Департамент управления проектами"
          xs={6}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('department')}
          value={selectValueHandler(currentApp[0]?.department, app.selects.department)}
        />
        <TextAreaInput
          label={app.textAreas.payment}
          placeholder="60 000"
          xs={3}
          handleChangeTextarea={handleChangeTextarea}
          dataName="payment"
          value={currentApp[0] ? String(currentApp[0]?.payment) : ''}
        />
        <TextAreaInput
          label={app.textAreas.numberofvacancies}
          placeholder="3"
          xs={3}
          handleChangeTextarea={handleChangeTextarea}
          dataName="numberofvacancies"
          value={currentApp[0] ? String(currentApp[0]?.numberofvacancies) : ''}
        />
        <TextAreaInput
          label={app.textAreas.project}
          placeholder="Сбербанк Молл"
          xs={6}
          handleChangeTextarea={handleChangeTextarea}
          dataName="project"
          value={currentApp[0]?.project}
        />
      </ModalBlockContent>
      <ModalBlockContent title="Требования к компетентности сотрудника">
        <SelectInput
          title="Образование"
          option={app.selects.education}
          placeholder="Высшее"
          xs={12}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('education')}
          value={selectValueHandler(currentApp[0]?.education, app.selects.education)}
        />
        <Typography.Title level={5} className={style.title} bold>
          Специальные знания, умения и профессиональные навыки
        </Typography.Title>
        <SelectInput
          title="Основные навыки"
          option={app.selects.basicskills}
          placeholder="Javascript"
          multiple
          xs={6}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('basicskills')}
          value={selectValueHandler(currentApp[0]?.basicskills, app.selects.basicskills)}
        />
        <TextAreaInput
          label={app.textAreas.extraskills}
          placeholder="Текст"
          xs={6}
          handleChangeTextarea={handleChangeTextarea}
          dataName="extraskills"
          value={currentApp[0]?.extraskills}
        />
        <Typography.Title level={5} className={style.title} bold>
          Опыт работы
        </Typography.Title>
        <SelectInput
          title="Количество лет"
          option={app.selects.numberofyears}
          placeholder="1-3"
          xs={3}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('numberofyears')}
          value={selectValueHandler(currentApp[0]?.numberofyears, app.selects.numberofyears)}
        />
        <TextAreaInput
          label={app.textAreas.requiredexperience}
          placeholder="Опыт в финансовой корпорации"
          xs={9}
          handleChangeTextarea={handleChangeTextarea}
          dataName="requiredexperience"
          value={currentApp[0]?.requiredexperience}
        />
        <TextAreaInput
          label={app.textAreas.jobduties}
          placeholder="Текст"
          xs={12}
          handleChangeTextarea={handleChangeTextarea}
          dataName="jobduties"
          value={currentApp[0]?.jobduties}
        />
        <SelectInput
          title="График работы"
          option={app.selects.schedule}
          placeholder="5/2"
          xs={4}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('schedule')}
          value={selectValueHandler(currentApp[0]?.schedule, app.selects.schedule)}
        />
        <SelectInput
          title="Занятость"
          option={app.selects.occupation}
          placeholder="Полная"
          xs={3}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('occupation')}
          value={selectValueHandler(currentApp[0]?.occupation, app.selects.occupation)}
        />
        <TextAreaInput
          label={app.textAreas.probation}
          placeholder="3"
          xs={5}
          handleChangeTextarea={handleChangeTextarea}
          dataName="probation"
          value={currentApp[0] ? String(currentApp[0]?.probation) : ''}
        />
        <SelectInput
          title="Наличие премирования"
          option={app.selects.bonuses}
          placeholder="Да"
          xs={6}
          handleChangeSelect={handleChangeSelect}
          handleOpenSelect={() => handleOpenSelect('bonuses')}
          value={selectValueHandler(currentApp[0]?.bonuses, app.selects.bonuses)}
        />
      </ModalBlockContent>
      {allowRoles.includes(profile.role) && <HRBlock />}
      <Row className={style.row_buttons} justify="end">
        { buttonChange
          ? <Button type="primary" onClick={updateApp} className={style.btn}>Обновить заявку</Button>
          : <Button type="primary" htmlType="submit" className={style.btn}>Отправить заявку</Button>}
      </Row>
    </form>
  );
});

export default ApplicationCard;
