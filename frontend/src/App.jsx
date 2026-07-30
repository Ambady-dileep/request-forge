import { useState } from "react";
import RequestPanel from "./components/request/RequestPanel";
import ResponsePanel from "./components/response/ResponsePanel";


function App(){

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <RequestPanel 
        setResponse={setResponse} 
        setError={setError}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <ResponsePanel 
        response={response} 
        error={error}
        isLoading={isLoading}
      />
    </>
  )
}

export default App