import React, { ChangeEvent, useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { api } from '../../services/api'
import { Container, Content, Title, Jobs as ViewJobs, Form, ManagerContainer, DetailsJob, JobNameContainer, JobsDetails } from './styles'
import { MdAccessTime, MdBusiness, MdDelete, MdEdit, MdLocationOn, MdSearch, MdWork } from 'react-icons/md'
import { useAuth } from '../../hooks/auth'
import { Input } from '../../components/Input'

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

export const Home: React.FC = () => {
    const { user } = useAuth()

    const [jobs, setJobs] = useState<Job[]>([])

    const getJobs = useCallback(() => {
        api.get('/jobs').then(response => {
            setJobs(response.data)
        })
    }, []);

    const filterJobs = useCallback((value: string) => {
        const jobsFiltereds = jobs.filter(job => job.name.toLowerCase().includes(value))

        setJobs(jobsFiltereds)
    }, [jobs]);

    const handleSearchInputChange = useCallback(
        async (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;

            return value === '' ? getJobs() : filterJobs(value);
        },
        [getJobs, filterJobs],
    );

    useEffect(() => {
        api.get('/jobs').then(response => {
            setJobs(response.data)
        })
    }, [])

    const handleDeleteJob = useCallback(async (id: string) => {
        if (window.confirm('Deseja apagar essa vaga ?')) {
            try {
                await api.delete(`/jobs/${id}`)

                const jobsFiltereds = jobs.filter(job => job.id !== id)

                setJobs(jobsFiltereds)


            } catch (error) {
                alert('Não foi possível remover essa vaga.')
            }
        }
    }, [jobs])

    return (
        <Container>
            <Header />
            <Content>
                <Title>Encontre a vaga de estágio que mais combina com você.</Title>

                <Form>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Digite o nome da vaga para pesquisar"
                        onChange={handleSearchInputChange}
                        icon={MdSearch}
                    />
                </Form>

                {user && (
                    <ManagerContainer>
                        <Link to="/job/create">
                            Criar vaga
                        </Link>
                    </ManagerContainer>
                )}

                <ViewJobs hasUser={!!user}>
                    {jobs.length > 0 && jobs.map((job) => (
                        <JobsDetails key={job.id}>
                            <JobNameContainer>
                                <Link to={{ pathname: '/job', state: { id: job.id } }}>
                                    <strong>
                                        <MdWork size={22} />
                                        {job.name}
                                    </strong>
                                </Link>

                                {user && (
                                    <div>
                                        <Link to={{ pathname: '/job/edit', state: { id: job.id } }}>
                                            <MdEdit size={20} />
                                        </Link>
                                        <button type="button" onClick={() => handleDeleteJob(job.id)}>
                                            <MdDelete size={20} />
                                        </button>
                                    </div>
                                )}
                            </JobNameContainer>
                            <p>
                                <MdBusiness size={18} />
                                {job.company}
                            </p>
                            <p className="description">{job.description}</p>
                            <DetailsJob>
                                <p>
                                    <MdLocationOn size={18} />
                                    {job.city}
                                </p>
                                <p>
                                    <MdAccessTime size={18} />
                                    {job.created_at}
                                </p>
                            </DetailsJob>
                        </JobsDetails>
                    ))}
                </ViewJobs>
            </Content>
        </Container>
    )
}

