import { memo, useCallback } from 'react'

import AccountItem from '~/components/AccountItem';


function SearchResults({ results }) {

    const handleRender = useCallback(result => (
        <AccountItem key={result.id} data={result} />
    ), [results])

    return (results.map(handleRender));
}

export default memo(SearchResults);