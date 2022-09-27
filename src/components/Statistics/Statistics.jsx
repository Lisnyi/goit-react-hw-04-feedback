import { nanoid } from "nanoid"
import PropTypes from 'prop-types'
import { StatisticsList, StatisticsItem } from "./Statistics.styled"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return  <StatisticsList>
                <StatisticsItem key={nanoid()}>Good: {good}</StatisticsItem>
                <StatisticsItem key={nanoid()}>Neutral: {neutral}</StatisticsItem>
                <StatisticsItem key={nanoid()}>Bad: {bad}</StatisticsItem>
                <StatisticsItem key={nanoid()}>Total: {total}</StatisticsItem>
                <StatisticsItem key={nanoid()}>Positive feedback: {positivePercentage}%</StatisticsItem>
            </StatisticsList>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}