const routes = require('express').Router();
const apiGitTake = require('../api/apiGitTake');

const LANGUAGE='C#';
const INIT_VALUE = 0;
const MAX_VALUE = 5;
const RETURN_SUCESS = 200;

routes.get("/repositoryTakenet", async (req, res) => {
    try{
        const {data} = await apiGitTake.get("/orgs/takenet/repos?&sort=created&direction=asc")
        const csharpfilter = data.filter(repo => repo.language === LANGUAGE).slice(INIT_VALUE, MAX_VALUE)
        const JsonResp = csharpfilter.map(repo => ({
            name: repo.full_name,
            description: repo.description,
            image: repo.owner.avatar_url
        }))

        res.status(RETURN_SUCESS).json(JsonResp)
    } catch(err)
    {
        res.send({ err: err.message})
    }
})

module.exports = routes;