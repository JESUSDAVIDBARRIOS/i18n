import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import messages_en from "./locales/en.json";
import messages_es from "./locales/es.json";

import JobsList from "./components/jobslist";

const messages = {
    'en': messages_en,
    'es': messages_es
  };

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages={messages[language]}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);
