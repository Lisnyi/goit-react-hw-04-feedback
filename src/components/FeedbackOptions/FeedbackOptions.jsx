import { nanoid } from "nanoid"
import PropTypes from 'prop-types'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const voteButtons = options.map(option => (<li key={nanoid()}>
                                                    <button onClick={() => onLeaveFeedback(option)}>{option}</button>
                                                </li>))

    return  <ul>
               {voteButtons}
            </ul>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}