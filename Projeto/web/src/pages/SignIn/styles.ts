import styled, { css } from 'styled-components'

interface ButtonContainerProps {
    hasError?: boolean;
}

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40rem;

    form {
        div {
        display: flex;
        flex-direction: column;
    }

    label {
        color: #F0F0F5;
    }

    input {
        
        width: 14rem;
        height: 2rem;
        margin-bottom: 1rem;
    }

    button {
        width: 9rem;
        background: #962038;
        height: 2.25rem;
        border: 0;
        border-radius: 0.25rem;
        color: #F0F0F5;
        transition: background 0.3s;

        &:hover {
            background: #781a2d;
        }
    }
    }
`

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 40px;
    width: 100%;
    height: 18rem;
    background: #404040;
    border-radius: 0.25rem;

    box-shadow: 4px 4px 1px rgba(0, 0, 0, 0.15);
`

export const LogoContainer = styled.div`
    margin-bottom: 2.75rem;

    img {
        margin-right: 2rem;
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
