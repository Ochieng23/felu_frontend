/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "profiletree.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "magnate-ventures.com",
            port: "",
            pathname: "/**",
          },
        ],
      },

};

export default nextConfig;
