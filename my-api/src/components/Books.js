import React from 'react'
import { connect } from 'react-redux'
import { fetchActivity } from "../actions"

const Books = props => {
  
  return (
    <div>
      <button onClick={props.fetchActivity}>PitBulls</button>
      {!props.message && !props.isLoading && (
        <h2>go ahead and pick an activity</h2>
      )}
      {props.isLoading && (
        <p>LOADING</p>
      )}
      {props.message && !props.isLoading && props.message.map(pic => (
        <div><img src={pic}/></div>
      ))}
    </div>
  );
};


const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    message: state.message,
    error: state.error
  };
}



export default connect(mapStateToProps, {fetchActivity})(Books)
