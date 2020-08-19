import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>

  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0])

  const getRandomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const incrementVote = () => {
    const copy = { ...vote }
    copy[selected] += 1
    setVote(copy)
  }

  const GetMostVotes = () => {
    var maxVotes = vote[0]
    var maxVotesIndex = 0
  
    for(var i = 1; i < anecdotes.length; i++) {
      if(vote[i] > maxVotes) {
        maxVotes = vote[i]
        maxVotesIndex = i
      }
    }
  
    console.log(vote)
  
    return (
      <div>
      {anecdotes[maxVotesIndex]} <br /> {maxVotes}
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {props.anecdotes[selected]}
      <p>Votes: {vote[selected]}</p>
      <Button handleClick={getRandomAnecdote} text='Next Anecdote' />
      <Button handleClick={incrementVote} text='Vote' />
      {GetMostVotes()}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)