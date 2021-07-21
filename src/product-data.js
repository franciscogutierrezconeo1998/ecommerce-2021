const products = [
    {
        id: 1,
        name: "Camara Panasonic WV-U2132L",
        productType: "Camara de seguridad",
        price: 30,
        rating: 4,
        image: "data:image/jpeg;base64,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",
        description: "Al igual que ha sucedido hasta ahora con la actual línea de productos de la serie i-PRO EXTREME, estas cámaras presentan una alta compresión usando el formato de compresión H.265 y la codificación inteligente, la captura de imágenes a color con visión nocturna a color en entornos poco iluminados, tecnología iA (automática inteligente) y funciones superdinámicas, y se pueden usar para monitorizar durante la noche y/o en lugares oscuros alumbrados, en entradas de edificios con grandes diferencias de iluminación, etc."
    },
    {
        id: 2,
        name: "Antena de seguridad LMSPSECURITY",
        productType: "Antena de seguridad",
        price: 50,
        rating: 5,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbq0gCBo66atDPeR3cY4YP9kUCGVPd9f3MVcU71Bp0OMG3kilV_FjDOvJ-Qn7OsOdaPPtVSubarGJQ&usqp=CAc",
        description: "Antena de seguridad control antihurto sistema radio frecuencia, alarma, pines sensor 8,2 mhz"
    },
    {
        id: 3,
        name: "Lector de codigo de barra Honeywell",
        productType: "Lector de codigo de barra",
        price: 45,
        rating: 3,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR6drZmN2qTKrNMWGab0y0ov5MaD-z518BeckcgOlu8-WeZCMJawJ4ZTTezbOhDn_qbguievZEcbfg&usqp=CAc",
        description: 'Especificaciones Técnicas Fuente Luminosa Diodo láser visible de 650 nm ± 10 nm Potencia del Láser 0.7 mW (pico) Profundidad de Campo 0 mm a 203 mm (0" a 8") para código de barras de 0.33 mm (13 mil)'
    },
    {
        id: 4,
        name: "Sensor de movimiento DSC",
        productType: "Sensor de movimiento",
        price: 20,
        rating: 5,
        image: "https://http2.mlstatic.com/D_NQ_NP_667430-MCO43248428951_082020-O.webp",
        description: 'Detector de Movimiento Digital Infrarojo Antimascota 25Kg, 15 metros'
    },
    {
        id: 5,
        name: "Sensor infrarrojo Aura",
        productType: "Sensor de movimiento",
        price: 56,
        rating: 4,
        image: "https://http2.mlstatic.com/D_NQ_NP_874587-MCO42192499465_062020-O.webp",
        description: 'Sensor techo 360 grados de apertura para proyectos podemos hacer buenos descuentos'
    },
]

export default products;