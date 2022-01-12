const axios = require('axios')
require('dotenv').config();
const { Game, Review, User } = require('../../models')
const con = require('../../config/redis')


const apiRequestForGames = async (name) => {
  let response = await con.redisGet(name);
  if (response) {
    return JSON.parse(response)
  } else {
    response = await axios({
      url: "https://api.igdb.com/v4/games",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': process.env.CLIENT_ID,
        'Authorization': 'Bearer ' + process.env.AUTH,
      },
      data: `search "${name}"; fields name,cover.image_id,platforms.name,release_dates.date,game_modes,summary; limit 50;`
    });
    await con.redisSet(name, JSON.stringify(response.data))
    return response.data;
  }
}


const getAllGames = async (req, res) => {
  try {
    const response = await apiRequestForGames(req.body)
    return res.json(response.data)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

const apiRequestForGamebyID = async (data) => {
  try {
    console.log(data)
    let gameData = await Game.findByPk(data, {
      include: [
        {
          model: Review,
          attributes: [
            'id',
            'review',
            'rating'
          ],
          include: [
            {
              model: User,
              attributes: [
                'id',
                'username'
              ]
            }
          ],
          order: [['created_at', 'DESC']],
          limit: 5
        }
      ]
    })
    if (!gameData) {
      const response = await axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Client-ID': process.env.CLIENT_ID,
          'Authorization': 'Bearer ' + process.env.AUTH,
        },
        data: `fields name,cover.image_id,platforms.id,release_dates.date,game_modes.id,summary; where id = ${data};`
      })
      console.log(response.data)
      await createGame(response.data[0])

      gameData = await Game.findByPk(data, {
        include: [
          {
            model: Review,
            attributes: [
              'id',
              'review',
              'rating'
            ],
            include: [
              {
                model: User,
                attributes: [
                  'id',
                  'username'
                ]
              }
            ],
            order: [['created_at', 'DESC']],
            limit: 5
          }
        ]
      })
    }
    return gameData.get({ plain: true })
  } catch (err) {
    // console.log(err);
  }
}

const getGameById = async (req, res) => {
  try {
    let gameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: Review,
          attributes: [
            'id',
            'review',
            'rating'
          ],
          include: [
            {
              model: User,
              attributes: [
                'id',
                'username'
              ]
            }
          ],
          order: [['created_at', 'DESC']],
          limit: 5
        }
      ]
    })
    if (!gameData) {
      const response = await axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Client-ID': process.env.CLIENT_ID,
          'Authorization': 'Bearer ' + process.env.AUTH,
        },
        data: `fields name,cover.image_id,platforms.id,release_dates.date,game_modes,summary; where id = ${req.params.id};`
      })
      console.log(response.data)
      await createGame(response.data[0])

      gameData = await Game.findByPk(req.params.id, {})
    }
    return res.json(gameData)
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}


const createGame = async (req, res) => {
  try {
    const dbGameData = await Game.create({
      id: req.id,
      name: req.name,
      cover_id: req.cover.image_id,
      release_date: req.release_dates[0].date,
      summary: req.summary
    });
    await dbGameData.setPlatforms(req.platforms);
    await dbGameData.setModes(req.game_modes);
    await dbGameData.save();
    await dbGameData.reload();
  } catch (err) {
    console.log(err);
  }
}

const updateGame = async () => {

}
const deleteGame = async () => {

}


module.exports = { getAllGames, getGameById, createGame, updateGame, deleteGame, apiRequestForGames, apiRequestForGamebyID }

// ,summary,platforms.abbreviation,game_modes.name,release_dates.date; sort release_dates.date desc;