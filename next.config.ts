import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
  NEXT_PUBLIC_PORT:process.env.NEXT_PUBLIC_PORT,
NEXT_PUBLIC_MONGO_DB:process.env.NEXT_PUBLIC_MONGO_DB,
RESEND_API_KEY:process.env.RESEND_API_KEY,
EYJWT_SECRET_KEY:process.env.EYJWT_SECRET_KEY
  },
};

export default nextConfig;
