import React from "react";

export default function Alert(props) {
  const capatalize = (word) => {
    let lowertext = word.toLowerCase();
    return lowertext.charAt(0).toUpperCase() + lowertext.slice(1);  
  }
  return (
    //if props.alert is null then first condition will only run but if it is not then second condition will run we have to do this because first time our alert is null
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {capatalize(props.alert.type)} : {props.alert.msg}
    </div>
  );
}
