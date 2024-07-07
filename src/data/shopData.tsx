type Shop = {
  name: string;
  address: string;
  phone: string;
  categories: Category[];
};

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

/**
 * An array of `Category` objects representing the categories and subcategories of products available in the application.
 */
const categories: Category[] = [
  {
    id: "1",
    name: "Pizza",
    description: "Amplia variedad en pizzas a la piedra",
    image: "https://i.imgur.com/2310245.jpg",
    subcategories: [
      {
        id: "1",
        name: "Cuatro Quesos",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "2",
        name: "A la cancha",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "3",
        name: "Americana",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "4",
        name: "Americana con Jamon",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "5",
        name: "Anana",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },

      {
        id: "6",
        name: "Anchoa",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "7",
        name: "Calabreza",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "8",
        name: "Especial Palmitos",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "9",
        name: "Fugazzeta rellena con Jamon",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "10",
        name: "Fugazzeta rellena con Jamon y Queso",
        description: "",
        image: "/muzza.jpeg",
        price: "24",
        quantity: "12",
      },
      {
        id: "11",
        name: "Fugazza",
        description: "",
        image: "/muzzarella.jpeg",
        price: "15",
        quantity: "10",
      },
      {
        id: "12",
        name: "Jamon y Morron",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "13",
        name: "La Scalonetta",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },

      {
        id: "14",
        name: "Muzza con Jamon y Huevo",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "14",
        name: "Muzza con Morron",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "14",
        name: "Muzza con Anchoa",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "15",
        name: "Muzzarella",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "16",
        name: "Napolitana",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "17",
        name: "Napolitana con Jamon",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "18",
        name: "Provolone",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "19",
        name: "Provolone con Jamon",
        description: "",
        image: "/muzza.jpeg",
        price: "8",
        quantity: "15",
      },
      {
        id: "21",
        name: "Roquefort",
        description: "",
        image: "/muzzarella.jpeg",
        price: "15",
        quantity: "10",
      },
      {
        id: "21",
        name: "Verdura",
        description: "",
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
        description: "",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "15",
      },
      {
        id: "2",
        name: "Carne",
        description: "",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "12",
      },
      {
        id: "3",
        name: "Pollo",
        description: "",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "12",
      },
      {
        id: "4",
        name: "Verdura",
        description: "",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "12",
      },
      {
        id: "5",
        name: "Jamon y queso",
        description: "",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "12",
      },
      {
        id: "6",
        name: "Pollo",
        description: "",
        image: "/muzza.jpeg",
        price: "1000",
        quantity: "10",
      },
      {
        id: "7",
        name: "Roquefort",
        description: "",
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
        description: "",
        image: "/muzza.jpeg",
        price: "1",
        quantity: "10",
      },
      {
        id: "2",
        name: "Tarta de verdura",
        description: "",
        image: "/muzza.jpeg",
        price: "90",
        quantity: "10",
      },
      {
        id: "3",
        name: "Tarta de Jamon y queso",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "4",
        name: "Tarta de Zapallito",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },

      {
        id: "5",
        name: "Fugazzeta con queso",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "6",
        name: "Fugazzeta Jamon y Queso",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "6",
        name: "Faina",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "6",
        name: "Muzza",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "7",
        name: "Verdura",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "8",
        name: "Americana",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "9",
        name: "Fugazza",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "10",
        name: "Provologne",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "11",
        name: "Napolitana",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "12",
        name: "Cuatro Quesos",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "13",
        name: "Calabreza",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
      {
        id: "14",
        name: "Calzones",
        description: "",
        image: "/muzza.jpeg",
        price: "10",
        quantity: "20",
      },
    ],
  },
];

const shop = {
  name: "PIZZERIA ALDO",
  address: "Av.Mitre 6412, Wilde, Bs As.",
  phone: "5491165550438",
  timezone: "De martes a domingos de 19hs a 23hs.",
  categories: categories,
};

export { shop };
export type { Category, Product, Shop };
