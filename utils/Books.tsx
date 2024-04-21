import { Book } from "./Types";

const fetchGetAllBooks = async (): Promise<Book[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`);

        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }

        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

const fetchAddNewBook = async (data: Partial<Book>): Promise<void> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, id: Math.floor(Math.random() * 1000) }),
    });

    if (!response.ok) {
        throw new Error('Failed to add a new book');
    }
};

export { fetchGetAllBooks, fetchAddNewBook }

