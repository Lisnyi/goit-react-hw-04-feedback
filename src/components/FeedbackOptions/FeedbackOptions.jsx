import PropTypes from 'prop-types'
import { OptionsList, OptionsItem } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return  <OptionsList>
               {options.map(option =>
                    (<OptionsItem key={option}>
                        <button onClick={() => onLeaveFeedback(option)}>{option}</button>
                    </OptionsItem>))}
            </OptionsList>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}