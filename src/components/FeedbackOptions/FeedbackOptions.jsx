import { nanoid } from "nanoid"
import PropTypes from 'prop-types'
import { OptionsList, OptionsItem } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const voteButtons = options.map(option => (<OptionsItem key={nanoid()}>
                                                    <button onClick={() => onLeaveFeedback(option)}>{option}</button>
                                                </OptionsItem>))

    return  <OptionsList>
               {voteButtons}
            </OptionsList>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}