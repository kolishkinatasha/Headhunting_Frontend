import React from 'react';
import { render } from '@testing-library/react';

import ApplicationCard from './ApplicationCard';

describe('ApplicationCard', () => {
  it('should be the same', () => {
    const app = render(<ApplicationCard />);
    expect(app).toMatchSnapshot();
  });
});
