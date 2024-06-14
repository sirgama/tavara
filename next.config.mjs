/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties: true,
  },
  images: {
    domains: ['tailwindui.com', 'mdbcdn.b-cdn.net','res.cloudinary.com','tecdn.b-cdn.net','www.youtube.com','images.ctfassets.net', "images.ctfassets.net","images.pexels.com", "images.unsplash.com"],
  },
};

export default nextConfig;
