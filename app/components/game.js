'use client'

import { useState } from 'react'

import { tokens } from '../utils/tokens'

import Board from './board'
import TokenSelect from './tokenSelect'

export default function Game() {
  const emptyBoard = [...Array(9)].map((token) => token = tokens[0])
  const [board, setBoard] = useState(emptyBoard)
  const newBoard = [...board]
  const [turnCount, setTurnCount] = useState(0)
  const turn = turnCount % 2 == 1 ? "player2" : "player1"

  const [token1, setToken1] = useState(tokens[1])
  const [token2, setToken2] = useState(tokens[2])

  function handleToken1Select(event) {
    setToken1(tokens.find((token) => token.name === event.target.value));
  }
  function handleToken2Select(event) {
    setToken2(tokens.find((token) => token.name === event.target.value));
  }

  function handleAddToken(index) {
    if (turn == "player1") {
      newBoard.splice([index], 1, token1)
      if(turnCount < 9) setTurnCount(turnCount + 1)
    } else if (turn === "player2") {
      newBoard.splice([index], 1, token2)
      if(turnCount < 9) setTurnCount(turnCount + 1)
    } else {
      newBoard.splice([index], 1, tokens[0])
    }
    setBoard(newBoard)
  }

  return (
    <>
      <TokenSelect token1={token1} token2={token2} handleToken1Select={handleToken1Select} handleToken2Select={handleToken2Select} />
      <Board board={board} handleAddToken={handleAddToken} />
    </>
  )
}
