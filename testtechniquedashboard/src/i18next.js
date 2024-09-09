import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Overview": "Overview",
        "Total Patients": "Total Patients",
        "Satisfaction Rate": "Satisfaction Rate",
        "Total Treatments": "Total Treatments",
        "Number of Doctors": "Number of Doctors",
        "Number of Nurses": "Number of Nurses",
        "Medecins": "Doctors",
        "Hospitalizations": "Hospitalizations",
        "All": "All",
        "Year": "Year",
        "Month": "Month"
      }
    },
    fr: {
      translation: {
        "Overview": "Aperçu",
        "Total Patients": "Nombre total de patients",
        "Satisfaction Rate": "Taux de satisfaction",
        "Total Treatments": "Nombre total de traitements",
        "Number of Doctors": "Nombre de médecins",
        "Number of Nurses": "Nombre d'infirmières",
        "Medecins": "Médecins",
        "Hospitalizations": "Hospitalisations",
        "All": "Tous",
        "Year": "Année",
        "Month": "Mois"
      }
    }
  },
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
