import Cookies from 'js-cookie'
const Userid = 'shanghai-Userid'
const TokenKey = 'Zdhq-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

const Username = 'Zdhq-Username'

export function getUsername() {
  return Cookies.get(Username)
}

export function setUsername(username) {
  return Cookies.set(Username, username)
}

export function removeUsername() {
  return Cookies.remove(Username)
}
export function getUserid() {
  return Cookies.get(Userid)
}

export function setUserid(userid) {
  return Cookies.set(Userid, userid)
}

export function removeUserid() {
  return Cookies.remove(Userid)
}
