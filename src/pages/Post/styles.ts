import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const PostContainer = styled.main``

export const PostCard = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-bottom: 2.5rem;

  > p {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
    margin-bottom: 1rem;
  }
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 1.25rem;

  > * {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    gap: 0.5rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: auto;
`

export const Info = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
export const Markdown = styled(ReactMarkdown)`
  white-space: pre-wrap;
`
