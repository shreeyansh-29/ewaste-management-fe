const {apiUrl} = require("../../core/config/index") || {};

export const PASSWORD = "password";
export const TEXT = "text";
export const SIGN_IN = `${apiUrl}/signin`;
export const SIGN_UP = `${apiUrl}/user`;
export const FORGOT_PASSWORD = `${apiUrl}/password/reset`;
export const GOOGLE_AUTH_URL = `${apiUrl}/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect`;
export const CUSTOMER_AUTH_URL = `${apiUrl}/customer/profile/view`;
export const COLLECTOR_AUTH_URL = `${apiUrl}/collector/profile/view`;
export const VENDOR_AUTH_URL = `${apiUrl}/vendor/profile/view`;
export const CUSTOMER_NOTIFICATION_URL = `${apiUrl}/customer/notification`;
export const COLLECTOR_NOTIFICATION_URL = `${apiUrl}/collector/notification`;
export const COLLECTOR_REQUEST_SUMMARY = `${apiUrl}/collector/request/summary`;
export const COLLECTOR_REQUEST_PENDING = `${apiUrl}/collector/request/pending`;
export const VENDOR_ANALYTICS_V1 = `${apiUrl}/vendor/analytics/v1`;
export const VENDOR_ANALYTICS_V2 = `${apiUrl}/vendor/analytics/v2`;
export const VENDOR_ANALYTICS_V4 = `${apiUrl}/vendor/analytic/v4`;
export const COLLECTOR_ANALYTICS_V1 = `${apiUrl}/collector/analytics/v1`;

export const VENDOR_PROFILE_EDIT = `${apiUrl}/vendor/profile/edit`;
export const COLLECTOR_PROFILE_EDIT = `${apiUrl}/collector/profile/edit`;
export const CUSTOMER_PROFILE_EDIT = `${apiUrl}/customer/profile/edit`;

export const COLLECTOR_SELL = `${apiUrl}/collector/sell`;
export const COLLECTOR_ORGANIZE_DRIVE = `${apiUrl}/collector/drive/organize`;

export const CUSTOMER_PICKUP = `${apiUrl}/customer/request/pickUp`;
export const CUSTOMER_DROPOFF = `${apiUrl}/customer/request/dropOff`;
export const VENDOR_ACCEPT_ITEMS = `${apiUrl}/vendor/view/items/accept`;
export const COLLECTOR_DRIVE_MYDRIVE = `${apiUrl}/collector/drive/myDrive`;
export const VENDOR_SUMMARY = `${apiUrl}/vendor/summary`;
export const CUSTOMER_VIEW_DRIVES = `${apiUrl}/customer/viewDrives`;
export const CUSTOMER_REQUEST_PENDING = `${apiUrl}/customer/request/pending`;
export const CUSTOMER_REQUEST_COMPLETED = `${apiUrl}/customer/request/completed`;
export const VENDOR_VIEW_ITEMS = `${apiUrl}/vendor/view/items`;
export const COLLECTOR_SELL_SUMMARY = `${apiUrl}/collector/sell/summary/sold`;
export const COLLECTOR_SELL_SUMMARY_AVAILABE = `${apiUrl}/collector/sell/summary/available`;
export const COLLECTOR_SELL_SUMMARY_SOLD = `${apiUrl}/collector/sell/summary/sold`;
export const COLLECTOR_ANALYTICS_V2 = `${apiUrl}/collector/analytics/v2`;
export const CUSTOMER_ANALYTICS_V2 = `${apiUrl}/customer/analytics/v2`;
export const CUSTOMER_ANALYTICS_V3 = `${apiUrl}/customer/analytics/v3`;
export const COLLECTOR_ANALYTICS_V5 = `${apiUrl}/collector/analytics/v5`;
export const COLLECTOR_ANALYTICS_V6 = `${apiUrl}/collector/analytics/v6`;
export const COLLECTOR_ANALYTICS_V4 = `${apiUrl}/collector/analytics/v4`;
export const CUSTOMER_ANALYTICS_V1 = `${apiUrl}/customer/analytics/v1`;
export const CUSTOMER_NOTIFICATION_MARKASREAD = `${apiUrl}/customer/notification/markAsRead`;
export const COLLECTOR_NOTIFICATION_MARKASREAD = `${apiUrl}/collector/notification/markAsRead`;
export const CUSTOMER_MYREQUEST = `${apiUrl}/customer/request/all`;
export const TOAST_ERROR1 = "Wrong Email ID";
export const TOAST_ERROR2 = "Wrong Password";
export const TOAST_ERROR3 = "Already registered with this mail ID";
export const TOAST_ERROR4 = "Enter all fields";
export const TOAST_ERROR5 = "Choose the quantity you want to purchase";
export const TOAST_SUCCESS1 = "Registered successfully";
export const TOAST_SUCCESS2 = "Password updated succefully";
export const TOAST_SUCCESS3 = "Request send successfully";
export const TOAST_SUCCESS4 = "Scheduled successfully";
export const TOAST_SUCCESS5 = "Updated successfully";
export const TOAST_SUCCESS6 = "Item is on sale";
export const TOAST_SUCCESS7 = " Drive organized successfully";
export const TOAST_SUCCESS8 = "Request accepted successfully";
export const TOAST_SUCCESS9 = "Feedback Submitted";
export const TOAST_WARN1 = "Enter quantity between 1 to 20";
export const TOAST_WARN2 = "Request Expired";
export const TOAST_WARN3 = "Request not acccepted yet";
export const EMAIL_REQUIRED = "Email id required";
export const EMAIL_INVALID = "Invalid email id";
export const PASSWORD_REQUIRED = "Password required";
export const SERVER_MSG = "Server Error. Try again later..";
export const CATEGORY_REQUIRED = "Category required";
export const TIME_REQUIRED = "Drop Off time required";
export const REGISTRATION_REQUIRED = "Registration number required";
export const REGISTRATION_INVALID = "Invalid registration number";
export const GSTNO_INVALID = "Invalid GST Number";
export const GSTNO_REQUIRED = "GSTNo required.";
export const PINCODE_INVALID = "Invalid Pincode";
export const PINCODE_REQUIRED = "Pincode required.";
export const ROLE_REQUIRED = "Select role";
export const STATE_REQUIRED = "State required.";
export const CITY_REQUIRED = "City required.";
export const ADDRESS_REQUIRED = "Address required.";
export const MOBILE_INVALID = "Invalid Mobile No";
export const MOBILE_REQUIRED = "Mobile number required.";
export const CONFIRM_PASSWORD_INVALID = "Passwords should match";
export const CONFIRM_PASSWORD_REQUIRED = "Confirm Password required.";
export const PASSWORD_INVALID = "Password should be of atleast six characters";
export const FNAME_REQUIRED = "First name required.";
export const LNAME_REQUIRED = "Last name required.";

export const MSG = "An email has been sent to you to reset the password.";
export const MSG_1 = "Request failed. Try again later...";
export const VALID_QUANTITY = "Enter valid quantity";
export const INVALID_QUANTITY = "Invalid quantity";
export const BAD_REQUEST = 400;
export const SUCCESSFULL_REQUEST = 200;
export const FORBIDDEN = 403;
export const RESOURCE_NOT_FOUND = 404;
export const MSG_200 = "Successful Request";
export const MSG1_404 = "Resource Not Found";
export const MSG2_403 = "You are not authorized to access this page";
export const MSG3_400 = "Bad Request";
