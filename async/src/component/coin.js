import React from 'react'
import {fetchData} from '../action/action'
import {connect} from 'react-redux'

const coin = (props) => {
    useEffect (() => {
        props.fetchData()
    }, [props.fetchData])
    if (props.loading) {
        return <p>Coin Type</p>
    }

    return {
        coin: state.coin,
        loading: state.loading,
    }
}