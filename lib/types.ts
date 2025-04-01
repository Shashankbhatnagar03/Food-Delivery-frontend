export type Category = {
  id: string;
  name: string;
  image: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  featured: boolean;
};
