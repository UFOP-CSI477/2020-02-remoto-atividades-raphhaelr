import styled from 'styled-components'

export const Container = styled.div`
    
    display: flex;
    align-items: center;
    border-radius: 0.25rem;
    width: 100%;
    
    color: #404040;
    background: #fff;

    svg {
        margin: 0 0.5rem 0 1rem;
    }

    input {
        height: 3.5rem;
        flex: 1;
        border: 0;
        border-radius: 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;
    }
`;