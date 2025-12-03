import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/castalert", destination: "https://castalert.app", permanent: true },
      { source: "/ca", destination: "https://castalert.app", permanent: true },
      { source: "/actorlab", destination: "https://actorlab.io", permanent: true },
      { source: "/al", destination: "https://actorlab.io", permanent: true },
      { source: "/app", destination: "https://apps.apple.com/app/castalert/id6744257807", permanent: false },
      { source: "/testflight", destination: "https://testflight.apple.com/join/XXXXX", permanent: false },
      { source: "/podcast", destination: "https://open.spotify.com/show/tombstonedashtalks", permanent: true },
      { source: "/ig", destination: "https://instagram.com/tombstone.dash", permanent: true },
      { source: "/instagram", destination: "https://instagram.com/tombstone.dash", permanent: true },
      { source: "/x", destination: "https://twitter.com/TombStoneDash", permanent: true },
      { source: "/twitter", destination: "https://twitter.com/TombStoneDash", permanent: true },
      { source: "/yt", destination: "https://youtube.com/@tombstonedash", permanent: true },
      { source: "/youtube", destination: "https://youtube.com/@tombstonedash", permanent: true },
      { source: "/github", destination: "https://github.com/TombStoneDash", permanent: true },
      { source: "/gh", destination: "https://github.com/TombStoneDash", permanent: true },
      { source: "/linkedin", destination: "https://linkedin.com/in/hudson-taylor-aa73b859", permanent: true },
      { source: "/li", destination: "https://linkedin.com/in/hudson-taylor-aa73b859", permanent: true },
      { source: "/tiktok", destination: "https://tiktok.com/@tombstone_dash", permanent: true },
      { source: "/tt", destination: "https://tiktok.com/@tombstone_dash", permanent: true },
      { source: "/admin", destination: "https://actorlab.io/admin", permanent: false },
      { source: "/api", destination: "https://api.castalert.app", permanent: false },
      { source: "/dash", destination: "https://tombstonedash.com", permanent: true },
      { source: "/main", destination: "https://tombstonedash.com", permanent: true },
    ];
  },
};

export default nextConfig;
