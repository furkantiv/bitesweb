export interface Category {
  name: string;
  slug: string;
  image: string;
  items: SubCategoryItem[];
}
export interface SubCategoryItem {
  name: string;
  image: string;
  slug: string; // for navigation
  items: Products[];
}
export interface Products {
  name: string;
  slug: string;
  image: string;
}
