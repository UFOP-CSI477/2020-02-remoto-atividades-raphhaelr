import { Header } from '../../components/Header'
import { Container, Content, LoginContainer, LogoContainer, ErrorContainer, ErrorText, ButtonContainer } from './styles'
import logoLogin from '../../assets/logo-login.png'
import { useAuth } from '../../hooks/auth'
import { ChangeEvent, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'


interface IUserCredentials {
    email: string;
    password: string;
}

export const SignIn: React.FC = () => {
    const { signIn } = useAuth()

    const [error, setError] = useState<string>('')

    const history = useHistory()

    const [credentials, setCredentials] = useState({} as IUserCredentials)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSignIn = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()

        try {
            await signIn({
                email: credentials.email,
                password: credentials.password
            })

            history.push('/')
        } catch (error) {
            setError('Falha no login, verifique seu e-mail e/ou senha.')
        }
    }

    return (
        <Container>
            <Header />
            <Content>
                <LoginContainer>
                    <LogoContainer>
                        <img src={logoLogin} alt="UFOP - Área administrativa" />
                    </LogoContainer>

                    <form onSubmit={handleSignIn}>
                        <div>
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name='email' id="email" required onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="password">Senha:</label>
                            <input type="password" name='password' id="password" required onChange={handleInputChange} />
                        </div>

                        {error.length > 0 && (
                            <ErrorContainer>
                                <ErrorText>{error}</ErrorText>
                            </ErrorContainer>
                        )}

                        <ButtonContainer className="button" hasError={!!error}>
                            <button type="submit">Entrar</button>
                        </ButtonContainer>
                    </form>
                </LoginContainer>
            </Content>
        </Container>
    )
}