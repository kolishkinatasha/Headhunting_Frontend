import React from 'react';
import { render } from '@testing-library/react';

import DetailedApplicationCard from './DetailedApplicationCard';

describe('DetailedApplicationCard', () => {
  it('should be the same', () => {
    const app = render(<DetailedApplicationCard />);
    expect(app).toMatchSnapshot();
  });
});
