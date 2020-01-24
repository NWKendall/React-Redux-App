import React from 'react'
import { connect } from 'react-redux'
import { fetchActivity } from "../actions"

import { Container, Div } from "./Carbon.styled"

const Carbon = props => {
  (console.log(`this is props`, props))
  return (
    <div>
      <button onClick={props.fetchActivity}>UK</button>
      <Container>

        {!props.data && !props.isLoading && (
          <h2>SOMETHING WITTY</h2>
        )}
        {props.isLoading && (
          <p>LOADING...</p>
        )}
        {props.data && !props.isLoading && props.data.map(info => (
          
          <Div key={Date.now()}>
            <h3>{info.fuel}</h3>
            <h4>{info.perc}</h4>
          </Div>
          
        ))}
        
      </Container>
      <p>The numbers above show the percentages of UK energy industries in 2020 to date.</p>
      <p>Source:  <a href="https://api.carbonintensity.org.uk/">api.carbonintensity.org.uk</a></p>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    data: state.data,
    error: state.error
  };
}



export default connect(mapStateToProps, {fetchActivity})(Carbon)
