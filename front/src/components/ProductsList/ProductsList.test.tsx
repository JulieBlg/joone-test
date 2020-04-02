import React from 'react';
import { render, findByText } from '@testing-library/react';
import ProductsList from '.';
import * as services from '../../services/ProductsServices';

let mockSpyGetProducts: jest.SpyInstance; 

beforeAll(() => {
    mockSpyGetProducts = jest.spyOn(services, 'getSpecificNumberOfProducts').mockResolvedValue(
        [
            { title: 'Lot de 3 couches' },
            { title: 'Lot de 5 couches' },
            { title: 'Lot de 10 couches' },
            { title: 'Lot de 20 couches' },
        ]
    );
})

it('renders a product list correctly', async () => {
    const { container, findByText } = render(<ProductsList />);

    expect(mockSpyGetProducts).toHaveBeenCalledWith('10');

    await findByText('Lot de 3 couches');

    expect(container).toMatchSnapshot();
});
