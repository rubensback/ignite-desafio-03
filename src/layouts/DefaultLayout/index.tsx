import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, OutletContainer } from './styles'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </LayoutContainer>
  )
}
