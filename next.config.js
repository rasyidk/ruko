/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['randomuser.me', 'images.unsplash.com', 'assets.aceternity.com', 'www.youtube.com', 'be.rumahkorea.id'],
    },
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['axios'],
    }
}

module.exports = nextConfig
