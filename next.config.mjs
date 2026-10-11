/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // The on-disk Turbopack cache grew to hundreds of MB and made every
    // rebuild take minutes, so the preview lagged several edits behind.
    turbopackFileSystemCacheForDev: false,
  },
}

export default nextConfig
