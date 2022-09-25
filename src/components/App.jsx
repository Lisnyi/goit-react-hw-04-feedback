import React, { Component } from 'react'
import { Section, FeedbackOptions, Statistics, Notification } from '../components'

export default class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback(...args) {
    const total = args.reduce((sum, current) => sum + current, 0)
    return total
  }
  
  countPositiveFeedbackPercentage(good, total) {
    const positivePercentage = good/total*100
    return positivePercentage.toFixed(0)
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback(good, neutral, bad)
    const positivePercentage = this.countPositiveFeedbackPercentage(good, total)
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions/>
        </Section>
        <Section title={"Statistics"}>
          {total
          ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
          : <Notification message={"There is no feedback"}/>}         
        </Section>
      </>
    )
  }
}
