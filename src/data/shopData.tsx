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
        name: "Pizza Cuatro Quesos Grande",
        description: "una descripción corta",
        image: "/cuatro.jpg",
        price: "19000",
        quantity: "15",
      },
      {
        id: "2",
        name: "Pizza A la cancha Grande",
        description: "una descripción corta",
        image: "/JamonYmorrones.jpg",
        price: "9000",
        quantity: "15",
      },
      {
        id: "3",
        name: "Pizza Americana Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "13000",
        quantity: "15",
      },
      {
        id: "4",
        name: "Pizza Americana con Jamón Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "14000",
        quantity: "15",
      },
      {
        id: "5",
        name: "Pizza Anana Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "22000",
        quantity: "15",
      },

      {
        id: "6",
        name: "Pizza Anchoa Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "9800",
        quantity: "15",
      },
      {
        id: "7",
        name: "Pizza Calabreza Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "17000",
        quantity: "15",
      },
      {
        id: "8",
        name: "Pizza Especial Palmitos Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "21000",
        quantity: "15",
      },
      {
        id: "9",
        name: "Pizza Fugazzeta rellena con Queso Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "17000",
        quantity: "15",
      },
      {
        id: "10",
        name: "Pizza Fugazzeta rellena con Jamón y Queso Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "12",
      },
      {
        id: "11",
        name: "Pizza Fugazza Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "9500",
        quantity: "10",
      },
      {
        id: "12",
        name: "Pizza Jamón y Morrón Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "16000",
        quantity: "15",
      },
      {
        id: "13",
        name: "Pizza La Scalonetta Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "20000",
        quantity: "15",
      },

      {
        id: "14",
        name: "Pizza Muzza con Jamón y Huevo Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "14800",
        quantity: "15",
      },
      {
        id: "14",
        name: "Pizza Muzza con MorrónGrande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "15000",
        quantity: "15",
      },
      {
        id: "14",
        name: "Pizza Muzza con Anchoa Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "12000",
        quantity: "15",
      },
      {
        id: "15",
        name: "Pizza Muzza con Jamón Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "14000",
        quantity: "15",
      },
      {
        id: "16",
        name: "Pizza Muzza sin Salsa Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "10000",
        quantity: "15",
      },
      {
        id: "17",
        name: "Pizza Muzzarella Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "10000",
        quantity: "15",
      },
      {
        id: "18",
        name: "Pizza Napolitana Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "14000",
        quantity: "15",
      },
      {
        id: "19",
        name: "Pizza Napolitana con Jamón Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "15000",
        price_small: "19000",
        quantity: "15",
      },
      {
        id: "20",
        name: "Pizza Provolone Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "18000",
        quantity: "15",
      },
      {
        id: "21",
        name: "Pizza Provolone con Jamón Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "15",
      },
      {
        id: "22",
        name: "Pizza Roquefort Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "17000",
        quantity: "10",
      },
      {
        id: "23",
        name: "Pizza Verdura Grande",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "14000",
        quantity: "10",
      },
      {
        id: "24",
        name: "Pizza Cuatro Quesos Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "15",
      },
      {
        id: "25",
        name: "Pizza A la Cancha Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "15",
      },
      {
        id: "26",
        name: "Pizza Americana Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "15",
      },
      {
        id: "27",
        name: "Pizza Americana con Jamón Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "15",
      },
      {
        id: "28",
        name: "Pizza Anana Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "15",
      },

      {
        id: "29",
        name: "Pizza Anchoa Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "15",
      },
      {
        id: "30",
        name: "Pizza Calabreza Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "15",
      },
      {
        id: "31",
        name: "Pizza Especial Palmitos Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "15",
      },
      {
        id: "32",
        name: "Pizza Fugazzeta rellena con Queso Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "15",
      },
      {
        id: "33",
        name: "Pizza Fugazzeta rellena con Jamón y Queso Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "12",
      },
      {
        id: "34",
        name: "Pizza Fugazza Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "9500",
        quantity: "10",
      },
      {
        id: "35",
        name: "Pizza Jamón y Morrón Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "16000",
        quantity: "15",
      },
      {
        id: "36",
        name: "Pizza La Scalonetta Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "20000",
        price_small: "19000",
        quantity: "15",
      },

      {
        id: "37",
        name: "Pizza Muzza con Jamón y Huevo Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "14800",
        quantity: "15",
      },
      {
        id: "38",
        name: "Pizza Muzza con Morrón Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "15000",
        quantity: "15",
      },
      {
        id: "39",
        name: "Pizza Muzza con Anchoa Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "12000",
        quantity: "15",
      },
      {
        id: "40",
        name: "Pizza Muzza con Jamón Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "14000",
        quantity: "15",
      },
      {
        id: "41",
        name: "Pizza Muzza sin Salsa Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "10000",
        quantity: "15",
      },
      {
        id: "42",
        name: "Pizza Muzzarella Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "10000",
        quantity: "15",
      },
      {
        id: "43",
        name: "Pizza Napolitana Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "14000",
        quantity: "15",
      },
      {
        id: "44",
        name: "Pizza Napolitana con Jamón Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "15000",
        quantity: "15",
      },
      {
        id: "45",
        name: "Pizza Provolone Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "18000",
        quantity: "15",
      },
      {
        id: "46",
        name: "Pizza Provolone con Jamón Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "19000",
        quantity: "15",
      },
      {
        id: "47",
        name: "Pizza Roquefort Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "17000",
        quantity: "10",
      },
      {
        id: "48",
        name: "Pizza Verdura Chica",
        description: "una descripción corta",
        image: "/pizzeriaAldo.png",
        price: "14000",
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
        id: "0",
        name: "Docena Empanadas",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "12000",
        quantity: "15",
      },
      {
        id: "1",
        name: "Empanada Capresse",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "1300",
        quantity: "15",
      },
      {
        id: "2",
        name: "Empanada de Carne",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "1300",
        quantity: "12",
      },
      {
        id: "3",
        name: "Empanada de Pollo",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "1300",
        quantity: "12",
      },
      {
        id: "4",
        name: "Empanada de Verdura",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "1300",
        quantity: "12",
      },
      {
        id: "5",
        name: "Empanada J y Q",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "1300",
        quantity: "12",
      },
      {
        id: "6",
        name: "Empanada de Pollo",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "1300",
        quantity: "10",
      },
      {
        id: "7",
        name: "Empanada de Roquefort",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "1300",
        quantity: "12",
      },
    ],
  },
  {
    id: "4",
    name: "Calzón",
    description: "",
    image: "https://i.imgur.com/3134089.jpg",
    subcategories: [
      {
        id: "1",
        name: "Calzón Roquefort",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "15000",
        quantity: "10",
      },
      {
        id: "2",
        name: "Calzón Jamón-Queso-Roque",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "17000",
        quantity: "10",
      },
      {
        id: "3",
        name: "Calzón Jamón-Queso-Tomate-Huevo",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "14000",
        quantity: "20",
      },
      {
        id: "4",
        name: "Calzón Jamón-Queso",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "13000",
        quantity: "20",
      },

      {
        id: "5",
        name: "Calzón Napolitano",
        description: "",
        image: "/pizzeriaAldo.png",
        price: "13000",
        quantity: "20",
      },
    ],
  },
];

const shop = {
  name: "PIZZERIA ALDO",
  address: "Av.Mitre 6412, Wilde, Bs As.",
  phone: "11-65550438",
  timezone: "De martes a domingos de 19hs a 23hs.",
  categories: categories,
};

export { shop };
export type { CartItem, Category, Product, Shop };
