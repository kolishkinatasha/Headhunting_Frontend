import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import NavBar from './NavBar';

describe('NavBar', () => {
  it('should be the same', () => {
    const history = createMemoryHistory();
    const app = render(<Router history={history}><NavBar /></Router>);
    expect(app).toMatchSnapshot();
  });
});
