// The v0 preview runtime re-enables Turbopack's on-disk dev cache through a
// Next adapter unless this variable is "false". That cache served stale
// client bundles after each sandbox restart, which caused hydration
// mismatches whenever copy changed. The config flag below is not enough on
// its own because the adapter overrides it; this env var is what it checks.
process.env.TURBOPACK_PERSISTENT_CACHE = 'false'

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
