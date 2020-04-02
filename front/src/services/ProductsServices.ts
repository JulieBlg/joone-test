export const getSpecificNumberOfProducts = async (numberOfProducts: string) => {
    const response = await window.fetch(`http://localhost:3000/products?limit=${numberOfProducts}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    });

    const { products } = await response.json();

    return products;
}

export default { getSpecificNumberOfProducts };