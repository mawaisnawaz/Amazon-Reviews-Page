import styled from 'styled-components'

const Input = styled.input.attrs(({ size, width }) => ({
    type: "text",
    margin: size || "1em",
    width: width|| "auto"
}))`
  color: #50add6;
  font-size: 14px;
  border: 2px solid #50add6;
  border-radius: 20px;
  display: block;
  height: 40px;
  padding: 10px;
  outline: none;

  /* here we use the dynamically computed props */
  padding: ${props => props.padding};
  width : ${props => props.width};
`;

export default Input;