'use client'

import { useState } from 'react'

import { tokens } from '../utils/tokens'

import Board from './board'
import TokenSelect from './tokenSelect'

export default function Game() {
  const emptyBoard = [...Array(9)].map((token) => token = tokens[0])
  const [board, setBoard] = useState(emptyBoard)
  const newBoard = [...board]

  const [token1, setToken1] = useState(tokens[1])
  const [token2, setToken2] = useState(tokens[2])

  const [turnCount, setTurnCount] = useState(0)
  const turn = turnCount % 2 == 1 ? "player2" : "player1"

  // tally number of wins
  const [wins, setWins] = useState(0)
  const [p1Wins, setP1Wins] = useState(0)
  const [p2Wins, setP2Wins] = useState(0)

  const winCombos = [
    [0,1,2],  // Top row
    [3,4,5],  // Middle row
    [6,7,8],  // Bottom row
    [0,3,6],  // Left collumn
    [1,4,7],  // Middle collumn
    [2,5,8],  // Right collumn
    [2,4,6],  // Left diagonal
    [0,4,8]   // Right diagonal
  ]

  // array of indexes for each player
  const p1Array = board.reduce((a,e,i) => e === token1 ? a.concat(i) : a, [])
  const p2Array = board.reduce((a,e,i) => e === token2 ? a.concat(i) : a, [])

  console.log({p1Array})

  function handleToken1Select(event) {
    const newToken = tokens.find((token) => token.name === event.target.value)
    const updateTokens = board.map(token => token === token1 ? newToken : token);
    setBoard(updateTokens);
    setToken1(newToken);
  }
  function handleToken2Select(event) {
    const newToken = tokens.find((token) => token.name === event.target.value)
    const updateTokens = board.map(token => token === token1 ? newToken : token);
    setBoard(updateTokens);
    setToken2(tokens.find((token) => token.name === event.target.value));
  }

  // const player1tokens = board.filter((token) => token === token1)
  // const player1tokens = board.indexOf(token1)
  // console.log(player1tokens)

  function handleAddToken(index) {
    if(board[index].name === "") {
      if (turn === "player1" && turnCount < 9) {
        newBoard.splice([index], 1, token1)
        setTurnCount(turnCount + 1)
      } else if (turn === "player2" && turnCount < 9) {
        newBoard.splice([index], 1, token2)
        setTurnCount(turnCount + 1)
      }
      setBoard(newBoard)
    } else {
      alert("Can't move there!")
    }
  }



  return (
    <>
      <TokenSelect token1={token1} token2={token2} handleToken1Select={handleToken1Select} handleToken2Select={handleToken2Select} />
      <Board board={board} handleAddToken={handleAddToken} />
    </>
  )
}
