interface LinkItem {
  title: string;
  href: string;
}

interface LinkCategory {
  title: string;
  items: LinkItem[];
}

export const links: LinkCategory[] = [
  {
    title: "Quick links",
    items: [
      { title: "Home", href: "/" },
      { title: "Projects", href: "/property" },
      { title: "EMI Calculator", href: "/#emi-calculator" },
      { title: "Blogs", href: "/blogs" },
      { title: "Connect us", href: "/contact" },
    ],
  },
];
