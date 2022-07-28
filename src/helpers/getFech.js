let productos = [
    { id: '1' ,categoria: 'hombres', name: "juan", price: 37, foto:'https://i.linio.com/p/a815de1c590bfc12db4929f315e4f1ac-product.webp' },
    { id: '2' ,categoria: 'hombres', name: "carlos", price: 27, foto:'https://i.linio.com/p/a815de1c590bfc12db4929f315e4f1ac-product.webp' },
    { id: '3' ,categoria: 'hombres', name: "ana", price: 40, foto:'https://i.linio.com/p/a815de1c590bfc12db4929f315e4f1ac-product.webp' },
    { id: '4' ,categoria: 'mujeres', name: "sofia", price: 55, foto:'https://i.linio.com/p/a815de1c590bfc12db4929f315e4f1ac-product.webp' },
    { id: '5' ,categoria: 'mujeres', name: "victoria", price: 11, foto:'https://i.linio.com/p/a815de1c590bfc12db4929f315e4f1ac-product.webp' },
    { id: '6' ,categoria: 'mujeres', name: "federico", price: 19, foto:'https://i.linio.com/p/a815de1c590bfc12db4929f315e4f1ac-product.webp' },
    { id: '7' ,categoria: 'mujeres', name: "pepe", price: 2, foto:'https://i.linio.com/p/a815de1c590bfc12db4929f315e4f1ac-product.webp' }  
    ]

export const getFetch = (id) => {
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (id) {
                resolve( productos.find( prod => prod.id === id ) )
            } else {
                resolve(productos)                
            }
        }, 2000)
    })
}
