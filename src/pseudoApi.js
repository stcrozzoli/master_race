import pc1 from './imgs/pc1.png'
import p2 from './imgs/pc2.png'
import pc3 from './imgs/pc3.png'


const productos = [
    {
    id:'1', 
    category:'gamer',
    titulo:'Pc Gamer Armada Completa Amd Ryzen 5 5600g 16gb Ssd 480gb',
    descripcion:'Esta PC ideal para iniciarse en el mundo del gaming, trae el famoso procesador Ryzen 5 5600G, que junto con su GPU integrada, te brindara de un gran rendimiento en todo lo que hagas. Tambien cuenta con 16gb de RAM a 3200Mhz, una Motherboard Asus B450-M, un disco M2 Gigabyte de 480GB y una fuente Aureox de 600W', 
    precio:'94554', 
    stock: 16,
    img: pc1
    },

    {
    id:'2', 
    category:'gamer',
    titulo:'Pc Gamer Armada Completa Intel I3 10105f 16gb Ssd 240 Rx 550',
    descripcion:'Esta PC ideal para juegos, trae el procesador Intel I3 10105F, que junto con la GPU Rx 550, te brindara de un gran rendimiento en todo lo que hagas. Tambien cuenta con 16gb de RAM a 3200Mhz, una Motherboard Asus B550, un disco Sata III Gigabyte de 240GB y una fuente RedDragon de 550W', 
    precio:'102060', 
    stock: 20,
    img:p2
    },

    {
    id:'3', 
    category:'gamer',
    titulo:'Pc Gamer Armada Completa Intel I3 10100f 16gb Ssd 240gb Gtx 1050 Ti',
    descripcion:'Esta PC pensada para juegos mas exigentes, trae el procesador Intel I3 10100F, que junto con la GPU Gtx 1050 Ti, te brindara de un gran rendimiento en todos los juegos pesados. Tambien cuenta con 16gb de RAM a 3200Mhz, una Motherboard Asus B550 Prime MK4, un disco Sata III Gigabyte de 240GB y una fuente RedDragon de 550W', 
    precio:'135368', 
    stock: 9,
    img:pc3
    },
    {
    id:'4', 
    category:'oficina',
    titulo:'Pc de Oficina Armada Completa Amd Ryzen 5 5600g 16gb Ssd 480gb',
    descripcion:'Esta PC ideal para iniciarse en el mundo del gaming, trae el famoso procesador Ryzen 5 5600G, que junto con su GPU integrada, te brindara de un gran rendimiento en todo lo que hagas. Tambien cuenta con 16gb de RAM a 3200Mhz, una Motherboard Asus B450-M, un disco M2 Gigabyte de 480GB y una fuente Aureox de 600W', 
    precio:'94554', 
    stock: 23,
    img: pc1
    },

    {
    id:'5', 
    category:'oficina',
    titulo:'Pc Pc de Oficina Armada Completa Intel I3 10105f 16gb Ssd 240 Rx 550',
    descripcion:'Esta PC ideal para juegos, trae el procesador Intel I3 10105F, que junto con la GPU Rx 550, te brindara de un gran rendimiento en todo lo que hagas. Tambien cuenta con 16gb de RAM a 3200Mhz, una Motherboard Asus B550, un disco Sata III Gigabyte de 240GB y una fuente RedDragon de 550W', 
    precio:'102060', 
    stock: 15,
    img:p2
    },

    {
    id:'6', 
    category:'oficina',
    titulo:'Pc Pc de Oficina Armada Completa Intel I3 10100f 16gb Ssd 240gb Gtx 1050 Ti',
    descripcion:'Esta PC pensada para juegos mas exigentes, trae el procesador Intel I3 10100F, que junto con la GPU Gtx 1050 Ti, te brindara de un gran rendimiento en todos los juegos pesados. Tambien cuenta con 16gb de RAM a 3200Mhz, una Motherboard Asus B550 Prime MK4, un disco Sata III Gigabyte de 240GB y una fuente RedDragon de 550W', 
    precio:'135368', 
    stock: 12,
    img:pc3
    }
]



export const obtenerId = (id) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod =>{
                return prod.id === id
            }))
        },1000)
    })
}


export const obtenerProductos = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },1000)
    })
}

export const obtenerCategoria = (categoryId) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productos.filter(prod => prod.category === categoryId))
        },500)
    })
}

