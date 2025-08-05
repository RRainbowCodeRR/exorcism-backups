/// <reference path="./global.d.ts" />
// @ts-check
let scoreBoard = {}

// Creates a new score board with an initial entry.
export function createScoreBoard() {
  return scoreBoard = {
    'The Best Ever': 1000000 ,
 }
}

// Adds a player to a score board.
export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score
  return scoreBoard
}

// Removes a player from a score board.
export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player]
  return scoreBoard
}

// Increases a player's score by the given amount.
export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points
  return scoreBoard
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  let points = 100;
  for ( let player in scoreBoard ) {
    updateScore(scoreBoard, player, points)
  }
  return scoreBoard
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
export function normalizeScore(params) {
  let score = params.score 
  let normalize = params.normalizeFunction
  let result = normalize(score)
  return result
}
