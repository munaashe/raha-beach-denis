import { defaultLocale, supportedLocales } from "@/i18n";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import ProviderClientComponent from "@/components/ProviderClientComponent";


const inter = Inter({ subsets: ["latin"] });
const metadataKeywords: string[] = [
  'books',
  'bookshop',
  'bookstore',
  'literature',
  'fiction',
  'non-fiction',
  'novels',
  'bestsellers',
  'classics',
  'biographies',
  'mystery',
  'thriller',
  'science fiction',
  'fantasy',
  'romance',
  'self-help',
  'history',
  'art',
  'poetry',
  'children',
  'young adult',
  'reference',
  'educational',
  'travel',
  'cookbooks',
  'business',
  'finance',
  'health',
  'wellness',
  'technology',
  'computers',
  'programming',
  'philosophy',
  'religion',
  'psychology',
  'science',
  'nature',
  'environment',
  'politics',
  'society',
  'culture',
  'memoirs',
  'autobiographies',
  'essays',
  'drama',
  'comics',
  'graphic novels',
  'magazines',
  'journals',
  'reading',
  'literacy',
  'book recommendations',
];

export const metadata: Metadata = {
  title: 'Books',
  description: 'A good library for Books. Listed by Title, Author, and with information such as prices available.',
  keywords: metadataKeywords
};

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default function RootLayout(props: Props) {
  const { children, params } = props;
  const messages = useMessages();

  if (!supportedLocales.includes(params.locale)) notFound();

  return (
    <html lang={params.locale || defaultLocale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <ProviderClientComponent>
            <Header />
            {children}
            <Footer />
          </ProviderClientComponent>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}