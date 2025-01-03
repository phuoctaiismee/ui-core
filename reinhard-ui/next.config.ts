import type { NextConfig } from "next";
import { createContentlayerPlugin } from "next-contentlayer2";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/r/:name((?!index\\.json|hooks/).*)",
        destination: "/r/hooks/:name.json",
        permanent: true,
        missing: [
          {
            type: "query",
            key: "_redirected",
            value: undefined,
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
};

const withContentlayer = createContentlayerPlugin({});

export default withContentlayer(nextConfig);
