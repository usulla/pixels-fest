import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import '../src/sass/style.scss';
import App from './components/App/App.jsx';
import translation_en from "./locales/en/translation.json";
import translation_ru from "./locales/ru/translation.json";

i18n
  .init({
	interpolation: { escapeValue: false },  // React already does escaping
	keySeparator: '.',
	lng: 'ru', 
	returnObjectTrees: true,
	useSuspense :  false,                           // language to use
	resources: {
		en: {
			translation: translation_en              // 'translation' is our custom namespace
		},
		ru: {
			translation: translation_ru
		},
	}
});
ReactDOM.render((
	<I18nextProvider i18n={i18n}>
		<App />
	</I18nextProvider>
	), document.getElementById('root'));
