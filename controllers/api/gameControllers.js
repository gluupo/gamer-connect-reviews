const axios = require('axios')
require('dotenv').config();


const getAllGames = async (req, res) => {
  const response = await axios({
    url: "https://api.igdb.com/v4/search",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.CLIENT_ID,
      'Authorization': 'Bearer ' + process.env.AUTH,
    },
    data: 'fields alternative_name,character,checksum,collection,company,description,game,name,platform,published_at,test_dummy,theme; search "Super Mario"; limit 50;'
  })

  return res.json(response.data)
}
const getGameById = async (req, res) => {
  const response = await axios({
    url: "https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.CLIENT_ID,
      'Authorization': 'Bearer ' + process.env.AUTH,
    },
    data: `fields name,cover.*,summary,platforms.*,game_modes.*; where id = ${req.params.id};`
  })

  return res.json(response.data)
}
const createGame = async () => {

}
const updateGame = async () => {

}
const deleteGame = async () => {

}


module.exports = { getAllGames, getGameById, createGame, updateGame, deleteGame }