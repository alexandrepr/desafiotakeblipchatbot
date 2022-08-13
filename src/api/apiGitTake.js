const axios = require("axios")
const baseAPI = "https://api.github.com"
const apiGitTake = axios.create({
    baseURL: baseAPI
})

module.exports = apiGitTake;