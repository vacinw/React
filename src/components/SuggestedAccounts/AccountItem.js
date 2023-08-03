import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';


import { Wrapper } from '~/components/popper'
import AccountPreview from './AccountPreview/AccountPreview';

import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (props) => (
        <div className={cx('preview')} tabIndex='-1' {...props}>
            <Wrapper>
                <AccountPreview />
            </Wrapper>
        </div>

    )
    return (
        <div>
            <Tippy
                // visible
                interactive
                delay={[800, 0]}
                render={renderPreview}
                placement='bottom'
                offset={[-20, 0]}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_boje-S_L5KpwZCYHvvcripyUKZ2g9o9GUg&usqp=CAU"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>
                                nickname
                            </strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>User name</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {

}

export default AccountItem;