import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'
import { FaCalendarDay, FaChevronLeft, FaComment } from 'react-icons/fa'
import {
  Info,
  InfoContainer,
  Markdown,
  Navigation,
  PostCard,
  PostContainer,
} from './styles'

type PostParams = {
  issueNumber: string
}

interface Issue {
  html_url: string
  user: { login: string }
  created_at: string
  title: string
  comments: string
  body: string
}

export const Post = () => {
  const { issueNumber } = useParams<PostParams>()
  const [issue, setIssue] = useState<Issue>({} as Issue)

  useEffect(() => {
    const loadIssue = async () => {
      const { data } = await api.get(
        `repos/rubensback/ignite-desafio-03/issues/${issueNumber}`,
      )
      setIssue(data)
    }

    loadIssue()
  }, [issueNumber])

  return (
    <PostContainer>
      <PostCard>
        <Navigation>
          <NavLink to={'/'}>
            <FaChevronLeft /> Voltar
          </NavLink>
          <a href={issue.html_url} target="_blank" rel="noreferrer">
            ver no github <BsBoxArrowUpRight />{' '}
          </a>
        </Navigation>
        <p>{issue.title}</p>
        <InfoContainer>
          <Info>
            <BsGithub />
            <p>{issue.user?.login}</p>
          </Info>
          <Info>
            <FaCalendarDay />
            <p>
              {issue.created_at &&
                formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBr,
                })}
            </p>
          </Info>
          <Info>
            <FaComment />
            <p>{issue.comments} comentários</p>
          </Info>
        </InfoContainer>
      </PostCard>
      <Markdown>{issue.body}</Markdown>
    </PostContainer>
  )
}
