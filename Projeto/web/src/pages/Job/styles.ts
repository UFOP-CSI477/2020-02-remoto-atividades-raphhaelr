import styled from 'styled-components'

export const Container = styled.div`
    
`
export const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
`


export const Job = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  padding-bottom: 40px;
`


export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #404040;
    text-decoration: none;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  max-width: 700px;
  line-height: 44px;
  text-align: left;
  color: #404040;
`;

export const Details = styled.div`
  display: block;
  width: 100%;
`

export const Description = styled.div`
  display: flex;
  white-space: pre-line;
`

export const Information = styled.div`
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      align-items: center;
      & + li {
        margin-left: 80px;
      }
      
      strong {
        display: block;
        align-items: center;
        font-size: 24px;
        color: #3d3d4d;
      }

      span {
        display: flex;
        align-items: center;
        margin-top: 4px;
        color: #6c6c80;

        svg {
          margin-right: 0.15rem;
        }
      }
    }
  }
`

