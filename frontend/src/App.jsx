import { useState } from "react";
import RequestPanel from "./components/request/RequestPanel";
import ResponsePanel from "./components/response/ResponsePanel";


function App(){

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [status, setStatus] = useState(null);
  const [responseTime, setResponseTime] = useState(null);

  return (
    <>
      <RequestPanel 
        setResponse={setResponse} 
        setError={setError}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setStatus={setStatus}
        setResponseTime={setResponseTime}
      />
      <ResponsePanel 
        response={response} 
        error={error}
        isLoading={isLoading}
        status={status}
        responseTime={responseTime}
      />
    </>
  )
}

export default App