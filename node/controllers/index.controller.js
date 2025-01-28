// const axios = require("axios");

// async function callApi() {
//   const apiUrl = "http://127.0.0.1:5000/";

//   try {
//     const res = await axios.get(apiUrl);
//     console.log(res.data.message);
//   } catch (e) {
//     console.log("terjadi error", e.message);
//   }
// }

// callApi();

exports.getHomePage = (req, res) => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  res.render("pages/home/index", {
    title: "Home Page",
    user: user,
  });
};
