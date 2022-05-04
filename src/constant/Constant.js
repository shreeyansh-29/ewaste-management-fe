export const API_BASE_URL = 'http://localhost:8083';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const CUSTOMER_AUTH_URL = API_BASE_URL + '/customer/profile/view';
export const COLLECTOR_AUTH_URL = API_BASE_URL + '/collector/profile/view';
export const VENDOR_AUTH_URL = API_BASE_URL + '/vendor/profile/view';
export const CUSTOMER_NOTIFICATION_URL = API_BASE_URL+'/customer/notification';
export const COLLECTOR_NOTIFICATION_URL = API_BASE_URL+'/collector/notification';
export const COLLECTOR_REQUEST_SUMMARY = API_BASE_URL+'/collector/request/summary';
export const VENDOR_ANALYTICS_V1 = API_BASE_URL+'/vendor/analytics/v1';
export const VENDOR_ANALYTICS_V2 = API_BASE_URL+'/vendor/analytics/v2';
export const COLLECTOR_ANALYTICS_V1 = API_BASE_URL+'/collector/analytics/v1';

export const COLLECTOR_SELL_SUMMARY = API_BASE_URL+'/collector/sell/summary';
export const COLLECTOR_ANALYTICS_V2 = API_BASE_URL+'/collector/analytics/v2';
export const CUSTOMER_ANALYTICS_V2 = API_BASE_URL+'/customer/analytics/v2';
export const COLLECTOR_ANALYTICS_V5 = API_BASE_URL+'/collector/analytics/v5';
export const COLLECTOR_ANALYTICS_V4 = API_BASE_URL+'/collector/analytics/v4';
export const CUSTOMER_ANALYTICS_V1 = API_BASE_URL+'/customer/analytics/v1';
export const CUSTOMER_NOTIFICATION_MARKASREAD = API_BASE_URL+'/customer/notification/markAsRead';
export const COLLECTOR_NOTIFICATION_MARKASREAD = API_BASE_URL+'/collector/notification/markAsRead';
