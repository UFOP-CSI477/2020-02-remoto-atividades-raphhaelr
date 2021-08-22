import React, { ChangeEvent, FormEvent } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom'
import { Header } from '../../../components/Header'
import { useAuth } from '../../../hooks/auth'
import { api } from '../../../services/api'
import { Container, Content, Title, Details, CreateJobContainer, TitleContainer, ErrorContainer, ButtonContainer, ErrorText } from './styles'

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

interface LocationProps {
    id: string;
}


export const EditUser: React.FC = () => {
    const [user, setUser] = useState<User>({} as User)
    const [error, setError] = useState<string>('')

    const history = useHistory()

    const [cookies] = useCookies(['token'])

    const location = useLocation()


    useEffect(() => {
        const properties = location ? location.state  as LocationProps : {} as LocationProps

        api.get(`/users/find?id=${properties.id}`).then((response) => {
            setUser(response.data)
        })
    }, [location])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (user.password !== user.password_confirmation) {
            alert('Senhas não coincidem, verifique e tente novamente.')

            return;
        } 
        try {
            console.log(user)
            await api.put('/users', user)

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
                <CreateJobContainer>
                    <TitleContainer>
                        <Title>Editar usuário</Title>

                        <Link to="/users">
                            Voltar
                        </Link>
                    </TitleContainer>

                    <Details>
                        <form onSubmit={handleUpdateUser}>

                            <div>
                                <label htmlFor="name">Nome:</label>
                                <input type="text" name='name' id="name" required onChange={handleInputChange} value={user.name}/>
                            </div>


                            <div>
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" name='email' id="email" required onChange={handleInputChange} value={user.email}/>
                            </div>

                            <div>
                                <label htmlFor="password">Senha:</label>
                                <input type="password" name='password' id="password" onChange={handleInputChange} placeholder="Digite apenas se for alterar a senha" value={user.password}/>
                            </div>

                            <div>
                                <label htmlFor="password_confirmation">Confirme a senha:</label>
                                <input type="password" name='password_confirmation' id="password_confirmation" onChange={handleInputChange} placeholder="Digite apenas se for alterar a senha" value={user.password_confirmation} />
                            </div>

                            {error.length > 0 && (
                                <ErrorContainer>
                                    <ErrorText>{error}</ErrorText>
                                </ErrorContainer>
                            )}

                            <ButtonContainer className="button" hasError={!!error}>
                                <button type="submit">Salvar</button>
                            </ButtonContainer>
                        </form>
                    </Details>
                </CreateJobContainer>
            </Content>
        </Container>
    )
}