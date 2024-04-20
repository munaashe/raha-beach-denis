'use client'

import { useTranslations } from "next-intl";
import { Book } from "@/utils/Types";


export default async function Home() {
  const t = useTranslations('home_page');
  //const [books, setBooks] = useState<Book | null>(null);

  /*useEffect(() => {
    fetch('/api/books')
      .then((response) => response.json())
      .then((data) => setBooks(data.books))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  console.log(books)*/

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t("dummy")}
    </main>
  );
}
