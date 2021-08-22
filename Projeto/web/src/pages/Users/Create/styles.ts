import styled, { css } from 'styled-components'

interface ButtonContainerProps {
    hasError?: boolean;
}

export const Container = styled.div`
    
`
export const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
`

export const CreateUserContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 80px;
    padding-bottom: 40px;
`


export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

    
  a {
    color: #404040;
    text-decoration: none;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  max-width: 700px;
  line-height: 44px;
  text-align: left;
  color: #404040;
`;

export const Details = styled.div`
  display: block;
  width: 100%;

  div {
    margin-bottom: 1rem;


    input {
        display: block;
        height: 40px;
        width: 60%;
        border: 0;
        border-radius: 5px;
        font-size: 18px;
        color: #292929;
        border: 2px solid #fff;
        border-right-color: rgb(255, 255, 255);
        border-right-style: solid;
        border-right-width: 2px;
        border-right: 0;
        padding: 0 0.25rem;

        &:focus {
            border: 1px solid #404040;
        }
    }
  }

  button {
    height: 2.25rem;
    width: 12rem;
    background: rgb(150, 32, 56);
    border-radius: 5px;
    border: 0px;
    color: #fff;
    font-weight: bold;
    transition: background 0.3s;
   
    &:hover {
        background: #781a2d;
    }
  }
`

export const ErrorContainer = styled.div`
    background: #f2dede;
    border-color: #eed3d7;
    border-radius: 0.188rem;
    max-width: 14rem;
    

`
export const ErrorText = styled.p`
    font-size: 0.75rem;
    padding: 0.25rem 0rem 0.25rem 0.15rem;
    color: #c73c3a;
`

export const ButtonContainer = styled.div<ButtonContainerProps>`
    display: flex;
    align-items: center;

    ${props => props.hasError ? css`
        margin-top: 1rem;
    ` : css`
        margin-top: 0;
    `}
`
