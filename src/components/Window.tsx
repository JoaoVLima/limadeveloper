import { useTranslation } from 'react-i18next'

function Window() {
    const { t } = useTranslation('landing_page')

    return <>{t('window')}</>
}

export default Window
