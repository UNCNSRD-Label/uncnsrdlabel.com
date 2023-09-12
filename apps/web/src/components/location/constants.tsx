type Local = { lang: string, icon?: string }

const UK: Local = {
    lang: 'GB',
    icon: ''
}
const AU: Local = {
    lang: 'AU',
    icon: ''
}

export const LOCALE_LIST: Local[] = [
    UK,
    AU
];

export const COOKIE_LANG = 'lang';
