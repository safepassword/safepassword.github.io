import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'
import Menu, { MenuItem } from 'components/atoms/Menu'

import { ReactComponent as Search } from 'assets/search.svg'
import { ReactComponent as Add } from 'assets/plus.svg'

import style from './Header.module.scss'

const Header = ({ className, onQueryChange, query, focus, children }) => {
  const [ menuVisible, toggleMenu ] = useState(false)
  return (
    <header className={style.header}>
      <div className={style.content}>
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
            onClick={() => toggleMenu(!menuVisible)}
          />
          <Menu
            className={style.menu}
            open={menuVisible}
            onClose={() => this.setState({ openMenu: false })}
            position="right"
          >
            <MenuItem title="Switch to advanced mode" />
            <MenuItem title="Settings" />
            <MenuItem title="Sign out" />
          </Menu>
        </div>
        {children}
      </div>
    </header>
  )
}

Header.defaultProps = {
  className: '',
  onQueryChange: () => {},
  query: '',
  focus: false,
  children: [],
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
}

export default Header
