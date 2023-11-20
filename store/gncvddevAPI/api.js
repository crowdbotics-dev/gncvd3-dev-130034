import axios from "axios"
const gncvddevAPI = axios.create({
  baseURL: "https://gncvd-dev-130034.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return gncvddevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_ghbccb_list(payload) {
  return gncvddevAPI.get(`/api/v1/ghbccb/`)
}
function api_v1_ghbccb_create(payload) {
  return gncvddevAPI.post(`/api/v1/ghbccb/`, payload)
}
function api_v1_ghbccb_retrieve(payload) {
  return gncvddevAPI.get(`/api/v1/ghbccb/${payload.id}/`)
}
function api_v1_ghbccb_update(payload) {
  return gncvddevAPI.put(`/api/v1/ghbccb/${payload.id}/`, payload)
}
function api_v1_ghbccb_partial_update(payload) {
  return gncvddevAPI.patch(`/api/v1/ghbccb/${payload.id}/`, payload)
}
function api_v1_ghbccb_destroy(payload) {
  return gncvddevAPI.delete(`/api/v1/ghbccb/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return gncvddevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return gncvddevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return gncvddevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return gncvddevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return gncvddevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return gncvddevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return gncvddevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return gncvddevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return gncvddevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return gncvddevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return gncvddevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return gncvddevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return gncvddevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_ghbccb_list,
  api_v1_ghbccb_create,
  api_v1_ghbccb_retrieve,
  api_v1_ghbccb_update,
  api_v1_ghbccb_partial_update,
  api_v1_ghbccb_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
