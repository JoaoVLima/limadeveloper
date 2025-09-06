import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation('landing_page');

    return (
        <>oi {t("HEADER")}</>
    );
}

export default Header;
