const formatter = (products) => {
    const formatedProducts = products.map(prod => ({
            name : prod.Descripción,
            price: prod.Precio,
            category: prod.Rubro,
            subCategory: prod.Tamaño || prod["Sub rubro"]
        })
    )
    
    return formatedProducts
    
}

module.exports = formatter

