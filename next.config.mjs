/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
      unoptimized: true, // غیرفعال کردن بهینه‌سازی تصاویر
  },
};

export default nextConfig;
