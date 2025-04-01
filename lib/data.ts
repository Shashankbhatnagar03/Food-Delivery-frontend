import type { Category, MenuItem } from "./types";

export const categories: Category[] = [
  {
    id: "burgers",
    name: "Burgers",
    image: "/images/burger.jpg",
  },
  {
    id: "pizzas",
    name: "Pizzas",
    image: "/images/pizza.jpg",
  },
  {
    id: "salads",
    name: "Salads",
    image: "/images/salad.jpg",
  },
  {
    id: "drinks",
    name: "Drinks",
    image: "/images/drink.jpg",
  },
  {
    id: "desserts",
    name: "Desserts",
    image: "/images/cake.jpg",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "classic-burger",
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    price: 8.99,
    image: "/images/burger.jpg",
    categoryId: "burgers",
    featured: true,
  },
  {
    id: "cheese-burger",
    name: "Cheese Burger",
    description: "Classic burger with melted cheddar cheese",
    price: 9.99,
    image: "/images/burger.jpg",
    categoryId: "burgers",
    featured: true,
  },
  {
    id: "veggie-burger",
    name: "Veggie Burger",
    description: "Plant-based patty with fresh vegetables",
    price: 7.99,
    image: "/images/burger.jpg",
    categoryId: "burgers",
    featured: false,
  },
  {
    id: "margherita",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    image: "/images/pizza.jpg",
    categoryId: "pizzas",
    featured: true,
  },
  {
    id: "pepperoni",
    name: "Pepperoni Pizza",
    description: "Pizza topped with pepperoni and cheese",
    price: 14.99,
    image: "/images/pizza.jpg",
    categoryId: "pizzas",
    featured: true,
  },
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with Caesar dressing and croutons",
    price: 6.99,
    image: "/images/salad.jpg",
    categoryId: "salads",
    featured: false,
  },
  {
    id: "greek-salad",
    name: "Greek Salad",
    description: "Tomatoes, cucumbers, olives, and feta cheese",
    price: 7.99,
    image: "/images/salad.jpg",
    categoryId: "salads",
    featured: false,
  },
  {
    id: "cola",
    name: "Cola",
    description: "Refreshing cola drink",
    price: 1.99,
    image: "/images/drink.jpg",
    categoryId: "drinks",
    featured: false,
  },
  {
    id: "lemonade",
    name: "Lemonade",
    description: "Fresh squeezed lemonade",
    price: 2.99,
    image: "/images/drink.jpg",
    categoryId: "drinks",
    featured: false,
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    description: "Rich chocolate cake with frosting",
    price: 5.99,
    image: "/images/cake.jpg",
    categoryId: "desserts",
    featured: true,
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    description: "Creamy New York style cheesecake",
    price: 6.99,
    image: "/images/cake.jpg",
    categoryId: "desserts",
    featured: false,
  },
];

export const getFeaturedItems = (): MenuItem[] => {
  return menuItems.filter((item) => item.featured);
};

export const getItemsByCategory = (categoryId: string): MenuItem[] => {
  return menuItems.filter((item) => item.categoryId === categoryId);
};

export const getItemById = (id: string): MenuItem | undefined => {
  return menuItems.find((item) => item.id === id);
};
