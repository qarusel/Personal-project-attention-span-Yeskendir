import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Создает папку 'out' для GitHub
  basePath: '/Personal-project-attention-span-Yeskendir', // Твое название репозитория
  images: {
    unoptimized: true, // Нужно для корректной работы картинок
  },
};

export default nextConfig;
