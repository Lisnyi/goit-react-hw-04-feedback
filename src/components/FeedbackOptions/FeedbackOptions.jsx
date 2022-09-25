import { nanoid } from "nanoid"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const voteButtons = options.map(option => (<li key={nanoid()}>
                                                    <button onClick={()=> onLeaveFeedback(option)}>{option}</button>
                                                </li>))

    return  <ul>
               {voteButtons}
            </ul>
}