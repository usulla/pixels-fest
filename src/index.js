import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import '../src/sass/style.scss';
import App from './components/App/App.jsx';

ReactDOM.render((
	<I18nextProvider i18n={i18n}>
		<App />
	</I18nextProvider>
	), document.getElementById('root'));


