import { useState } from "react";
import RequestPanel from "./components/request/RequestPanel";
import ResponsePanel from "./components/response/ResponsePanel";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";


function App(){

  const [response, setResponse] = useState(null);
  const [responseHeaders, setResponseHeaders] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [status, setStatus] = useState(null);
  const [responseTime, setResponseTime] = useState(null);
  const [responseSize, setResponseSize] = useState(null);

  return (
    <>
    <Navbar/>
    <Sidebar/>
      <RequestPanel 
        setResponse={setResponse}
        setResponseHeaders={setResponseHeaders}
        setError={setError}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setStatus={setStatus}
        setResponseTime={setResponseTime}
        setResponseSize={setResponseSize}
      />

      <ResponsePanel 
        response={response}
        responseHeaders={responseHeaders}
        error={error}
        isLoading={isLoading}
        status={status}
        responseTime={responseTime}
        responseSize={responseSize}
      />
    </>
  )
}

export default App