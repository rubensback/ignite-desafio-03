import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import {
  UserContainer,
  BlogContainer,
  ProfileContainer,
  Bio,
  InfoContainer,
  Info,
  ProfileCard,
  PublicationContainer,
  PostList,
  PostCard,
  PostHeader,
  Description,
} from './styles'
import { FaBuilding } from 'react-icons/fa'
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import ptBr from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'
import { Search } from '../../components/Search'

interface User {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  company: string
  followers: number
  login: string
}

export interface Post {
  body: string
  title: string
  created_at: string
  id: string
  number: string
}

export const Blog = () => {
  const [user, setUser] = useState<User>({} as User)
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await api.get('/users/rubensback')
      setUser(data)
    }

    loadUser()
  }, [])

  return (
    <BlogContainer>
      <ProfileCard>
        <img src={user.avatar_url} alt="" />
        <ProfileContainer>
          <UserContainer>
            <p>{user.name}</p>
            <a
              href={user.html_url}
              title={'Link to Github page'}
              target={'_blank'}
              rel="noreferrer"
            >
              GITHUB <BsBoxArrowUpRight />
            </a>
          </UserContainer>
          <Bio>{user.bio}</Bio>
          <InfoContainer>
            <Info>
              <BsGithub />
              <p>{user.login}</p>
            </Info>
            <Info>
              <FaBuilding />
              <p>{user.company}</p>
            </Info>
            <Info>
              <HiUserGroup />
              <p>{user.followers} seguidores</p>
            </Info>
          </InfoContainer>
        </ProfileContainer>
      </ProfileCard>

      <PublicationContainer>
        <p>Publicações</p>
        <p>{posts.length} publicações</p>
      </PublicationContainer>
      <Search setPosts={setPosts} />

      <PostList>
        {posts.map((post) => (
          <PostCard to={`/${post.number}`} key={post.id}>
            <PostHeader>
              <p>{post.title}</p>
              <p>
                {formatDistanceToNow(new Date(post.created_at), {
                  addSuffix: true,
                  locale: ptBr,
                })}
              </p>
            </PostHeader>
            <Description>{post.body}</Description>
          </PostCard>
        ))}
      </PostList>
    </BlogContainer>
  )
}
