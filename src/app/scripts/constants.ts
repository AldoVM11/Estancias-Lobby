export const constants = {
    /**
     * Settings
     */
    Settings: {}
};
export const routes = {
    "Home": "home",
    "Tabs": "tabs",
    "Profile": "profile",
    "Notifi": "messages",
    "Chat": "chat",
    "Map": "map",
};
export const pushSettings = {
    appID: 'f8c4c641-e75a-4047-9375-dcac1f20562c',
    baseUrl: 'https://api.appery.io/rest/push/reg',
    baseSendUrl: 'https://api.appery.io/rest/push/msg',
    initOptions: {}
};
export const projectInfo = {
    guid: 'f8c4c641-e75a-4047-9375-dcac1f20562c',
    name: 'TRYT',
    description: ''
};
export const IGNORED_VALUE = Symbol.for("AIO_REST_IGNORED_VALUE");