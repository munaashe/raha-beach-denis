import BooksComponent from "@/components/BooksComponent";
import { fetchGetAllBooks } from "@/utils/Books";


export default async function Home() {

  const books = await fetchGetAllBooks()

  return (
    <main className="min-h-[70vh]">
      <BooksComponent books={books} />
    </main>
  );
}
