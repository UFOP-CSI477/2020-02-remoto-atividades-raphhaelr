import axios from 'axios'
import React, { ChangeEvent, FormEvent } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom'
import { Header } from '../../../components/Header'
import { useAuth } from '../../../hooks/auth'
import { api } from '../../../services/api'
import { Container, Content, Title, Details, CreateJobContainer, TitleContainer, ErrorContainer, ButtonContainer, ErrorText } from './styles'

interface Job {
    id: string;
    name: string;
    company: string;
    description: string;
    city: string;
    state: string;
    email: string;
    phone?: string;
    created_at: string;
}

interface LocationProps {
    id: string;
}

interface StatesIBGE {
    id: number;
    sigla: string;
    nome: string;
}

interface StatesIBGEFormatted {
    id: number;
    name: string;
    value: string;
}

interface CitiesIBGE {
    id: number;
    nome: string;
}

interface CitiesIBGEFormatted {
    id: number;
    name: string;
    value: string;
}

export const EditJob: React.FC = () => {
    const [job, setJob] = useState<Job>({} as Job)
    const [error, setError] = useState<string>('')
    const [states, setStates] = useState<StatesIBGEFormatted[]>([])
    const [cities, setCities] = useState<CitiesIBGEFormatted[]>([])

    const [cookies] = useCookies(['token'])

    const history = useHistory()

    const location = useLocation()

    useEffect(() => {
        axios.get<StatesIBGE[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`).then((response) => {
            const statesFormatted = response.data.map(state => {
                return {
                    id: state.id,
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
                    id: city.id,
                    name: city.nome,
                    value: city.nome,
                }
            })

            setCities(citiesFormatted)
        })
    }, [job.state])

    

    useEffect(() => {
        const properties = location ? location.state  as LocationProps : {} as LocationProps

        api.get(`/jobs/find?id=${properties.id}`).then((response) => {
            setJob(response.data)
        })
    }, [location])

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

    const handleUpdateJob = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            await api.put('/jobs', job)

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
                        <Title>Editar vaga de estágio</Title>

                        <Link to="/">
                            Voltar
                        </Link>
                    </TitleContainer>

                    <Details>
                        <form onSubmit={handleUpdateJob}>

                            <div>
                                <label htmlFor="name">Nome:</label>
                                <input type="text" name='name' id="name" required onChange={handleInputChange} value={job.name} />
                            </div>

                            <div>
                                <label htmlFor="company">Empresa:</label>
                                <input type="text" name='company' id="company" required onChange={handleInputChange} value={job.company} />
                            </div>

                            <div>
                                <label htmlFor="description">Descrição:</label>
                                <textarea name='description' id="description" required onChange={handleTextAreaChange} value={job.description} />
                            </div>

                            <div>
                                <label htmlFor="state">Estado:</label>
                                <select name="state" onChange={handleSelectChange} value={job.state}>
                                    <option value=''>Selecione uma opção</option>
                                    {states.map(state => (
                                        <option key={state.id} value={state.value}>{state.name}</option>
                                    ))}
                                </select>

                            </div>

                            <div>
                                <label htmlFor="city">Cidade:</label>
                                <select name="city" onChange={handleSelectChange} value={job.city}>
                                    <option value=''>Selecione uma opção</option>
                                    {cities.map(city => (
                                        <option key={city.id} value={city.value}>{city.name}</option>
                                    ))}
                                </select>

                            </div>

                            <div>
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" name='email' id="email" required onChange={handleInputChange} value={job.email} />
                            </div>

                            <div>
                                <label htmlFor="phone">Telefone:</label>
                                <input type="phone" name='phone' id="phone" onChange={handleInputChange} value={job.phone} />
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