import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import RequestPanel from "./components/request/RequestPanel";
import ResponsePanel from "./components/response/ResponsePanel";

function App() {
  const [response, setResponse] = useState(null);
  const [responseHeaders, setResponseHeaders] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [status, setStatus] = useState(null);
  const [responseTime, setResponseTime] = useState(null);
  const [responseSize, setResponseSize] = useState(null);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-ui-dark">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto w-full max-w-[1600px]">
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
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;