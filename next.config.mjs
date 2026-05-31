/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  trailingSlash: true,
  images: {
    remotePatterns: [
      new URL("https://images.microcms-assets.io/**"),
    ],
  },
};

export default nextConfig;
