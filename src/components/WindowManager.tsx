import { useTranslation } from "react-i18next";

function WindowManager() {
  const { t } = useTranslation("landing_page");

  return <>{t("windowmanager")}</>;
}

export default WindowManager;
