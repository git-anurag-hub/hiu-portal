const signInApi = ({ userName, password }) => {
  if (userName === "admin" && password === "admin") {
    return {
      data: {
        userName: "admin",
        password: "admin",
        accessToken: "admin",
      },
    };
  } else {
    throw new Error("Invalid credentials");
  }
};

export default signInApi;
