// lib/dummy-products.ts

import type { Billboard, Category, Color, Image, Product, Size } from "@/types";

/* ---------------------------------- */
/* COLORS */
/* ---------------------------------- */

export const colorsData: Color[] = [
  {
    id: "color-black",
    name: "Black",
    value: "#000000",
  },
  {
    id: "color-white",
    name: "White",
    value: "#FFFFFF",
  },
  {
    id: "color-red",
    name: "Red",
    value: "#EF4444",
  },
  {
    id: "color-blue",
    name: "Blue",
    value: "#3B82F6",
  },
  {
    id: "color-green",
    name: "Green",
    value: "#22C55E",
  },
  {
    id: "color-yellow",
    name: "Yellow",
    value: "#EAB308",
  },
];

/* ---------------------------------- */
/* SIZES */
/* ---------------------------------- */

export const sizesData: Size[] = [
  {
    id: "size-xs",
    name: "Extra Small",
    value: "XS",
  },
  {
    id: "size-sm",
    name: "Small",
    value: "S",
  },
  {
    id: "size-md",
    name: "Medium",
    value: "M",
  },
  {
    id: "size-lg",
    name: "Large",
    value: "L",
  },
  {
    id: "size-xl",
    name: "Extra Large",
    value: "XL",
  },
];

/* ---------------------------------- */
/* billboardsData */
/* ---------------------------------- */

export const billboardsData: Billboard[] = [
  {
    id: "billboard-fashion",
    label: "Summer Fashion Collection",
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    id: "billboard-shoes",
    label: "Sneaker Drops",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: "billboard-accessories",
    label: "Modern Accessories",
    imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  },
];

/* ---------------------------------- */
/* CATEGORIES */
/* ---------------------------------- */

export const categoriesData: Category[] = [
  {
    id: "category-shirts",
    name: "Shirts",
    billboard: billboardsData[0],
  },
  {
    id: "category-shoes",
    name: "Shoes",
    billboard: billboardsData[1],
  },
  {
    id: "category-accessories",
    name: "Accessories",
    billboard: billboardsData[2],
  },
];

/* ---------------------------------- */
/* IMAGES */
/* ---------------------------------- */

const images = {
  shirt1: [
    {
      id: "img-shirt-1",
      url: "https://images.pexels.com/photos/9558724/pexels-photo-9558724.jpeg",
    },
    {
      id: "img-shirt-1",
      url: "https://images.pexels.com/photos/9558264/pexels-photo-9558264.jpeg",
    },
    {
      id: "img-shirt-1",
      url: "https://images.pexels.com/photos/9558713/pexels-photo-9558713.jpeg",
    },
  ],

  shirt2: [
    {
      id: "img-shirt-2",
      url: "https://images.pexels.com/photos/9558577/pexels-photo-9558577.jpeg",
    },
    {
      id: "img-shirt-2",
      url: "https://images.pexels.com/photos/9558233/pexels-photo-9558233.jpeg",
    },
    {
      id: "img-shirt-2",
      url: "https://images.pexels.com/photos/9558909/pexels-photo-9558909.jpeg",
    },
  ],

  shoe1: [
    {
      id: "img-shoe-1",
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ],

  shoe2: [
    {
      id: "img-shoe-2",
      url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    },
  ],

  accessory1: [
    {
      id: "img-accessory-1",
      url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    },
  ],

  accessory2: [
    {
      id: "img-accessory-2",
      url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
  ],

  hoodie1: [
    {
      id: "img-hoodie-1",
      url: "https://images.pexels.com/photos/9558229/pexels-photo-9558229.jpeg",
    },
    {
      id: "img-hoodie-1",
      url: "https://images.pexels.com/photos/9558897/pexels-photo-9558897.jpeg",
    },
  ],

  hoodie2: [
    {
      id: "img-hoodie-2",
      url: "https://images.pexels.com/photos/8217286/pexels-photo-8217286.jpeg",
    },
    {
      id: "img-hoodie-2",
      url: "https://images.pexels.com/photos/8217408/pexels-photo-8217408.jpeg",
    },
  ],
};

/* ---------------------------------- */
/* PRODUCTS */
/* ---------------------------------- */

export const productsData: Product[] = [
  {
    id: "product-1",
    name: "Classic White Tee",
    price: "29.99",
    isFeatured: true,
    category: categoriesData[0],
    size: sizesData[2],
    color: colorsData[0],
    images: images.shirt1,
  },

  {
    id: "product-2",
    name: "Oversized Black T-Shirt",
    price: "34.99",
    isFeatured: false,
    category: categoriesData[0],
    size: sizesData[3],
    color: colorsData[1],
    images: images.shirt2,
  },

  {
    id: "product-3",
    name: "Urban Runner Sneakers",
    price: "129.99",
    isFeatured: true,
    category: categoriesData[1],
    size: sizesData[4],
    color: colorsData[3],
    images: images.shoe1,
  },

  {
    id: "product-4",
    name: "Retro Street Shoes",
    price: "109.99",
    isFeatured: false,
    category: categoriesData[1],
    size: sizesData[3],
    color: colorsData[0],
    images: images.shoe2,
  },

  {
    id: "product-5",
    name: "Minimal Leather Watch",
    price: "199.99",
    isFeatured: true,
    category: categoriesData[2],
    size: sizesData[2],
    color: colorsData[0],
    images: images.accessory1,
  },

  {
    id: "product-6",
    name: "Modern Sunglasses",
    price: "89.99",
    isFeatured: false,
    category: categoriesData[2],
    size: sizesData[1],
    color: colorsData[1],
    images: images.accessory2,
  },
  {
    id: "product-7",
    name: "Vintage Green Hoodie",
    price: "79.99",
    isFeatured: true,
    category: categoriesData[0],
    size: sizesData[4],
    color: colorsData[4],
    images: images.hoodie2,
  },
  {
    id: "product-8",
    name: "White Hoodie",
    price: "24.99",
    isFeatured: false,
    category: categoriesData[0],
    size: sizesData[0],
    color: colorsData[1],
    images: images.hoodie1,
  },

  {
    id: "product-9",
    name: "Performance Trainers",
    price: "149.99",
    isFeatured: true,
    category: categoriesData[1],
    size: sizesData[2],
    color: colorsData[5],
    images: images.shoe1,
  },

  {
    id: "product-10",
    name: "Sport Chronograph Watch",
    price: "249.99",
    isFeatured: false,
    category: categoriesData[2],
    size: sizesData[3],
    color: colorsData[0],
    images: images.accessory1,
  },

  {
    id: "product-11",
    name: "Canvas Everyday Sneakers",
    price: "94.99",
    isFeatured: true,
    category: categoriesData[1],
    size: sizesData[1],
    color: colorsData[1],
    images: images.shoe2,
  },

  {
    id: "product-12",
    name: "Luxury Gold Sunglasses",
    price: "179.99",
    isFeatured: true,
    category: categoriesData[2],
    size: sizesData[2],
    color: colorsData[5],
    images: images.accessory2,
  },
];
