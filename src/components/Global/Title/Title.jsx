import React from "react";
import "./Title.scss";

const Title = (props) => {

    return(
       <a className = "title">{props.text}</a>
    );
}

export default Title;