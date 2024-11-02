import { Metadata } from "next";

export const SITE_CONFIG = {
  title: {
    default: "The Link Management Platform for Businesses",
    template: "%s | Aoshi",
  },
  description:
    "is the link management platform for businesses. It helps you build, brand, and track your links.",
  icons: {
    icon: [
      {
        rel: "apple-touch-icon",
        sizes: '32x32',
        url: "/apple-touch-icon.png",
      },
      {
        rel: 'icon',
        sizes: '32x32',
        url: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        sizes: '16x16',
        url: '/favicon-16x16.png'
      }
    ],
  },
  openGraph: {
    title:
      "The Link Management Platform for Businesses",
    description:
      "is the link management platform for businesses. It helps you build, brand, and track your links.",
    images: [
      {
        url: "/public/favicon.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "wahabarf",
    title: "The Link Management Platform for Businesses",
    description:
      "is the link management platform for businesses. It helps you build, brand, and track your links.",
    images: [
      {
        url: "/thumbnail.png",
      },
    ],
  },
  metadatabase: new URL("https://astra-app.vercel.app"),
};
