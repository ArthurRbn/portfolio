export const generateWebPageJSONLD = (title: string, description: string, url: string, image?: string) => ({
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "author": {
    "@type": "Person",
    "name": "Arthur Robine",
  },
  "image": image,
  "url": url,
});

export const generatePersonJSONLD = (name: string, jobTitle: string, description: string) => ({
  "@context": "http://schema.org",
  "@type": "Person",
  "name": name,
  "jobTitle": jobTitle,
  "description": description,
  "url": "https://arthurrobine.fr",
  "sameAs": [
    "https://www.linkedin.com/in/arthur-robine/",
    "https://github.com/arthurrbn",
    "mailto:arthur.robine@gmail.com"
  ]
});

export const generateProjectJSONLD = (name: string, description: string, siteUrl: string, githubUrl: string, image?: string) => ({
  "@context": "http://schema.org",
  "@type": "CreativeWork",
  "name": name,
  "description": description,
  "author": {
    "@type": "Person",
    "name": "Arthur Robine",
  },
  "image": image,
  "url": siteUrl,
  "sameAs": githubUrl,
});

export const generateExperienceListJSONLD = (experiences: { date: string; details: string; tags: string[] }[]) => {
  return {
    "@context": "http://schema.org",
    "@type": "ItemList",
    "itemListElement": experiences.map((exp, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": exp.details,
        "startDate": exp.date.split(' - ')[0], // Extract start date
        "endDate": exp.date.split(' - ')[1], // Extract end date
        "keywords": exp.tags.join(", "),
      }
    })),
  };
};
