import React from 'react';
import { render } from '@testing-library/react';

import ModalWrapper from './ModalWrapper';
import ModalBlockContent from './ModalBlockContent';

describe('ModalWrapper', () => {
  it('should be the same', () => {
    const app = render(<ModalWrapper button={<button>Button</button>} />);
    expect(app).toMatchSnapshot();
  });
});
describe('ModalBlockContent', () => {
  it('should be the same', () => {
    const app = render(<ModalBlockContent title="Title" />);
    expect(app).toMatchSnapshot();
  });
});
