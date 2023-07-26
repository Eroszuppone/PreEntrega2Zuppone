const productos = [
    {
      id: '01',
      name:'Excellent Cat Adult Smart ',
      category: 'Gatos',
      description:'"Excellent Cat Adult Smart es un alimento completo y balanceado a base de proteínas de alta calidad provenientes del pollo y el arroz como principales ingredientes. ',
      price: 13.737,
      img: 'https://catycanar.vtexassets.com/arquivos/ids/169057-1200-auto?v=638240816880270000&width=1200&height=auto&aspect=true',
      stock: 5,
    },
    {
      id: '02',
      name: 'Piedras Sanitarias Absorsol Premium',
      category: 'Gatos',
      description:'Piedras Sanitarias Absorsol Premium X 3.6 Kg , poseen máximo rendimiento.Absorbe la cantidad de líquido equivalente a su peso rápidamente.',
      price: 1.052,
      img: 'https://catycanar.vtexassets.com/arquivos/ids/158672-1200-auto?v=637732982448900000&width=1200&height=auto&aspect=true',
      stock: 38,
    },
    {
      id: '03',
      name: 'Old Prince Novel Cya Adultos Med&Large',
      category: 'Perros',
      description:'Old Prince Novel es un alimento balanceado y completo para perros adultos de razas medianas y grandes. Completamente natural.',
      price: 13.912,
      img: 'https://catycanar.vtexassets.com/arquivos/ids/170044-1200-auto?v=638255623510030000&width=1200&height=auto&aspect=true',
      stock: 10,
    },
    {
      id: '04',
      name: 'Pro Plan Perro Adulto Pequeño ',
      category: 'Perros',
      description:'Diseñado para mantener la vitalidad y fuerza de los perros pequeños. Su ingrediente principal es el pollo, que aporta un alto contenido adecuado de proteínas.',
      price: 14.366,
      img: 'https://catycanar.vtexassets.com/arquivos/ids/156704-1200-auto?v=637732971584800000&width=1200&height=auto&aspect=true',
      stock: 5,
    },
    {
      id: '05',
      name: 'Golocan Huesitos C/Chip De Carne ',
      category: 'Perros',
      description:'Deliciosa croqueta horneada con sabor a carne, con una textura especial y crocante que ayuda a reducir la formación de la placa bacterial y del sarro.',
      price: 358,
      img: 'https://catycanar.vtexassets.com/arquivos/ids/163416-1200-auto?v=637786411264330000&width=1200&height=auto&aspect=true',
      stock: 24,
    },
    {
      id: '06',
      name: 'Colchoneta Perro Antidesgarro Copos 90X110 -Cuzquitos ',
      category: 'Perros',
      description:'Esta colchoneta antidesgarro es muy cómoda y práctica para tu perro. Su confección con materiales de excelente calidad permite que sea súper resistente.',
      price: 26.902,
      img: 'https://catycanar.vtexassets.com/arquivos/ids/156295-1200-auto?v=637732969689100000&width=1200&height=auto&aspect=true',
      stock: 10,
    },

  ];
  
  export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!error) {
          resolve(productos);
        } else {
          reject('Hubo un error intente mas tarde');
        }
      }, 2000);
    });
  };
  