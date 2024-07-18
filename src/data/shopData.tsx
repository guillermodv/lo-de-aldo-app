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
  price_small?: string;
  quantity: string;
};

type CartItem = {
  id: string;
  product: Product;
  quantity: number;
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
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "19000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "2",
        name: "A la cancha",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "9000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "3",
        name: "Americana",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "13000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "4",
        name: "Americana con Jamon",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "14000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "5",
        name: "Anana",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "22000",
        price_small: "19000",
        quantity: "15",
      },

      {
        id: "6",
        name: "Anchoa",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "9800",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "7",
        name: "Calabreza",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "17000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "8",
        name: "Especial Palmitos",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "21000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "9",
        name: "Fugazzeta rellena con Queso",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "17000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "10",
        name: "Fugazzeta rellena con Jamon y Queso",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "19000",
        price_small: "19000",
        quantity: "12",
      },
      {
        id: "11",
        name: "Fugazza",
        description: "una descripcion corta",
        image: "/muzzarella.jpeg",
        price: "9500",
        price_small: "19000",
        quantity: "10",
      },
      {
        id: "12",
        name: "Jamon y Morron",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "16000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "13",
        name: "La Scalonetta",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "20000",
        price_small: "19000",
        quantity: "15",
      },

      {
        id: "14",
        name: "Muzza con Jamon y Huevo",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "14800",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "14",
        name: "Muzza con Morron",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "15000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "14",
        name: "Muzza con Anchoa",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "12000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "15",
        name: "Muzza con Jamon",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "14000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "16",
        name: "Muzza sin Salsa",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "10000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "17",
        name: "Muzzarella",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "10000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "18",
        name: "Napolitana",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "14000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "19",
        name: "Napolitana con Jamon",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "15000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "20",
        name: "Provolone",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "18000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "21",
        name: "Provolone con Jamon",
        description: "una descripcion corta",
        image: "/muzza.jpeg",
        price: "19000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "22",
        name: "Roquefort",
        description: "una descripcion corta",
        image: "/muzzarella.jpeg",
        price: "17000",
        price_small: "19000",
        quantity: "10",
      },
      {
        id: "23",
        name: "Verdura",
        description: "una descripcion corta",
        image: "/muzzarella.jpeg",
        price: "14000",
        price_small: "19000",
        quantity: "10",
      },
    ],
  },
  {
    id: "2",
    name: "Empanada",
    description: "Precio por docena 15600$",
    image: "https://i.imgur.com/2310245.jpg",
    subcategories: [
      {
        id: "1",
        name: "Capresse",
        description: "",
        image: "/muzza.jpeg",
        price: "1300",
        quantity: "15",
      },
      {
        id: "2",
        name: "Carne",
        description: "",
        image: "/muzza.jpeg",
        price: "1300",
        quantity: "12",
      },
      {
        id: "3",
        name: "Pollo",
        description: "",
        image: "/muzza.jpeg",
        price: "1300",
        quantity: "12",
      },
      {
        id: "4",
        name: "Verdura",
        description: "",
        image: "/muzza.jpeg",
        price: "1300",
        quantity: "12",
      },
      {
        id: "5",
        name: "Jamon y queso",
        description: "",
        image: "/muzza.jpeg",
        price: "1300",
        quantity: "12",
      },
      {
        id: "6",
        name: "Pollo",
        description: "",
        image: "/muzza.jpeg",
        price: "1300",
        quantity: "10",
      },
      {
        id: "7",
        name: "Roquefort",
        description: "",
        image: "/muzza.jpeg",
        price: "1300",
        quantity: "12",
      },
    ],
  },
  {
    id: "4",
    name: "Calzon",
    description: "",
    image: "https://i.imgur.com/3134089.jpg",
    subcategories: [
      {
        id: "1",
        name: "Roquefort",
        description: "",
        image: "/muzza.jpeg",
        price: "15000",
        quantity: "10",
      },
      {
        id: "2",
        name: "Jamon-Queso-Roque",
        description: "",
        image: "/muzza.jpeg",
        price: "17000",
        quantity: "10",
      },
      {
        id: "3",
        name: "Jamon-Queso-Tomate-Huevo",
        description: "",
        image: "/muzza.jpeg",
        price: "14000",
        quantity: "20",
      },
      {
        id: "4",
        name: "Jamon-Queso",
        description: "",
        image: "/muzza.jpeg",
        price: "13000",
        quantity: "20",
      },

      {
        id: "5",
        name: "Napolitano",
        description: "",
        image: "/muzza.jpeg",
        price: "13000",
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
export type { CartItem, Category, Product, Shop };
