import { useEffect, useState, useRef } from 'react'
import HeadlessTippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark, faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PoperWrapper } from '~/components/popper'
import AccountItem from '~/components/AccountItem';

import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { SearchIcon } from '~/components/Icons';
import SearchResults from './SearchResults'

import { useDebounce } from '~/hooks'
import * as searchServices from '~/servicecs/searchService';

const cx = classNames.bind(styles)

function Search() {

    const [searchResults, setSearchResults] = useState([])

    const [searchValue, setSearchValue] = useState('')

    const inputRef = useRef()

    const [showResults, setShowResults] = useState(false)

    const [loading, setLoading] = useState(false)

    const debounceValue = useDebounce(searchValue, 500)

    const handleClear = () => {
        setSearchValue('')
        setSearchResults([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResults(false)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' '))
            setSearchValue(searchValue)
    }

    useEffect(() => {

        if (!searchValue.trim()) {
            setSearchResults([])
            return
        }

        setLoading(true)

        const fetchApi = async () => {
            setLoading(true)
            const results = await searchServices.search(debounceValue)
            setSearchResults(results)
            setLoading(false)
        }
        fetchApi()


    }, [debounceValue])

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResults && searchResults.length > 0}
                render={attrs => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PoperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {<SearchResults results={searchResults} />}
                            {/* {searchResults.map(result => (
                                <AccountItem key={result.id} data={result} />
                            ))} */}

                        </PoperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder='Search ....'
                        spellCheck={false}
                        onChange={handleChange}
                        value={searchValue}
                        onFocus={() => {
                            setShowResults(true)
                        }}
                    />
                    {!loading && !!searchValue && <button
                        className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button
                        className={cx('search-btn')}
                        onMouseDown={e => e.preventDefault()}
                    >
                        <SearchIcon width='2.4rem' height='2.4rem' />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;