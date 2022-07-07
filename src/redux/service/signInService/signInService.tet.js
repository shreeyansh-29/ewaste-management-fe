// /* eslint-disable no-undef */
// import {signInService} from "./signInService";
// let fetch = require("node-fetch");

// fetch = jest.fn(() => Promise.resolve());

// describe("test signInService", () => {
//   it("test fetch", () => {
//     const payload = {email: "customer1@gmail.com", password: "123456"};
//     const api = "http://localhost:8083/signin";
//     signInService(payload);
//     const {email} = payload.email || {};
//     const {password} = payload.password || {};
//     expect(fetch.post).toHaveBeenCalledWith(api, {
//       email: email,
//       password: password,
//     });
//   });
// });
