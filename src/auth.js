export function verify(accessToken) {
  try {
    return {
      isTokenValid: accessToken === "admin",
      isUserVerified: true,
    };
  } catch (e) {
    return { isTokenValid: false, isUserVerified: false };
  }
}

export function getAccessToken() {
  return localStorage.getItem("auth-token");
}

export function removeAccessToken() {
  return localStorage.removeItem("auth-token");
}
