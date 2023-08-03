import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PoperWrapper } from '~/components/popper'
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles)

const defaultFn = () => { }

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItem = () => {
        return current.data.map((item, index) => {

            const isParent = !!item.children
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory(prev => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }
    const handleResetMenu = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const renderResult = attrs => (
        <div
            className={cx('menu-list')}
            tabIndex="-1"
            {...attrs}
        >
            <PoperWrapper className={cx('menu-poper')}>
                {history.length > 1 && <Header
                    title={current.title}
                    onBack={handleResetMenu}
                />}
                <div className={cx('menu-body')}>
                    {renderItem()}
                </div>
            </PoperWrapper>
        </div>
    )

    const handleResetToFirstPage = () => {
        setHistory(prev => prev.slice(0, 1))
    }
    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            offset={[12, 8]}
            // visible
            delay={[0, 700]}
            placement='bottom-end'
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func
}

export default Menu;