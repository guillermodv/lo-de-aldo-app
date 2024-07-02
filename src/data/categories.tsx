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
    name: "Carnes",
    description: "Deliciosos platos de carnes",
    image: "https://i.imgur.com/3134089.jpg",
    subcategories: [
      {
        id: "1",
        name: "Pollo",
        description: "Deliciosos platos de pollo",
        image: "/muzza.jpeg",
        price: "1",
        quantity: "10",
      },
      {
        id: "2",
        name: "Pescado",
        description: "Deliciosos platos de pescado",
        image: "/muzza.jpeg",
        price: "90",
        quantity: "10",
      },
      {
        id: "3",
        name: "Carne",
        description: "Deliciosos platos de carne",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
    ],
  },
  {
    id: "2",
    name: "Pastas",
    description: "Sabrosas pastas y salsas",
    image: "https://i.imgur.com/2310245.jpg",
    subcategories: [
      {
        id: "1",
        name: "Spaghetti",
        description: "Spaghetti con diversas salsas",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "2",
        name: "Ravioli",
        description: "Ravioli relleno con ricotta y espinacas",
        image: "/muzza.jpeg",
        price: "12",
        quantity: "12",
      },
      {
        id: "3",
        name: "Lasagna",
        description: "Lasagna casera con carne y queso",
        image: "/muzza.jpeg",
        price: "15",
        quantity: "10",
      },
    ],
  },
  // Puedes agregar más categorías aquí según necesites
];

export type { Category, Product };

const menu = JSON.stringify(categories, null, 2);
export { categories, menu };
