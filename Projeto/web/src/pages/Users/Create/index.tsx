import React, { ChangeEvent, FormEvent, } from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, Redirect, useHistory, } from 'react-router-dom'
import { Header } from '../../../components/Header'
import { api } from '../../../services/api'
import { Container, Content, Title, Details, CreateUserContainer, TitleContainer, ErrorContainer, ButtonContainer, ErrorText } from './styles'

interface User {
    name: string;
    email: string;
    password: string;
    password_confirmation?: string;
}

export const CreateUser: React.FC = () => {
    const [user, setUser] = useState<User>({} as User)
    const [error, setError] = useState<string>('')

    const [cookies] = useCookies(['token'])

    const history = useHistory()

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleCreateUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (user.password !== user.password_confirmation) {
            alert('Senhas não coincidem, verifique e tente novamente.')

            return;
        }

        try {
            await api.post('/users', user)

            history.push('/users')
        } catch (error) {
            setError(error)
        }
    }

    if (!cookies.token) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <Container>
            <Header />
            <Content>
                <CreateUserContainer>
                    <TitleContainer>
                        <Title>Criar um usuário</Title>

                        <Link to="/users">
                            Voltar
                        </Link>
                    </TitleContainer>

                    <Details>
                        <form onSubmit={handleCreateUser}>

                            <div>
                                <label htmlFor="name">Nome:</label>
                                <input type="text" name='name' id="name" required onChange={handleInputChange} />
                            </div>


                            <div>
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" name='email' id="email" required onChange={handleInputChange} />
                            </div>

                            <div>
                                <label htmlFor="password">Senha:</label>
                                <input type="password" name='password' id="password" onChange={handleInputChange} required />
                            </div>

                            <div>
                                <label htmlFor="password_confirmation">Confirme a senha:</label>
                                <input type="password" name='password_confirmation' id="password_confirmation" onChange={handleInputChange} required />
                            </div>

                            {error.length > 0 && (
                                <ErrorContainer>
                                    <ErrorText>{error}</ErrorText>
                                </ErrorContainer>
                            )}

                            <ButtonContainer className="button" hasError={!!error}>
                                <button type="submit">Criar</button>
                            </ButtonContainer>
                        </form>
                    </Details>
                </CreateUserContainer>
            </Content>
        </Container>
    )
}