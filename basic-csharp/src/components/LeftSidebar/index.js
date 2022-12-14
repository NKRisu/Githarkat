import styled from '@emotion/styled'
import React from 'react'
import mediaqueries from '../../styles/media'
import Navigation from './Navigation'
import PropTypes from 'prop-types'

const LeftSidebar = ({ navOpen }) => {
  return (
    <LeftSidebarWrapper>
      <LeftSidebarNav navOpen={navOpen}>
        <Navigation />
      </LeftSidebarNav>
    </LeftSidebarWrapper>
  )
}

const LeftSidebarWrapper = styled.aside`
  margin-left: -19rem;
  flex: 0 0 19rem;
  font-size: 0.875rem;
  ${mediaqueries.desktop_up`
    margin-left: 0;
  `};
`

const LeftSidebarNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: 19rem;
  height: 100%;
  padding: 1rem 0;
  background: ${p => p.theme.colors.sidebar};
  transition: 0.25s var(--ease-in-out-quad);
  transform: ${p => (p.navOpen ? 'translateX(19rem)' : null)};
  ${mediaqueries.desktop_up`
    transform: translateX(0);
    padding: 6.6rem 0 1rem;
  `};
`

LeftSidebar.propTypes = {
  navOpen: PropTypes.bool,
}

export default React.memo(LeftSidebar)
