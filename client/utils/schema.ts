export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Map My Property",
    url: "https://www.mapmyproperty.in",
    logo: "https://www.mapmyproperty.in/logo.png",
    description: "Find your perfect property with Map My Property - Your trusted partner in real estate.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Your City",
      addressRegion: "Your State",
      postalCode: "Your Postal Code",
      addressCountry: "IN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "Your Phone Number",
      contactType: "customer service"
    }
  };
};

export const generatePropertySchema = (property: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    url: `https://www.mapmyproperty.in/property/${property.href}`,
    image: property.imageGallery?.[0]?.src || "",
    price: {
      "@type": "PriceSpecification",
      price: property.minPrice,
      priceCurrency: "INR"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
      addressCountry: "IN"
    },
    numberOfRooms: property.bedrooms?.[0],
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.areas?.[0],
      unitCode: "FTK"
    },
    propertyType: property.category?.name,
    status: property.status,
    datePosted: property.createdAt,
    dateModified: property.updatedAt
  };
};

export const generateBuilderSchema = (builder: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: builder.title,
    description: builder.description,
    url: `https://www.mapmyproperty.in/builder/${builder.url}`,
    logo: builder.image,
    address: {
      "@type": "PostalAddress",
      addressLocality: builder.location,
      addressCountry: "IN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: builder.phone,
      contactType: "customer service"
    }
  };
};

export const generateBlogSchema = (blog: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: blog.image,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
    author: {
      "@type": "Organization",
      name: "Map My Property"
    },
    publisher: {
      "@type": "Organization",
      name: "Map My Property",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mapmyproperty.in/logo.png"
      }
    }
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.mapmyproperty.in${item.url}`
    }))
  };
}; 