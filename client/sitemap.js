import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const smStream = new SitemapStream({ hostname: 'https://www.digitalenergy.au/' });
const writeStream = createWriteStream('./public/sitemap.xml');

smStream.pipe(writeStream);


// List your main routes
const pages = [
  { url: '/', changefreq: 'daily', priority: 0.3 },
  { url: '/about', changefreq: 'daily', priority: 0.7 },
  { url: '/what-we-do', changefreq: 'daily', priority: 0.7 },
  { url: '/bring-idea-to-life', changefreq: 'daily', priority: 0.7 },
  { url: '/increase-digital-energy', changefreq: 'daily', priority: 0.7 },
  { url: '/services', changefreq: 'daily', priority: 0.9, links: [
      { url: '/services/design', lang: 'en', priority: 0.7 },
      { url: '/services/development', lang: 'en', priority: 0.7 },
      { url: '/services/content-creation', lang: 'en', priority: 0.7 },
      { url: '/services/search-engine-optimization', lang: 'en', priority: 0.7 },
      { url: '/services/marketing', lang: 'en', priority: 0.7 },
    ]
  },
  { url: '/get-in-touch', changefreq: 'daily', priority: 0.7 },
];

// List your sub-service routes as well, but they are already linked to the main service
const subServicePages = [
  { url: '/services/design', changefreq: 'daily', priority: 0.7 },
  { url: '/services/development', changefreq: 'daily', priority: 0.7 },
  { url: '/services/content-creation', changefreq: 'daily', priority: 0.7 },
  { url: '/services/search-engine-optimization', changefreq: 'daily', priority: 0.7 },
  { url: '/services/marketing', changefreq: 'daily', priority: 0.7 },
  // Add more sub-service pages
];

// Write all pages to the sitemap stream
pages.forEach(page => {
  smStream.write(page);
});

subServicePages.forEach(page => {
  smStream.write(page);
});

const promise = streamToPromise(smStream).then(() => {
    console.log('Sitemap stream ended.');
  }).catch(e => {
    console.error('Error with the sitemap stream:', e);
});

smStream.end();

writeStream.on('finish', () => {
    console.log('Sitemap generated successfully.');
  });
  
  writeStream.on('error', (error) => {
    console.error('Error in generating sitemap:', error);
  });

  promise.then(() => {
    console.log('Sitemap processing completed.');
  }).catch(error => {
    console.error('Error after completing sitemap processing:', error);
  });
