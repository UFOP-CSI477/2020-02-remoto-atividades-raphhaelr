import React, { ChangeEvent, useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Header } from '../../components/Header'
import { api } from '../../services/api'
import { Container, Content, Title, Users as ViewUsers, Form, ManagerContainer, UserContainer, UserDetails } from './styles'
import { MdDelete, MdEdit,  MdMail, MdSearch,  } from 'react-icons/md'
import { useAuth } from '../../hooks/auth'
import { Input } from '../../components/Input'
import { useCookies } from 'react-cookie'

interface User {
    id: string;
    name: string;
    email: string;
}

export const Users: React.FC = () => {
    const { user } = useAuth()

    const [users, setUsers] = useState<User[]>([])

    const [cookies] = useCookies(['token'])

    const getUsers = useCallback(() => {
        api.get('/users').then(response => {
            setUsers(response.data)
        })
    }, []);

    const filterUsers = useCallback((value: string) => {
        const usersFiltereds = users.filter(user => user.name.toLowerCase().includes(value))

        setUsers(usersFiltereds)
    }, [users]);

    const handleSearchInputChange = useCallback(
        async (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;

            return value === '' ? getUsers() : filterUsers(value);
        },
        [getUsers, filterUsers],
    );

    useEffect(() => {
        api.get('/users').then(response => {
            setUsers(response.data)
        })
    }, [])

    const handleDeleteUser = useCallback(async (id: string) => {
        if (window.confirm('Deseja apagar esse usuário ?')) {
            try {
                await api.delete(`/users/${id}`)

                const usersFiltereds = users.filter(user => user.id !== id)

                setUsers(usersFiltereds)


            } catch (error) {
                alert('Não foi possível remover essa vaga.')
            }
        }
    }, [users])

    if (!cookies.token) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <Container>
            <Header />
            <Content>
                <Title>Gerenciar usuários</Title>

                <Form>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Digite o nome do usuário para pesquisar"
                        onChange={handleSearchInputChange}
                        icon={MdSearch}
                    />
                </Form>

                {cookies.token && (
                    <ManagerContainer>
                        <Link to="/users/create">
                            Criar usuário
                        </Link>
                    </ManagerContainer>
                )}

                <ViewUsers hasUser={!!user}>
                    {users.length > 0 && users.map((user) => (
                        <UserDetails key={user.id}>
                            <UserContainer>

                                <strong>
                                    {user.name}
                                </strong>

                                {user && (
                                    <div>
                                        <Link to={{ pathname: '/users/edit', state: { id: user.id } }}>
                                            <MdEdit size={20} />
                                        </Link>
                                        <button type="button" onClick={() => handleDeleteUser(user.id)}>
                                            <MdDelete size={20} />
                                        </button>
                                    </div>
                                )}
                            </UserContainer>
                            <p>
                                <MdMail size={18} />
                                {user.email}
                            </p>
                      
                        </UserDetails>
                    ))}
                </ViewUsers>
            </Content>
        </Container>
    )
}

