import { useState } from "react";
import ResponseHeaders from "./ResponseHeaders";
import ResponseTabs from "./ResponseTabs";

export default function ResponsePanel({ 
    response, 
    responseHeaders,
    error, 
    isLoading, 
    status, 
    responseTime, 
    responseSize 
}) {

    const [activeTab, setActiveTab] = useState("body");

    return(
        <div>
            <h2>Response Panel</h2>

            <div className="response-metadata">
                {status !== null && (
                    <span>Status: {status}</span>
                )}

                {responseTime !== null && (
                    <span>Response Time: {responseTime} ms</span>
                )}

                {responseSize !== null && (
                    <span>Size: {responseSize} bytes</span>
                )}
            </div>


            <ResponseTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />


            <div className="response-content">

                {isLoading && (
                    <p className="loading">
                        Loading...
                    </p>
                )}


                {!isLoading && error && (
                    <p className="error">
                        {error}
                    </p>
                )}


                {!isLoading && !error && activeTab === "body" && response && (
                    <pre>
                        {JSON.stringify(response, null, 2)}
                    </pre>
                )}


                {!isLoading && !error && activeTab === "headers" && (
                    <ResponseHeaders
                        responseHeaders={responseHeaders}
                    />
                )}


                {!isLoading && !error && !response && (
                    <p>
                        No Response
                    </p>
                )}

            </div>

        </div>
    )
}