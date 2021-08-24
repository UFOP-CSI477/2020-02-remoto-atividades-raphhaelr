import axios from 'axios'
import React, { ChangeEvent, FormEvent, } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, Redirect, useHistory, } from 'react-router-dom'
import { Header } from '../../../components/Header'
import { api } from '../../../services/api'
import { Container, Content, Title, Details, CreateJobContainer, TitleContainer, ErrorContainer, ButtonContainer, ErrorText } from './styles'

interface Job {
    name: string;
    company: string;
    description: string;
    city: string;
    state: string;
    email: string;
    phone?: string;
}

interface StatesIBGE {
    sigla: string;
    nome: string;
}

interface StatesIBGEFormatted {
    name: string;
    value: string;
}

interface CitiesIBGE {
    nome: string;
}

interface CitiesIBGEFormatted {
    name: string;
    value: string;
}

export const CreateJob: React.FC = () => {
    const [job, setJob] = useState<Job>({} as Job)
    const [error, setError] = useState<string>('')
    const [states, setStates] = useState<StatesIBGEFormatted[]>([])
    const [cities, setCities] = useState<CitiesIBGEFormatted[]>([])

    const [cookies] = useCookies(['token'])

    const history = useHistory()

    useEffect(() => {
        axios.get<StatesIBGE[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`).then((response) => {
            const statesFormatted = response.data.map(state => {
                return {
                    name: state.nome,
                    value: state.sigla,
                }
            })

            setStates(statesFormatted)
        })
    }, [])

    useEffect(() => {
        axios.get<CitiesIBGE[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${job.state}/municipios`).then((response) => {
            const citiesFormatted = response.data.map(city => {
                return {
                    name: city.nome,
                    value: city.nome,
                }
            })

            setCities(citiesFormatted)
        })
    }, [job.state])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setJob({
            ...job,
            [name]: value
        })
    }

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target

        setJob({
            ...job,
            [name]: value
        })
    }

    const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target

        setJob({
            ...job,
            [name]: value
        })
    }

    const handleCreateJob = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            await api.post('/jobs', job)

            history.push('/')
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
                        <Title>Criar uma vaga de estágio</Title>

                        <Link to="/">
                            Voltar
                        </Link>
                    </TitleContainer>

                    <Details>
                        <form onSubmit={handleCreateJob}>

                            <div>
                                <label htmlFor="name">Nome:</label>
                                <input type="text" name='name' id="name" required onChange={handleInputChange} />
                            </div>

                            <div>
                                <label htmlFor="company">Empresa:</label>
                                <input type="text" name='company' id="company" required onChange={handleInputChange} />
                            </div>

                            <div>
                                <label htmlFor="description">Descrição:</label>
                                <textarea name='description' id="description" required onChange={handleTextAreaChange} />
                            </div>

                            <div>
                                <label htmlFor="state">Estado:</label>
                                <select name="state" onChange={handleSelectChange}>
                                    <option value=''>Selecione uma opção</option>
                                    {states.map(state => (
                                        <option value={state.value}>{state.name}</option>
                                    ))}
                                </select>

                            </div>

                            <div>
                                <label htmlFor="city">Cidade:</label>
                                <select name="city" onChange={handleSelectChange}>
                                    <option value=''>Selecione uma opção</option>
                                    {cities.map(city => (
                                        <option value={city.value}>{city.name}</option>
                                    ))}
                                </select>

                            </div>

                            <div>
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" name='email' id="email" required onChange={handleInputChange} />
                            </div>

                            <div>
                                <label htmlFor="phone">Telefone:</label>
                                <input type="phone" name='phone' id="phone" onChange={handleInputChange} />
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
                </CreateJobContainer>
            </Content>
        </Container>
    )
}