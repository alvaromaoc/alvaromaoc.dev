/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "https://alvaromanoso.dev",
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
