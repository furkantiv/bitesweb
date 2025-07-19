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

export type LocalizedString = { en: string; tr: string };
export type LocalizedStringArray = { en: string[]; tr: string[] };
export type LocalizedStringArrayT<T = any> = { [lang: string]: T };

// SECTION TYPES

export interface FeatureSectionData {
  type: "feature";
  image: string;
  heading: LocalizedString;
  content: LocalizedString;
  extra?: LocalizedString;
}
export interface BannerSectionData {
  type: "banner";
  image: string;
}
export interface ImageSectionData {
  type: "image";
  image: string;
}
export interface SplitSectionData {
  type: "split";
  image: string;
  title: LocalizedString;
  heading: LocalizedString;
  features: LocalizedStringArray;
}
export interface SliderSectionData {
  type: "slider";
  slides: {
    title: LocalizedString;
    image: string;
    features: LocalizedStringArray;
  }[];
}
export interface GridSectionData {
  type: "grid";
  image: string;
  heading: LocalizedString;
  subheading?: LocalizedString;
  features: LocalizedStringArray;
}
export interface ReverseGridSectionData {
  type: "reverseGrid";
  image: string;
  heading: LocalizedString;
  subheading?: LocalizedString;
  features: LocalizedStringArray;
}
export interface InfoGridCategory {
  title: string;
  items: string[];
}
export interface InfoGridSectionData {
  type: "infoGrid";
  image?: string;
  features?: LocalizedString;
  heading: LocalizedString;
  columns: LocalizedStringArrayT<InfoGridCategory[]>;
}

export interface TableDataSection {
  type: "tableData";
  heading?: LocalizedString;
  columns: { title: LocalizedString; dataKey: string }[];
  data: { [key: string]: string }[];
}

export interface TableListSectionData {
  type: "tableList";
  heading?: LocalizedString;
  columns: { title: LocalizedString; dataKey: string }[];
  data: { [key: string]: string }[];
  listItems: LocalizedStringArray;
}
export interface TableSectionData {
  type: "table";
  image: string;
  heading?: LocalizedString;
  columns: { title: LocalizedString; dataKey: string }[];
  data: { [key: string]: LocalizedString }[]; // DEĞİŞTİ!
}

export interface GridTextSectionData {
  type: "gridText";
  heading?: string;
  product?: string;
  texts: LocalizedStringArray;
}

// --- UNION ---
export type ProductSection =
  | FeatureSectionData
  | BannerSectionData
  | GridSectionData
  | SplitSectionData
  | SliderSectionData
  | InfoGridSectionData
  | ReverseGridSectionData
  | ImageSectionData
  | TableDataSection
  | TableListSectionData
  | TableSectionData
  | GridTextSectionData;

export interface ProductContent {
  title: LocalizedString;
  description: LocalizedString;
  videoUrl?: string;
  heroImageUrl?: string;
  sections: ProductSection[];
}
