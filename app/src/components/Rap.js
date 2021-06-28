import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getRap } from '../actions';

const Rap = (props) => {
    const { rap, isFetching, error } = props;
    useEffect(() => {
        props.disptach(getRap());
    }, []);

    const handleClick = () => {
        props.disptach(getRap());
    }

    if (error) {
        return <h2>Looks like were down: {error}</h2>
    }

    if (isFetching) {
        return <h2>Fetching some tunes</h2>
    }

    return (
        <>
        <div>
            <h1>Music is the key</h1>
        </div>
        <button onClick = {handleClick}>Get some new tunes</button>
        </>
    )
};

const mapStateToProps = state => {
    return {
        rap: state.rap,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps)(Rap);