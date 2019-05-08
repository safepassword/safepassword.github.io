import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'
import Menu, { MenuItem } from 'components/atoms/Menu'
import Settings from 'components/molecules/Settings'

import { ReactComponent as Search } from 'assets/search.svg'
import { ReactComponent as Add } from 'assets/plus.svg'

import style from './Header.module.scss'

const Header = ({
  className,
  onQueryChange,
  query,
  focus,
  children,
  onSubmit,
}) => {
  const menuRef = useRef(null)
  const [ settingsAreOpen, openSettings ] = useState(false)
  return (
    <header className={style.header}>
      <form className={style.content} onSubmit={onSubmit}>
        <div className={style.flex}>
          {/* <Button className={style.add} primary>
            <Add className={style.addIcon} />
          </Button>*/}
          <Input
            className={style.search}
            icon={<Search />}
            placeholder="Search"
            defaultValue={query}
            onChange={onQueryChange}
            focus={focus}
          />
          <Button
            className={style.avatar}
            onClick={event => menuRef.current.toggle(event)}
          />
          <Menu ref={menuRef} className={style.menu} position="right">
            {/* <MenuItem title="Switch to advanced mode" /> */}
            <MenuItem
              title="Settings"
              onClick={event => {
                openSettings(true)
                menuRef.current.close(event)
              }}
            />
            <MenuItem title="Sign out" />
          </Menu>
        </div>
        {children}
        <input type="submit" value="Submit" className={style.hidden} />
      </form>
      <Settings show={settingsAreOpen} onClick={() => openSettings(false)} />
    </header>
  )
}

Header.defaultProps = {
  className: '',
  onQueryChange: () => {},
  query: '',
  focus: false,
  children: [],
  onSubmit: () => {},
}

Header.propTypes = {
  className: PropTypes.string,
  onQueryChange: PropTypes.func,
  query: PropTypes.string,
  focus: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  onSubmit: PropTypes.func,
}

export default Header
