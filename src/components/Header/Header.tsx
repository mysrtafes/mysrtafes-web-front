import HeaderPC from '@/components/Header/HeaderPC'
import HeaderSP from '@/components/Header/HeaderSP'

const Header = ({ isTopPage = false }) => {
  return (
    <>
      <HeaderPC isTopPage={isTopPage} />
      <HeaderSP isTopPage={isTopPage} />
    </>
  )
}

export default Header
