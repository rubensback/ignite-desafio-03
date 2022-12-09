import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Post } from '../../pages/Blog'
import { Input } from './styles'

const repo = 'rubensback/ignite-desafio-03'

interface SearchProps {
  setPosts: Dispatch<SetStateAction<Post[]>>
}

export const Search = ({ setPosts }: SearchProps) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      const {
        data: { items },
      } = await api.get(`search/issues?q=${search}%20repo:${repo}`)
      setPosts(items)
    }, 500)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [search, setPosts])

  return (
    <Input
      placeholder="Buscar conteúdo"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}
