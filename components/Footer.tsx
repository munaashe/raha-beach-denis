import { useTranslations } from 'next-intl';
import React from 'react'

const Footer = () => {
    const t = useTranslations('footer');
    return (
        <div className='flex flex-col items-center justify-center mx-4'>
            <hr className='p-4 pb-0 w-full' />
            <div className="my-4 text-center">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} Denis Siduna. {t('rights')}.
                </p>
            </div>
        </div>
    )
}

export default Footer
