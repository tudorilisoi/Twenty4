const STORE = [
  {
    id: 1,
    name: "submarine",
    img_src: "./src/img/products/arcadia-women.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuies but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "299",
    brand: "rolex",
    gender: "men",
    category: "steel",
    on_sale: false,
    best_seller: true,
    stock: 10,
  },
  {
    id: 2,
    name: "the scovill",
    img_src: "./src/img/products/cartier-classic.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 299,
    brand: "ingersoll",
    gender: "men",
    category: "steel",

    on_sale: false,
    best_seller: true,
    stock: 10,
  },
  {
    id: 3,
    name: "valjoux",
    img_src: "./src/img/products/arcadia-women.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 899,
    brand: "arcadia",
    gender: "women",
    category: "leather",

    on_sale: false,
    best_seller: true,
    stock: 10,
  },
  {
    id: 4,
    name: "parah perpetual",
    img_src: "./src/img/products/cartier-classic.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 399,
    brand: "cartier",
    gender: "women",
    category: "leather",

    on_sale: true,
    best_seller: false,
    stock: 15,
  },
  {
    id: 5,
    name: "roadster",
    img_src: "./src/img/products/cartier-gold-women.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 299,
    brand: "cartier",
    gender: "women",
    category: "steel",

    on_sale: true,
    best_seller: true,
    stock: 10,
  },
  {
    id: 6,
    name: "calibre de cartier",
    img_src: "./src/img/products/cartier-steel.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 799,
    brand: "arcadia",
    gender: "women",
    category: "steel",

    on_sale: true,
    best_seller: false,
    stock: 15,
  },
  {
    id: 7,
    name: "CORNAVIN CO.BD.02.L",
    img_src: "./src/img/products/cornavin-leather.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 799,
    brand: "cornavin",
    gender: "men",
    category: "leather",

    on_sale: true,
    best_seller: false,
    stock: 0,
  },
  {
    id: 8,
    name: "hampden black",
    img_src: "./src/img/products/hampden-black-steel.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 699,
    brand: "hampden",
    gender: "men",
    category: "steel",

    on_sale: true,
    best_seller: false,
    stock: 0,
  },
  {
    id: 9,
    name: "THE ORVILLE AUTOMATIC",
    img_src: "./src/img/products/ingersoll-steel.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 300,
    brand: "ingersoll",
    gender: "men",
    category: "steel",

    on_sale: true,
    best_seller: false,
    stock: 15,
  },
  {
    id: 10,
    name: "moto smart watch",
    img_src: "./src/img/products/moto.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 299,
    brand: "moto",
    gender: "unisex",
    category: "smart-watch",

    on_sale: true,
    best_seller: true,
    stock: 10,
  },
  {
    id: 11,
    name: "Mechanical Classic, Leather",
    img_src: "./src/img/products/orient-classic.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 500,
    brand: "orient",
    gender: "men",
    category: "leather",

    on_sale: false,
    best_seller: true,
    stock: 0,
  },
  {
    id: 12,
    name: "Mechanical Classic, Leather",
    img_src: "./src/img/products/orient-leather.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 600,
    brand: "orient",
    gender: "men",
    category: "leather",

    on_sale: false,
    best_seller: true,
    stock: 10,
  },
  {
    id: 13,
    name: "big crown",
    img_src: "./src/img/products/oris-classic.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 350,
    brand: "oris",
    gender: "women",
    category: "leather",

    on_sale: false,
    best_seller: true,
    stock: 10,
  },
  {
    id: 15,
    name: "samsung smart watch",
    img_src: "./src/img/products/samsung-smart-watch.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 200,
    brand: "samsung",
    gender: "unisex",
    category: "smart-watch",

    on_sale: true,
    best_seller: false,
    stock: 15,
  },
  {
    id: 16,
    name: "seiko gold",
    img_src: "./src/img/products/seiko-gold.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 470,
    brand: "seiko",
    gender: "men",
    category: "steel",

    on_sale: true,
    best_seller: false,
    stock: 15,
  },
  {
    id: 17,
    name: "seiko steel",
    img_src: "./src/img/products/seiko-steel.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 800,
    brand: "rolex",
    gender: "men",
    category: "steel",

    on_sale: false,
    best_seller: true,
    stock: 10,
  },
];

export default STORE;
