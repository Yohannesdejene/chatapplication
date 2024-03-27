import { Encrypt, Decrypt } from "../pages/common/encrypt";

function setToken(token) {
  localStorage.setItem("userToken", JSON.stringify(token));
}
function setIdentifier(userIdentifier) {
  localStorage.setItem("userIdentifier", JSON.stringify(userIdentifier));
}
function setLoanOrdRef({ TransRef, LoanRef }) {
  localStorage.setItem("TransRef", TransRef);
  localStorage.setItem("LoanRef", LoanRef);
}

function getLoanOrdRef() {
  const TransRef = localStorage.getItem("TransRef");
  const LoanRef = localStorage.getItem("LoanRef");
  if (TransRef && LoanRef) {
    return { TransRef, LoanRef };
  }
}

function setForgetPass(data) {
  const newValue = Encrypt(data.toString());
  localStorage.setItem("pcr", newValue);
}

function getForgetPass() {
  const value = localStorage.getItem("pcr");
  console.log("value", value);
  if (value) {
    const newValue = Decrypt(value.toString());
    console.log("newValue", newValue);
    return newValue;
  } else {
    return;
  }
}

function removeForgetPass() {
  localStorage.removeItem("pcr");
}

function getValidPhoneNumber() {
  const cbePhone = localStorage.getItem("cbePhone");
  return cbePhone ? cbePhone : null;
}
function getToken() {
  const tokenString = localStorage.getItem("userToken");
  const userToken = JSON.parse(tokenString);
  return userToken ? userToken : null;
}
function deleteToken() {
  localStorage.removeItem("userToken");
  localStorage.removeItem("userIdentifier");
}
function getIdentifier() {
  const identifierString = localStorage.getItem("userIdentifier");
  const userIdentifier = JSON.parse(identifierString);
  return userIdentifier ? userIdentifier : null;
}
function setPasswordResetToken(token) {
  try {
    sessionStorage.setItem("s_pr_", JSON.stringify(token));
    return true;
  } catch (error) {
    return false;
  }
}

function getPasswordResetToken() {
  const tokenString = sessionStorage.getItem("s_pr_");
  const userToken = JSON.parse(tokenString);
  return userToken ? userToken : null;
}

function deletePasswordResetToken() {
  sessionStorage.removeItem("s_pr_");
}

function setUserProfileToken(profileName) {
  localStorage.setItem("user_profile", JSON.stringify(profileName));
}

function getUserProfileToken() {
  const profile_string = localStorage.getItem("user_profile");
  const profile = JSON.parse(profile_string);
  return profile ? profile : "customer";
}

function deleteUserProfileToken() {
  localStorage.removeItem("user_profile");
}

export const UserToken = {
  setToken,
  getToken,
  deleteToken,
  setPasswordResetToken,
  getPasswordResetToken,
  deletePasswordResetToken,
  setUserProfileToken,
  getUserProfileToken,
  deleteUserProfileToken,

  setIdentifier,
  getIdentifier,
  setLoanOrdRef,
  getLoanOrdRef,

  getValidPhoneNumber,
  setForgetPass,
  getForgetPass,
  removeForgetPass,
};
