import { useTranslation } from 'react-i18next'
import React from 'react'

const NotFound: React.FC = () => {
    const { t } = useTranslation()

    return (
        <div className="p-40">
            <h1 className="font-bold text-5xl mb-5">404</h1>
            <p>{t('error-404-not-found')}</p>
        </div>
    )
}

export default NotFound