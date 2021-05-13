import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchStart, fetchSuccess, fetchFail } from '../actions/Fox';

import '../styles/Fox.css';

const Fox = (props) => {

  const { fox , dispatch } = props;

  useEffect(() => {

    dispatch(fetchStart());

    axios.get('https://randomfox.ca/floof/')
      .then(res => {
        console.log(res.data);
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchFail(err));
      });

  }, []);

  const handleClick = () => {

    dispatch(fetchStart());

    axios.get('https://randomfox.ca/floof/')
      .then(res => {
        console.log(res.data);
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchFail(err));
      });

  };

  return (
    <div className='container'>
      <h2>Random Fox</h2>
      {fox && (<div className='wrapper'><img className='image' alt='Random Fox' src={fox.image} /></div>)}
      <button className='button' type='button' onClick={handleClick}>Generate</button>
    </div>
  )

};

const mapStateToProps = (state) => {
  return ({
    fox: state.fox
  });
}

export default connect(mapStateToProps)(Fox);
