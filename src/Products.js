import Handlebars from 'handlebars';

Handlebars.registerHelper('imgPath', (imgName, alt) => {
    return new Handlebars.SafeString(`<img src="/img/${imgName}" alt="${alt}" />`)
})

class Products {
    constructor(data) {
        this.products = data;
        this.filteredProducts = this.products;
    }

    filterByCategory(id) {
        const filteredProducts = this.products.filter(
            (product) => id === product.filterId
        );
        this.filteredProducts = filteredProducts;
    }

    render() {
        const source = document.querySelector('#product-card').innerHTML;

        const template = Handlebars.compile(source);

        const productCard = template(this.filteredProducts);

        document.querySelector('#products-list').innerHTML += productCard;
    }
}

export default Products;
