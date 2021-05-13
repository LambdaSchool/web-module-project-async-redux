import React, { useEffect } from "react";
import { FaMusic } from "react-icons/fa";
import styled from "styled-components";
import Genre from "./Genre";
import { connect } from "react-redux";
import { getGenre } from "../actions/index";

//Styles
const StyledDiv = styled.div`
  text-align: center;
  margin-top: 5%;
`;

const StyledIcon = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
`;

const StyledGenre = styled.div`
  text-align: center;
`;

const Generate = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.getGenre();
  };

  useEffect(() => {
    props.getGenre();
  }, [getGenre]);

  return (
    <div>
      <StyledDiv>
        <StyledTitle>Generate Random Genre</StyledTitle>
        <StyledIcon>
          <Button onClick={handleClick}>
            <FaMusic className="App-logo" />
          </Button>
        </StyledIcon>
      </StyledDiv>

      <StyledGenre>
        <Genre isFetching={props.isFetching} />
      </StyledGenre>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    genre: state.genre,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { getGenre })(Generate);
