/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
};
const nextConfig = {
  images: {
    unoptimized: true,
  },

  webpack: (config) => {
    config.watchOptions = {
      ignored: ["**/supabase/**"],
    };
    return config;
  },
};

export default nextConfig;
