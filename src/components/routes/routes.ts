import React from 'react';

const Home = React.lazy(() => import('./Home'));
const Work = React.lazy(() => import('./Work'));
const Services = React.lazy(() => import('./Services'));
const RegisterApplications = React.lazy(() => import('./RegisterApplications'));
const RecruitmentApplications = React.lazy(
  () => import('./RecruitmentApplications'),
);

export type RoutsType = {
  name: string;
  path: string;
  component: React.FC;
};

const routes: RoutsType[] = [
  { name: 'Главная', path: '/', component: Home },
  { name: 'Сервисы', path: '/services', component: Services },
  { name: 'Работа', path: '/services/work', component: Work },
  {
    name: 'Заявки на подбор персонала',
    path: '/services/work/applications',
    component: RecruitmentApplications,
  },
  {
    name: 'Реестр заявок',
    path: '/services/work/applications/register',
    component: RegisterApplications,
  },
];
export default routes;
