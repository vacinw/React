import PropTypes from 'prop-types';

import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)

function AccountItem({ data }) {

    return (
        <Link
            to={`/:${data.nickname}`}
            className={cx('wrapper')}
        >
            <img
                className={cx('avatar')}
                src={data.avatar}
                alt="no"
            />
            <div className={cx('info')}>
                <h4 className={cx('userName')}>
                    {data.nickname}
                    {data.tick && <FontAwesomeIcon className={cx('checck')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('name')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountItem;