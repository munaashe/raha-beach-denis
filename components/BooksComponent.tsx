'use client'
import { Book } from '@/utils/Types'
import React from 'react'
import BookCard from './BookCard'
import { useTranslations } from 'next-intl'
import { useQuery } from 'react-query'
import { fetchGetAllBooks } from '@/utils/Books'


const BooksComponent: React.FC = () => {
    const t = useTranslations('books_component')
    const { data: books, isLoading, isError } = useQuery('books', fetchGetAllBooks);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading books</div>;
    }
    return (
        <>
            <div className='text-center font-semibold text-[24px] py-4'>
                {t('title')}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
                {books?.map((book) => (
                    <div key={book.id}>
                        <BookCard book={book} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default BooksComponent