import { getRequestConfig } from "next-intl/server";

export const supportedLocales = ["en", "fr"];
export const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => ({
    messages: (await import(`./locales/${locale}.json`)).default,
}));