import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({
  title = 'HAS Lifesciences | Next-Gen Botanical & Nutraceutical CDMO India',
  description = 'HAS Lifesciences Private Limited is India’s premier integrated CDMO for standardized botanical extraction, softgels, pectin gummies, effervescent tablets, and cGMP pharma manufacturing in Jaipur, Rajasthan.',
  keywords = 'HAS Lifesciences, HAS Herbal, Botanical CDMO, Nutraceutical Manufacturer India, Softgel CDMO India, Pectin Gummies Manufacturer India, Effervescent Tablets CDMO, Ayurvedic Contract Manufacturing, HPLC Standardized Extracts, cGMP Pharma Facility Jaipur, HAS Lifesciences Private Limited',
  canonical = '',
  schemaType = 'Organization',
  pageSchema = null
}) {
  const location = useLocation();
  const currentUrl = canonical || `https://haslifesciences.com${location.pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Helper to set or create meta tags
    const setMetaTag = (nameAttr, nameVal, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Standard SEO Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', 'HAS Lifesciences Private Limited');
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'googlebot', 'index, follow, max-snippet:-1, max-image-preview:large');
    
    // Geographic SEO Tags (Jaipur, Rajasthan, India)
    setMetaTag('name', 'geo.region', 'IN-RJ');
    setMetaTag('name', 'geo.placename', 'Jaipur, Rajasthan, India');
    setMetaTag('name', 'geo.position', '26.9124;75.7873');
    setMetaTag('name', 'ICBM', '26.9124, 75.7873');

    // OpenGraph Meta Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'HAS Lifesciences');
    setMetaTag('property', 'og:image', 'https://haslifesciences.com/og-image.jpg');
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', 'HAS Lifesciences High-Tech CDMO Facility');
    setMetaTag('property', 'og:locale', 'en_US');

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', 'https://haslifesciences.com/og-image.jpg');

    // 4. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 5. Inject Structured JSON-LD Data
    const defaultSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Corporation",
          "@id": "https://haslifesciences.com/#organization",
          "name": "HAS Lifesciences Private Limited",
          "alternateName": ["HAS Lifesciences", "HAS Herbal CDMO"],
          "url": "https://haslifesciences.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://haslifesciences.com/has-logo.svg",
            "caption": "HAS Lifesciences Official Logotype"
          },
          "image": "https://haslifesciences.com/og-image.jpg",
          "description": "Next-Generation Contract Development and Manufacturing Organization (CDMO) specializing in standardized botanical extraction, softgels, gummies, effervescents, and cGMP formulations.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "HAS Lifesciences Industrial Campus",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "postalCode": "302001",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9876543210",
            "contactType": "corporate desk",
            "email": "design@hasherbal.com",
            "areaServed": ["IN", "US", "GB", "EU", "AE", "AU", "SG"],
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://linkedin.com/company/has-lifesciences",
            "https://haslifesciences.com"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://haslifesciences.com/#website",
          "url": "https://haslifesciences.com",
          "name": "HAS Lifesciences",
          "publisher": {
            "@id": "https://haslifesciences.com/#organization"
          },
          "inLanguage": "en-US"
        },
        pageSchema || {
          "@type": "WebPage",
          "@id": `${currentUrl}#webpage`,
          "url": currentUrl,
          "name": title,
          "description": description,
          "isPartOf": {
            "@id": "https://haslifesciences.com/#website"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://haslifesciences.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": title.split('|')[0].trim(),
                "item": currentUrl
              }
            ]
          }
        }
      ]
    };

    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(defaultSchema);

  }, [title, description, keywords, currentUrl, pageSchema]);

  return null;
}
