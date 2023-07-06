const sitemap = require("sitemap");
const hostname = "https://bevibrant.be";

const urls = [
  { url: "/", changefreq: "monthly", priority: 1 },
  { url: "/massage", changefreq: "monthly", priority: 0.8 },
  { url: "/yoga", changefreq: "monthly", priority: 0.8 },
  { url: "/coaching", changefreq: "monthly", priority: 0.8 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});


    const fs = require("fs");

    // Write sitemap to public directory
    fs.writeFileSync("./public/sitemap.xml", sitemapInstance.toString());