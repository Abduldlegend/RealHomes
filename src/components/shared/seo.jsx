import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "../../lib/constants"

export function SEO({
  title,
  description = SITE_DESCRIPTION,
  image = "/og-image.jpg",
  type = "website",
  path = "",
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const url = `${SITE_URL}${path}`

  const meta = {
    title: fullTitle,
    description,
    image,
    url,
    type,
  }

  return (
    <>
      <title>{meta.title}</title>
      <link rel="canonical" href={meta.url} />
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:url" content={meta.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </>
  )
}
