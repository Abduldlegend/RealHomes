import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, OFFICES } from "../../lib/constants"

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateDeveloper",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    foundingDate: "2000",
    address: OFFICES.map((o) => ({
      "@type": "PostalAddress",
      addressLocality: o.city,
      streetAddress: o.address,
    })),
    contactPoint: OFFICES.map((o) => ({
      "@type": "ContactPoint",
      telephone: o.phone,
      email: o.email,
      contactType: "general",
    })),
  }
}

export function JsonLd({ type = "Organization", data = {} }) {
  let schema

  if (type === "Organization") {
    schema = localBusinessSchema()
  }

  if (type === "WebSite") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    }
  }

  if (type === "ItemList" && data.items) {
    schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: data.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": data.itemType || "Thing",
          name: item.title || item.name,
          url: item.url,
          description: item.description,
        },
      })),
    }
  }

  if (type === "RealEstateProject" && data.project) {
    schema = {
      "@context": "https://schema.org",
      "@type": "RealEstateProject",
      name: data.project.title,
      description: data.project.description,
      location: data.project.location,
      status: data.project.status,
    }
  }

  if (type === "Article" && data.article) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.article.title,
      description: data.article.excerpt,
      author: { "@type": "Person", name: data.article.author },
      datePublished: data.article.date,
    }
  }

  if (type === "JobPosting" && data.job) {
    schema = {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: data.job.title,
      description: data.job.description,
      employmentType: data.job.type,
      jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: data.job.location } },
    }
  }

  if (!schema) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
