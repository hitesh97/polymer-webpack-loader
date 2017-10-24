const fs = require('fs');
const path = require('path');
const readdirSync = fs.readdirSync;
const readFileSync = fs.readFileSync;
const LANGUAGE_PACKS_DIR = 'src/assets/i18n';

// Construct a list of languages available, according to the contents of the ${LANGUAGE_PACKS_DIR} directory.
// Each item in the array will have the same shape as the ILanguage interface defined in `language.model.ts`.
// Returned array will be sorted in ascending `locale` order.
function getAllLanguages() {
    const files = readdirSync(LANGUAGE_PACKS_DIR);
    let languagePacks = [];

    files.forEach((fileName) => {
        const fullPath = path.join(LANGUAGE_PACKS_DIR, fileName);
        const locale = fileName.split('.')[0];
        const fileContents = readFileSync(fullPath, { encoding: 'utf-8' });
        const jsonObject = JSON.parse(fileContents);
        const localisedName = jsonObject['locale.localised-name'];
        const isDefault = jsonObject['locale.is-default'];
        const fallbackLocaleForLanguageCode = jsonObject['locale.fallback-locale-for-language-code'];

        languagePacks.push({ isDefault, locale, localisedName, fallbackLocaleForLanguageCode });
    });

    return languagePacks.sort((item1, item2) => item1.locale < item2.locale ? -1 : 1);
}

function getAllLocales() {
    const allLanguages = getAllLanguages();

    return Array.from(allLanguages, (language) => language.locale);
}

function getDefaultLanguage() {
    return getAllLanguages().find((item) => item.isDefault);
}

function getDefaultLocale() {
    const defaultLanguage = getDefaultLanguage();

    if (defaultLanguage === undefined) {
        throw new Error('No default language pack has been defined. Please see README.md section on "Setting the default (fallback) locale".');
    }

    return defaultLanguage.locale;
}

module.exports = {
    getAllLanguages,
    getAllLocales,
    getDefaultLanguage,
    getDefaultLocale,
};
