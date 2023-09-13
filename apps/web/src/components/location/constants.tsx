type Local = { basename: string, region: string, icon?: string }

const UK: Local = {
    basename: 'en-GB',
    region: 'GB',
    icon: ''
}
const AU: Local = {
    basename: 'en-AU',
    region: 'AU',
    icon: ''
}

export const LOCALE_LIST: Local[] = [
    UK,
    AU
];

export const COOKIE_LANG = 'lang';
