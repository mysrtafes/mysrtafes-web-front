import HeaderSP from '@/components/Header/HeaderSP'
import HeaderPC from '@/components/Header/HeaderPC'
import HamburgerMenu from '@/components/Header/HamburgerMenu'
import useBetterMediaQuery from '@/hooks/useBetterMediaQuery'
import HeaderBanner from './HeaderBanner'

const Header = ({ isTopPage = false }) => {
  const isPC = useBetterMediaQuery('(min-width: 768px)')
  return (
    <>
      {isPC ? (
        <HeaderPC isTopPage={isTopPage} />
      ) : (
        <>
          <HeaderSP />
          <HamburgerMenu isTopPage={isTopPage} />
          {isTopPage && <HeaderBanner />}
        </>
      )}
    </>
  )
}

export default Header
