import PropTypes from 'prop-types';

import classNames from "classnames/bind";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    children,
    onClick,
    className,
    leftIcon,
    rightIcon,
    rounded = false,
    disable = false,
    text = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    ...pass }) {

    let Comp = 'button'

    const props = {
        onClick,
        ...pass
    }
    if (disable) {
        delete (props.onClick)
    }
    if (to) {
        props.to = to;
        Comp = 'Link'
    } else if (href) {
        props.href = href;
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        [className]: className,
        rounded,
        disable,
        text,
        primary,
        outline,
        small,
        large
    })
    return (
        <Comp
            className={classes} {...props}
        >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp >
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
}

export default Button;