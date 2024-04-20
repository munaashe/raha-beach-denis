import { getTranslations } from "next-intl/server";

export default async function Home(props: { params: { locale: string } }) {
  const t = await getTranslations({ locale: props.params.locale });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t("home_page.dummy")}
    </main>
  );
}
