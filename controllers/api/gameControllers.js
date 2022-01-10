const axios = require('axios')
require('dotenv').config();
const { Game } = require('../../models')


const dbCheck = (id) => {
  Game.findOne({ where: { id: id }, attributes: ['id'] })
    .then(token => token !== null)
    .then(dbCheck => dbCheck);
}


const getAllGames = async (req, res) => {
  try {
    const response = await axios({
      url: "https://api.igdb.com/v4/games",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': process.env.CLIENT_ID,
        'Authorization': 'Bearer ' + process.env.AUTH,
      },
      data: `search "${req.body}"; fields name,cover.image_id,platforms.name,release_dates.date,game_modes.name,summary;
    limit 5;`
    })
    return res.json(response.data)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

const getGameById = async (req, res) => {
  try {
    if (!dbCheck(req.params.id)) {
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
      const dbGameData = await Game.create({
        id: response.data.id,
        name: response.data.name,
        cover_id: response.data.cover_id.image_id,
        platforms: response.data.platforms.name,
        release_date: response.release_dates.date,
        game_modes: response.game_modes.name,
        summary: response.data.summary
      });

      return res.json(response.data)
    } else {
      Game.findOne({ where: { id: req.params.id } })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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