const formatter = (products) => {
    const formatedProducts = products.map(prod => ({
            name : prod.Descripción,
            price: prod.Precio,
            category: prod.Rubro,
            subCategory: prod["Sub rubro"],
            size: prod.Tamaño
        })
    )
    
    return formatedProducts
    
}

module.exports = formatter

// {
//     'Código': '020',
//     'Descripción': 'Alma Mora Malbec',
//     'Costo sin IVA': '728,92',
//     'Costo con IVA': 882,
//     'Rentabilidad %': 92.74,
//     Precio: 1700,
//     Margen: 818,
//     Proveedor: 'Alma de Vino Bodegon',
//     Rubro: 'Bebidas',
//     'Sub rubro': 'Vinos Tintos',
//     Estado: 'Activo'
//   }
