import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const LoginContainer = styled.div`
  background-color: ${props => props.bgColor};
  box-shadow: 0px 4px 16px 0px ${props => props.bgColor};
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  padding-bottom: 20px;
  border: 1px solid black;
  @media screen and (min-width: 768px) {
    width: 60%;
    margin: auto;
  }
`
export const AppImage = styled.img`
  width: 30%;
  margin-bottom: 10px;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const CustomLabel = styled.label`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const CustomInput = styled.input`
  color: ${props => props.color}
  background-color: transparent;
  font-family: 'Roboto';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const CheckBoxInput = styled.input`
  height: 15px;
  width: 15px;
`
export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  width: 100%;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
