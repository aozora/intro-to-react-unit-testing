import React from 'react';
import { render } from '@testing-library/react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

describe('SearchForm', () => {
  it('should render without crashing', () => {
    let result;

    // --------------
    // Arrange
    // --------------
    const props = {};

    // --------------
    // Act
    // --------------
    result = render(<SearchResults {...props} />);

    // --------------
    // Assert
    // --------------
    const { getByTestId } = result;
    const comp = getByTestId('search-results');
    expect(comp).toBeInTheDocument();

    // since we pass no props, I expect the <section> element to be empty
    expect(comp).toBeEmptyDOMElement();
  });

  it('should render a card', () => {
    let result;

    // --------------
    // Arrange
    // --------------
    const props = {
      items: [
        {
          mal_id: 20,
          url: 'https://myanimelist.net/anime/20/Naruto',
          image_url: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6',
          title: 'Naruto'
        }
      ]
    };

    // --------------
    // Act
    // --------------
    result = render(<SearchResults {...props} />);

    // --------------
    // Assert
    // --------------
    const { container, getByTestId } = result;
    const comp = getByTestId('search-results');

    // since we pass data, I expect the <section> element to be empty
    expect(comp).not.toBeEmptyDOMElement();

    // get all the cards contained in the component
    const cards = container.querySelectorAll('article');

    // I expect to find 1 exact item
    expect(cards.length).toBe(1);
  });
});
