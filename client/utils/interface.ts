export interface BannerType {
  // _id: string;
  // createdAt: string;
  // updatedAt: string;
  // subtitle: string;
  // url: string;
  title: string;
  description: string;
  src: string;
  href: string;
}

export interface TestimonialType {
  title: string;
  description: string;
  author: string;
  image: string;
}

export interface BuilderType {
  title: string;
  helpertext: string;
  desc: string;
  logo: string;
  image: string;
  vision: string;
  features: {
    text: string;
    helpertext: string;
  }[];
  location: string;
  projects: ProjectType[];
  testimonials: TestimonialType[];
}

export interface FaqType {
  title: string;
  content: string;
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
  image: string;
}
export interface GalleryType {
  title: string;
  desc: string;
  src: string;
}
export interface ProjectType {
  title: string;
  imageGallery: GalleryType[];
  price: string;
  description: string;
  features: FeatureType[];
  pricing: PricingType[];
  masterPlan: PlanType;
  plans: PlanType[];
  location: string;
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
