import styled from "styled-components";

export const OptionsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
`

export const OptionsItem = styled.li`
    margin-right: 8px;

    &:last-child {
        margin-right: 0;
    }

    button {
        text-transform: capitalize;
        background-color: white;
        border: 1px solid grey;
        border-radius: 3px;

        &:hover, &:focus {
            background-color: blue;
            color: white;
        }
    }
`