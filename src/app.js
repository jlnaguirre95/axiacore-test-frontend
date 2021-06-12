import Products from './Products';
import data from './products.json';

const beers = new Products(data);

beers.render();

const modalFilters = document.querySelector('.modal')
const filterBtn = document.querySelector('.filter-btn');
const closeBtn = document.querySelector('.close-btn');

filterBtn.addEventListener('click', () => {
    console.log('Opening modal...');
    modalFilters.style.display = 'grid'
});

closeBtn.addEventListener('click', () => {
    console.log('Closing modal...');
    modalFilters.style.display = 'none'
});


