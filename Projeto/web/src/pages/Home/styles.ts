import styled, { css } from 'styled-components'

interface JobsProps {
  hasUser?: boolean;
}

export const Container = styled.div`
    
`
export const Content = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    
`

export const Title = styled.h1`
  font-size: 2rem;
  margin-top: 80px;
  max-width: 700px;
  line-height: 44px;
  text-align: left;
  color: #404040;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  
  
  button {
    height: 3.5rem;
    width: 12.5rem;
    background: rgb(150, 32, 56);
    border-radius: 0 5px 5px 0;
    border: 0px;
    color: #fff;
    font-weight: bold;
    transition: background 0.3s;
   
    &:hover {
        background: #781a2d;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
`;

export const Jobs = styled.div<JobsProps>`
  
  max-width: 700px;

  ${props => props.hasUser ? css`
    margin-top: 20px;
  ` : css`
    margin-top: 40px;
  `}
`;

export const JobsDetails = styled.div`
   
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    align-items: center;
    margin-bottom: 1rem;
    transition: transform 0.2s;

    & + div {
      margin-top: 16px;
    }


    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    .description {
      white-space: pre-wrap;

    }

    p {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #a8a8b3;
        
        margin-bottom: 0.25rem;

        svg {
          margin-right: 0.25rem;
          margin-bottom: 0.25rem;
        }
    }
  
`

export const JobNameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    strong {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #3d3d4d;
        margin-bottom: 1rem;

        svg {
            margin-right: 0.25rem;
        }
    }

    div {
      a {
        color: #000;
        text-decoration: none;
      }
    }

    button {
        border: 0;
        background: none;
    }
`

export const DetailsJob = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        display: flex;
        align-items: center;

        svg {
            margin-right: 0.25rem;
            margin-top: 0.25rem;
        }
    }
`

export const ManagerContainer = styled.div`
    margin-top: 20px;
    max-width: 700px;

    a {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: #404040;
        text-decoration: none;
    }
`