import React, {  useReducer } from 'react'
import { Section, FeedbackOptions, Statistics, Notification } from '../components'

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0
}

function optionsReducer (state, action) {
  switch (action.type) {
    case 'good':
      return {...state, good: state.good + action.payload}
    case 'neutral':
      return {...state, neutral: state.neutral + action.payload}
    case 'bad':
      return {...state, bad: state.bad + action.payload}
    default:
      throw new Error(`Unsuported actin type ${action.type}`)
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(optionsReducer, initialState);
  const { good, neutral, bad } = state
  const options = Object.keys(state)
  const total = countTotalFeedback(good, neutral, bad)
  const positivePercentage = countPositiveFeedbackPercentage(good, total)
  
  function countTotalFeedback (...args) {
    const total = args.reduce((sum, current) => sum + current, 0)
    return total
  }

  function countPositiveFeedbackPercentage (good, total) {
    const positivePercentage = good/total*100
    return Number(positivePercentage.toFixed(0))
  }

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={options} leaveFeedback={dispatch}/>
      </Section>
      <Section title={"Statistics"}>
        {total
        ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
        : <Notification message={"There is no feedback"}/>}         
      </Section>
    </>
  )
}

