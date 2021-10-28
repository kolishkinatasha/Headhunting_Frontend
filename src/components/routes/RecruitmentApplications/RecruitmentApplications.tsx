import { observer } from 'mobx-react';
import React from 'react';
import Container from 'components/layouts/Container';
import Main from 'components/layouts/Main';
import Table from 'components/Table';
import NavBar from 'components/NavBar';

const RecruitmentApplications: React.FC = observer(() => (
  <Container>
    <Main>
      <NavBar />
      <Table />
    </Main>
  </Container>
));

export default RecruitmentApplications;
