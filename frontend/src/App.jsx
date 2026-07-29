import { useState } from "react";
import RequestPanel from "./components/request/RequestPanel";
import ResponsePanel from "./components/response/ResponsePanel";


function App(){
  const [ response, setResponse ] = useState(null);
  const [ error, setError ] = useState(null);
  console.log(error);
  return (
    <>
      <RequestPanel 
        setResponse={setResponse} 
        setError={setError}
      />
      <ResponsePanel response={response}/>
    </>
  )
}

export default App