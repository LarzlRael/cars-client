export const status_car = [
    { nombre: 'Viejo', value: 'viejo' },
    { nombre: 'Nuevo', value: 'nuevo' },
    { nombre: 'Usado', value: 'usado' }
];
export const marcas = [
    
    {
        nombre_marca: 'Honda',
        image: '../assets/honda.png'
    },
    {
        nombre_marca: 'Toyota',
        image: '../assets/toyota.jpg'
    },
    {
        nombre_marca: 'Corolla',
        image: '../assets/corolla.png'
    },
    {
        nombre_marca: 'Nissan',
        image: '../assets/nissan.jpeg'
    },
    {
        nombre_marca: 'Kia',
        image: '../assets/kia.png'
    },
    {
        nombre_marca: 'Volkswagen',
        image: '../assets/volkswagen.jpg'
    },
    
    {
        nombre_marca: 'Renault',
        
        image: '../assets/Renault.jpg'
    }
];

export const accountsLink = [
    {
        title_group: 'Usuario',
        items: [
            { title: 'Mi cuenta', to: '/admin/profile' },
            { title: 'Cuentas asociadas', to: '/admin/users' },
            { title: 'Cuentas conectadas', to: '/admin/empleado' }]
    },
    {
        title_group: 'Empleados',
        items: [
            { title: 'Registro de Ventas', to: '/admin/ventas' },
            { title: 'Agregar Vehiculos', to: '/admin/vehiculos' },
            { title: 'Ver vehiculos', to: '/admin/vervehiculos' }]
    },
    {
        title_group: 'Clientes',
        items: [
            { title: 'Lista de clientes', to: '/admin/clientes' },
        ]
    },
];



export const fields = [
    { valor: "name_car", nombre_item: "Nombre del carro " },
    { valor: "price", nombre_item: "Precio" },
    { valor: "description", nombre_item: "Descripcion" },
    { valor: "model", nombre_item: "modelo" },
    { valor: "status", nombre_item: "estado" },
    { valor: "maker", nombre_item: "Hecho en " }
];