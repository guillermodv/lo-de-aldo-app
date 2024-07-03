type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: Product[];
};

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  quantity: string;
};

const categories: Category[] = [
  {
    id: "1",
    name: "Pizza",
    description: "Amplia variedad en pizzas a la piedra",
    image: "https://i.imgur.com/2310245.jpg",
    subcategories: [
      {
        id: "1",
        name: "Muzzarella",
        description: "Muzzarella, salsa de tomate, aceitunas",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "2",
        name: "Scalonetta",
        description: "Albaca, tomate cherry, aceitunas y queso",
        image: "/muzza.jpeg",
        price: "24",
        quantity: "12",
      },
      {
        id: "3",
        name: "Fugazzeta",
        description: "Cebolla, queso, jamon",
        image: "/muzzarella.jpeg",
        price: "15",
        quantity: "10",
      },
    ],
  },
  {
    id: "2",
    name: "Empanadas",
    description: "Amplia variedad en empanadas",
    image: "https://i.imgur.com/2310245.jpg",
    subcategories: [
      {
        id: "1",
        name: "Capresse",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "15",
      },
      {
        id: "2",
        name: "Carne",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "12",
      },
      {
        id: "3",
        name: "Carne",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "12",
      },
      {
        id: "4",
        name: "Verdura",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "12",
      },
      {
        id: "5",
        name: "Jamon y queso",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "12",
      },
      {
        id: "6",
        name: "Pollo",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "10",
      },
      {
        id: "7",
        name: "Roquefort",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "12",
      },
    ],
  },
  {
    id: "3",
    name: "Porciones",
    description: "Porciones de tartas y pizzas.",
    image: "https://i.imgur.com/3134089.jpg",
    subcategories: [
      {
        id: "1",
        name: "Tarta tricolor",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "1",
        quantity: "10",
      },
      {
        id: "2",
        name: "Tarta de verdura",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "90",
        quantity: "10",
      },
      {
        id: "3",
        name: "Tarta de Jamon y queso",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "4",
        name: "Tarta de Zapallito",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },

      {
        id: "5",
        name: "Fugazzeta con queso",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "6",
        name: "Fugazzeta Jamon y Queso",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "6",
        name: "Faina",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "6",
        name: "Muzza",
        description: "Lorem itsum",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
    ],
  },
];

export type { Category, Product };

const menu = JSON.stringify(categories, null, 2);
export { categories, menu };
