import styled from 'styled-components'

const Button = styled.button.attrs(({ float, margin }) => ({
    margin: margin || "1em",
    float: float|| "auto"
}))`
    background: #83939c;
    border-radius: 20px;
    color: white;
    margin:0  ${props => props.margin};
    padding: 0 2em;
    font-size: 14px;
    height: 40px;
    float:${props => props.float};
    outline: 0;

    &:hover{
        background-color: #2a90c4;
    }
`

export default Button;