import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

describe('SearchForm', () => {
  it('should render without crashing', () => {
    let result;

    // --------------
    // Arrange
    // --------------

    // --------------
    // Act
    // --------------
    result = render(<Search />);

    // --------------
    // Assert
    // --------------
    const { getByTestId } = result;
    const comp = getByTestId('search');
    expect(comp).toBeInTheDocument();
  });
});
