import { Book } from '@/utils/Types'
import { useTranslations } from 'next-intl';
import React from 'react'

interface BookCardProps {
    book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    const t = useTranslations('books_component.book_card')
    const {
        title = '',
        author = '',
        price = ''
    } = book || []
    return (
        <div className='hover:bg-[#f5f5f5] p-4 rounded-lg shadow-md cursor-pointer text-center'>
            <div className='h-[54px] font-semibold'>
                <span className='italic text-[14px] font-normal'>{t('title')}: </span> {title}
            </div>
            <div className='italic'>
                {t('by')}  {author}
            </div>
            <div className='text-[#097969] pt-4 font-bold font-[24px]'>
                <span className='text-black font-normal text-[14px]'>{t('price')}:</span> ${price}
            </div>
        </div>
    )
}

export default BookCard