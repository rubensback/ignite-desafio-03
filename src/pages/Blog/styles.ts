import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const BlogContainer = styled.main``

export const ProfileCard = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  display: flex;
  align-content: center;
  gap: 2rem;
  height: 13.25rem;
  margin-bottom: 4rem;

  > img {
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1;
    border-radius: 8px;
  }
`

export const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  > p {
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 1.5rem;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    cursor: pointer;
    text-decoration: none;
    font-size: 0.75rem;
  }
`

export const Bio = styled.p`
  flex: 1;
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

export const PublicationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme['base-span']};
  font-size: 0.875rem;
  margin-bottom: 0.75rem;

  > p:first-of-type {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: bold;
  }
`

export const PostList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
`

export const PostCard = styled(NavLink)`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  height: 16.25rem;
  padding: 2rem;
  text-decoration: none;
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
  color: ${(props) => props.theme['base-span']};
  font-size: 0.825rem;

  > p:first-of-type {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: bold;
  }
`

export const Description = styled.p`
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  color: ${(props) => props.theme['base-text']};
`
