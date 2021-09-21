const STORE = [
  {
    id: 1,
    name: "submarine",
    img: "../img/products/rolex.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "299",
    brand: "rolex",
    gender: "men",
    category: "steel",
    on_sale: false,
    best_seller: false,
  },
  {
    id: 2,
    name: "the scovill",
    img: "../img/products/ingersoll-steel.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "299",
    brand: "ingersoll",
    gender: "men",
    category: "steel",

    on_sale: false,
    best_seller: false,
  },
  {
    id: 3,
    name: "valjoux",
    img: "../img/products/arcadia-women.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "899",
    brand: "arcadia",
    gender: "women",
    category: "leather",

    on_sale: false,
    best_seller: true,
  },
  {
    id: 4,
    name: "parah perpetual",
    img: "../img/products/cartier-classic.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "399",
    brand: "cartier",
    gender: "women",
    category: "leather",

    on_sale: true,
    best_seller: false,
  },
  {
    id: 4,
    name: "roadster",
    img: "../img/products/cartier-gold-women.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "299",
    brand: "cartier",
    gender: "women",
    category: "steel",

    on_sale: true,
    best_seller: true,
  },
  {
    id: 5,
    name: "calibre de cartier",
    img: "../img/products/cartier-steel.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "799",
    brand: "arcadia",
    gender: "women",
    category: "steel",

    on_sale: true,
    best_seller: true,
  },
  {
    id: 6,
    name: "CORNAVIN CO.BD.02.L",
    img: "../img/products/cornavin-leather.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "799",
    brand: "cornavin",
    gender: "men",
    category: "leather",

    on_sale: true,
    best_seller: true,
  },
  {
    id: 7,
    name: "hampden black",
    img: "../img/products/hampden-black-steel.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "699",
    brand: "hampden",
    gender: "men",
    category: "steel",

    on_sale: true,
    best_seller: true,
  },
  {
    id: 8,
    name: "THE ORVILLE AUTOMATIC",
    img: "../img/products/ingersoll-steel.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "300",
    brand: "ingersoll",
    gender: "men",
    category: "steel",

    on_sale: true,
    best_seller: true,
  },
  {
    id: 9,
    name: "moto smart watch",
    img: "../img/products/moto.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "299",
    brand: "moto",
    gender: "unisex",
    category: "smart-watch",

    on_sale: true,
    best_seller: true,
  },
  {
    id: 10,
    name: "Mechanical Classic, Leather",
    img: "../img/products/orient-classic.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "500",
    brand: "orient",
    gender: "men",
    category: "leather",

    on_sale: false,
    best_seller: true,
  },
  {
    id: 11,
    name: "Mechanical Classic, Leather",
    img: "../img/products/orient-leather.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "600",
    brand: "orient",
    gender: "men",
    category: "leather",

    on_sale: false,
    best_seller: false,
  },
  {
    id: 11,
    name: "Mechanical Classic, Leather strap",
    img: "../img/products/orient-classic.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "500",
    brand: "orient",
    gender: "men",
    category: "leather",

    on_sale: false,
    best_seller: true,
  },
  {
    id: 12,
    name: "big crown",
    img: "../img/products/oris-classic.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "350",
    brand: "oris",
    gender: "women",
    category: "leather",

    on_sale: false,
    best_seller: false,
  },
  {
    id: 13,
    name: "Mechanical Classic, Leather strap",
    img: "../img/products/rolex.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "870",
    brand: "rolex",
    gender: "men",
    category: "steel",

    on_sale: false,
    best_seller: true,
  },
  {
    id: 14,
    name: "samsung smart watch",
    img: "../img/products/samsung-smart-watch.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "200",
    brand: "samsung",
    gender: "unisex",
    category: "smart-watch",

    on_sale: false,
    best_seller: true,
  },
  {
    id: 15,
    name: "seiko gold",
    img: "../img/products/seiko-gold.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "470",
    brand: "seiko",
    gender: "men",
    category: "steel",

    on_sale: false,
    best_seller: false,
  },
  {
    id: 14,
    name: "Mechanical Classic, Leather strap",
    img: "../img/products/seiko-steel.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "800",
    brand: "rolex",
    gender: "men",
    category: "steel",

    on_sale: false,
    best_seller: false,
  },
  {
    id: 15,
    name: "astron",
    img: "../img/products/seiko-steel.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "800",
    brand: "rolex",
    gender: "men",
    category: "steel",

    on_sale: false,
    best_seller: false,
  },
  {
    id: 15,
    name: "sony smart watch",
    img: "../img/products/sony-smart-watch.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: "250",
    brand: "sony",
    gender: "unisex",
    category: "smart-watch",

    on_sale: false,
    best_seller: false,
  },
];
