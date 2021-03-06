import React from "react";
import "./qaStyle.scss";
import SearchIcon from '@material-ui/icons/Search';
import { useTracking } from 'react-tracking';
import moment from 'moment';


const QAsearch = (props) => {
  const { trackEvent } = useTracking({ module: 'QA_SEARCH' });
  return (
    <div className="qa-search">
      <input
        value={props.searchString}
        onClick={() => {trackEvent({time: moment().format(), type: 'Q_SEARCH'})}}
        onChange={(e) => props.search(e)} 
        className="qa-search-bar"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      ></input><SearchIcon id="searchIcon"/>
    </div>
  );
};

export default QAsearch;
