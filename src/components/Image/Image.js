import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react'

import images from '~/assets/images';
import classNames from 'classnames';
import styles from './image.module.scss';

const Image = forwardRef(({ className, src, alt, fallBack: fb = images.haha, ...props }, ref) => {

    const [fallBack, setFallBack] = useState('')

    const handleError = () => {
        setFallBack(fb)
    }
    return <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallBack || src}
        alt={alt}
        onError={handleError}
        {...props}
    />
})

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
}

export default Image;