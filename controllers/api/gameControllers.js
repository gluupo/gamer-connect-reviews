const axios = require('axios')
require('dotenv').config();


const getAllGames = async (req, res) => {
  const response = await axios({
    url: "https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.CLIENT_ID,
      'Authorization': 'Bearer ' + process.env.AUTH,
    },
    data: `search "forza"; fields name,cover.image_id,platforms.name,release_dates.date,game_modes.name,summary;
    limit 5;`
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
    data: `fields name,cover.image_id,platforms.name,release_dates.date,game_modes.name,summary; where id = ${req.params.id};`
  })

  return res.json(response.data)
}

const createGame = async (req, res) => {
  try {
    const dbGameData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(dbGameData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
const updateGame = async () => {

}
const deleteGame = async () => {

}


module.exports = { getAllGames, getGameById, createGame, updateGame, deleteGame }

// ,summary,platforms.abbreviation,game_modes.name,release_dates.date; sort release_dates.date desc;