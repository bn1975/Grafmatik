import React from 'react';
// import ReactFilestack, { client } from 'filestack-react';
import ReactFilestack from 'filestack-react';


const FStackContainer = (props) => {
  const { apikey } = props;

  return (<ReactFilestack
    apikey={apikey}
    buttonText="Upload"
//css goes here
    buttonClass="btn btn-link"
    onSuccess={onSuccess}
  />)
}


/*
  The success callback from the uploader once an image has been sent to Filestack

  @param data is the data coming back from the FileStack uploader

  data includes the following:

    filename, url, ...
*/
const onSuccess = (data) => {
  console.log(data);
  alert("UPLOADED!");
  // $.post('/images', data).
}

export default FStackContainer;
