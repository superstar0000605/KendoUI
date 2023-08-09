import { FC, useRef, useState } from 'react';
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from '@progress/kendo-react-layout';
import { Popup } from '@progress/kendo-react-popup';
import clsx from 'clsx';
import styles from './header.module.scss';
import userAvatar from '../../assets/images/placeholder_avatar.jpg';
import { IHeasderProps } from './types';

const Header: FC<IHeasderProps> = ({ showSidebar, setShowSidebar }) => {
  const anchor = useRef(null);
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  const showSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header>
      <AppBar className={styles.header}>
        <AppBarSpacer
          style={{
            width: 10,
          }}
        />
        <AppBarSection>
          <button
            className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base "
            onClick={showSidebarHandler}
          >
            <span className={clsx('k-icon k-i-menu k-icon-lg', styles.icon)} />
          </button>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 100,
          }}
        />

        <AppBarSpacer
          style={{
            width: 30,
          }}
        />
        <AppBarSection>
          <h1 className={styles.enterpTitle}>MTill Holdings, LLC</h1>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection>
          <Avatar type="image" style={{ cursor: 'pointer' }}>
            <img
              src={userAvatar}
              alt="user"
              onClick={clickHandler}
              ref={anchor}
            />
          </Avatar>
          <Popup
            anchorAlign={{ horizontal: 'right', vertical: 'top' }}
            popupAlign={{
              horizontal: 'right',
              vertical: 'bottom',
            }}
            anchor={anchor.current}
            show={show}
            popupClass={styles.popupContent}
          >
            <div className={styles.dropdownHeader}>
              <Avatar type="image">
                <img src={userAvatar} alt="user" />
              </Avatar>
              <h5>User 1</h5>
            </div>
            <nav className={styles.navList}>
              <ul>
                <li>Set Status</li>
                <li>Profile&Account</li>
                <li>Settings</li>
                <li>Manage Team</li>
              </ul>
            </nav>
            <div className={styles.footer}>
              <p>Sign Out</p>
            </div>
          </Popup>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 15,
          }}
        />
      </AppBar>
    </header>
  );
};
export default Header;
