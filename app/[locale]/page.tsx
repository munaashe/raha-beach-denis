import BooksComponent from "@/components/BooksComponent";


export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
    cache: 'no-store'
  })
  const books = await res.json()

  return (
    <main className="min-h-[70vh]">
      <BooksComponent books={books} />
    </main>
  );
}
