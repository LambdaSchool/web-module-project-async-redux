import { useEffect } from "react";
import { connect } from "react-redux";
import  { fetchInfo } from "../Actions/actions";
import CharCard from './CharCard';

const CharList = (props) => {
  const { fetchInfo } = props;
  
  useEffect(() => {fetchInfo()}, [fetchInfo]);

  return (
    <div>
      {props.isLoading ? <h3>Loading data...</h3> : null}
      {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
      {props.chars.map((char) => {
        console.log(char.url)
        return (
          <CharCard key={char.key} image_url={char.image_url} name={char.name} role={char.role} url={char.url}/>
        )
      })}
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    chars: state.chars,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchInfo })(CharList);