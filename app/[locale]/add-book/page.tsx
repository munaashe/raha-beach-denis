import AddBookComponent from '@/components/AddBookComponent';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react'

export const metadata: Metadata = {
    title: 'Add Book',
    description: 'A good library for Books. Listed by Title, Author, and with information such as prices available.',
};

const AddBook = () => {
    const t = useTranslations('add_book')
    return (
        <div className='min-h-[75vh]'>
            <div className='text-center font-semibold text-[24px] py-4'>
                {t('title')}
            </div>
            <AddBookComponent />
        </div>
    )
}

export default AddBook