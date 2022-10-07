import PropTypes from 'prop-types'
import { OptionsList, OptionsItem } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, leaveFeedback}) => {

    return  <OptionsList>
               {options.map(option =>
                    (<OptionsItem key={option}>
                        <button onClick={() => leaveFeedback({type: `${option}`, payload: 1})}>{option}</button>
                    </OptionsItem>))}
            </OptionsList>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    leaveFeedback: PropTypes.func.isRequired
}