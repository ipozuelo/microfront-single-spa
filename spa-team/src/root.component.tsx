import "./index.css";
import { useTranslationConfig } from "./i18n";


export default function Root() {
  const i18n = useTranslationConfig();
  return (
    <div className="container">
      <h1>{i18n.t('team.tittle')}</h1>
      <separate-bar></separate-bar>
    </div>
  );
}
