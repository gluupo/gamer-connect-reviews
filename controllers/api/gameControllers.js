const axios = require('axios')
require('dotenv').config();
const { Game } = require('../../models')


const dbCheck = (id) => {
  Game.findOne({ where: { id: id } })
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
      data: `search "${req.body}"; fields name,cover.image_id,platforms.name,release_dates.date,game_modes,summary;
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
        data: `fields name,cover.image_id,platforms,release_dates.date,game_modes,summary; where id = ${req.params.id};`
      })
      console.log(response.data)
      await createGame(response.data[0])

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
  console.log(req.cover.image_id)
  try {
    const dbGameData = await Game.create({
      id: req.id,
      name: req.name,
      cover_id: req.cover.image_id,
      // platform_id: req.platforms,
      release_date: req.release_dates[0].date,
      // mode_id: req.game_modes,
      summary: req.summary
    });
  } catch (err) {
    console.log(err);
  }
}

const updateGame = async () => {

}
const deleteGame = async () => {

}


module.exports = { getAllGames, getGameById, createGame, updateGame, deleteGame }

// ,summary,platforms.abbreviation,game_modes.name,release_dates.date; sort release_dates.date desc;