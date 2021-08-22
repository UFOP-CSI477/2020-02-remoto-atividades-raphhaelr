import React, { useEffect } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Container, Content, Title, Details, Job as ShowJob, TitleContainer, Description, Information } from './styles'
import { MdBusiness, MdLocationOn, MdMail, MdPhone } from 'react-icons/md'
import { api } from '../../services/api'
import { useState } from 'react'

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

export const ViewJob: React.FC = () => {
    const [job, setJob] = useState<Job>({} as Job)
    const location = useLocation()

    useEffect(() => {
        const properties = location ? location.state  as LocationProps : {} as LocationProps

        api.get(`/jobs/find?id=${properties.id}`).then((response) => {
            setJob(response.data)
        })
    }, [location])

    if (!location.state) {

        return (
            <Redirect to="/" />
        )
    }

    return (
        <Container>
            <Header />
            <Content>
                <ShowJob>
                    <TitleContainer>
                        <Title>{job.name}</Title>

                        <Link to="/">
                            Voltar
                        </Link>
                    </TitleContainer>

                    <Details>
                        <Description>
                            <p>{job.description}</p>
                        </Description>

                        <Information>
                            <ul>
                                <li>
                                    <strong>{job.company}</strong>
                                    <span>
                                        <MdBusiness size={20} />
                                        Empresa
                                    </span>
                                </li>
                                <li>
                                    <strong>{job.city}</strong>
                                    <span>
                                        <MdLocationOn size={20} style={{ marginLeft: '-0.3rem' }} />
                                        Cidade
                                    </span>
                                </li>
                                <li>
                                    <strong>{job.email}</strong>
                                    <span>
                                        <MdMail size={20} />
                                        E-mail
                                    </span>
                                </li>

                                {job && job.phone && (
                                    <li>
                                        <strong>{job.phone}</strong>
                                        <span>
                                            <MdPhone size={20} />
                                            Telefone
                                        </span>
                                    </li>
                                )}
                            </ul>
                        </Information>
                    </Details>
                </ShowJob>

            </Content>
        </Container>
    )
}