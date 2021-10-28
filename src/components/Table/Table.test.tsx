import React from 'react';
import { render } from '@testing-library/react';

import Table from './Table';

describe('RegisterApplications', () => {
  it('should be the same', () => {
    const app = render(<Table />);
    expect(app).toMatchSnapshot();
  });
});
