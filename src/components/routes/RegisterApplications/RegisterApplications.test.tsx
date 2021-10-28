import React from 'react';
import { render } from '@testing-library/react';

import RegisterApplications from './RegisterApplications';

describe('RegisterApplications', () => {
  it('should be the same', () => {
    const app = render(<RegisterApplications />);
    expect(app).toMatchSnapshot();
  });
});
