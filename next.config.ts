// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ["cdn.sanity.io"], // Sanity ke images allow karne ke liye

//   },
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.sanity.io",   // Sanity ke images
      "randomuser.me"    // Random User API images
    ],
  },
};

export default nextConfig;
