
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import { Link } from 'react-router-dom'

import {
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faCircleQuestion,
    faUser,
    faCoins,
    faGear,
    faSignOut
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Menu from '~/components/popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config'

import classNames from 'classnames/bind';
import styles from './Header.module.scss'
const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tieng Viet',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet',
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'

    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
];
function Header() {


    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break
            default:
        }
    }

    const currentUser = true;


    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'LogOut',
            separate: true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>

                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img
                        className={cx('logo')}
                        src="data:image/png;base64,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"
                        alt="TIKTOK"
                    />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon width='2.6rem' height='2.6rem' />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content='Message' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon width='2.6rem' height='2.6rem' />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content='Inbox'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (

                        <>
                            <Button text >Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>Log In</Button>

                        </>

                    )
                    }
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('avatar')}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_boje-S_L5KpwZCYHvvcripyUKZ2g9o9GUg&usqp=CAU"
                                alt="vai"
                                fallBack='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6WUpnBDMs6s2O5TurgOtTcwNQKajXM2IQg&usqp=CAU'
                            />
                        ) : (
                            <button className={cx('more-btn')} >
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>

                        )}
                    </Menu>
                </div>

            </div >
        </header >
    )
}

export default Header;