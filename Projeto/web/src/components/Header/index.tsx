import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    MainTitle,
    Content,
} from './styles';
import LoginIcon from '../../assets/login.png'
import { useAuth } from '../../hooks/auth';
import { useCookies } from 'react-cookie';

export const Header: React.FC = () => {
    const { signOut } = useAuth()

    const [cookies] = useCookies(['token'])


    return (
        <Container>
            <MainTitle>
                <Link to="/">
                    <h1>UFOP - Estágios</h1>
                </Link>
            </MainTitle>
            <Content>
                {cookies.token ? (
                    <>
                        <Link to="/">
                            Vagas
                        </Link>
                        <Link to="/users">
                            Usuários
                        </Link>

                        <Link to="/" onClick={signOut}>
                            Sair
                        </Link>
                    </>
                ) : (
                    <Link to="/login">
                        <img src={LoginIcon} alt="Login" />
                        Login
                    </Link>
                )}
            </Content>
        </Container>
    );
};