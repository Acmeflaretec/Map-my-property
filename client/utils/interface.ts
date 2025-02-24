export interface BannerType {
  // _id: string;
  // createdAt: string;
  // updatedAt: string;
  // subtitle: string;
  // url: string;
  title: string;
  description: string;
  src: string;
  url: string;
}

export interface TestimonialType {
  name: string;
  rating: string;
  review: string;
  image: string;
}

export interface BuilderType {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  image: string;
  vision: string;
  features: {
    text: string;
    helpertext: string;
  }[];
  location: string;
  url: string;
  projects: ProjectType[];
  testimonials: TestimonialType[];
}

export interface FaqType {
  questions: string;
  answer: string;
}
export interface FeatureItem {
  text: string;
  helpertext: string;
  icon: string;
}
export interface FeatureType {
  title: string;
  items: FeatureItem[];
}
export interface PricingType {
  unit: string;
  area: string;
  price: string;
}
export interface PlanType {
  title: string;
  desc: string;
  src: string;
}
export interface GalleryType {
  title: string;
  desc: string;
  src: string;
}
export interface ProjectType {
  _id: string;
  title: string;
  subtitle: string;
  imageGallery: GalleryType[];
  minPrice: number;
  maxPrice: number;
  status: string;
  description: string;
  features: FeatureType[];
  accommodation: PricingType[];
  masterPlan: PlanType;
  plans: PlanType[];
  location: string;
  areas: number[];
  bedrooms: string[];
  builder: BuilderType;
  href: string;
  faqs: FaqType[];
  expertOpinions: string[];
  testimonials: TestimonialType[];
}

export interface SectionType {
  title: string;
  projects: ProjectType[];
}

export interface BlogType {
  _id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
  type: string;
}
