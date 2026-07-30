import { useState } from "react";
import MethodSelect from "./MethodSelect"
import SendButton from "./SendButton"
import UrlInput from "./UrlInput"
import BodyEditor from "./BodyEditor";
import HeaderEditor from "./HeaderEditor";

export default function RequestPanel({ 
    setResponse, 
    setResponseHeaders,
    setError, 
    isLoading, 
    setIsLoading, 
    setStatus, 
    setResponseTime, 
    setResponseSize 
}) {
    const [httpMethod, setHttpMethod] = useState("GET");
    const [url, setUrl] = useState("");
    const [body, setBody] = useState("");
    const [headers, setHeaders] = useState([
        {
            key:"",
            value:""
        }
    ]);

    const methodsWithBody = ["POST", "PUT", "PATCH"];

    const handleSend = async () => {
        const trimmedUrl = url.trim();

        if(!trimmedUrl) {
            setError("Please enter a URL.");
            return;
        }
        
        try{
            setError(null);
            setResponse(null);
            setStatus(null);
            setResponseTime(null);
            setResponseSize(null);
            setIsLoading(true);

            const startTime = performance.now();

            const requestConfig = {
                method: httpMethod,
            };

            const requestHeaders = {};

            headers.forEach((header)=>{

                if(header.key.trim() && header.value.trim()){

                    requestHeaders[header.key.trim()] = header.value.trim();

                }

            });

            if (methodsWithBody.includes(httpMethod) && body.trim()){

                try{
                    JSON.parse(body);
                    requestHeaders["Content-Type"] = "application/json";

                } catch (error) {
                    setError("Invalid JSON body.");
                    return;
                }

                requestConfig.body = body;
            }

            if (Object.keys(requestHeaders).length > 0) {
                requestConfig.headers = requestHeaders;
            }

            const apiResponse = await fetch(trimmedUrl, requestConfig);

            const responseHeaders = {};

            apiResponse.headers.forEach((value, key)=>{
                responseHeaders[key] = value;
            });

            setResponseHeaders(responseHeaders);

            const endTime = performance.now();
            const duration = Math.round(endTime - startTime);

            setStatus(apiResponse.status);
            setResponseTime(duration);

            if (!apiResponse.ok){
                setError(`Request failed with status ${apiResponse.status}`)
                return;
            }
            
            const text = await apiResponse.text();

            const bytes = new Blob([text]).size;
            setResponseSize(bytes);

            const data = JSON.parse(text);
            setResponse(data);

        }catch(error){
            setResponseTime(null);
            setResponseSize(null);
            setError(error.message);
        }finally{
            setIsLoading(false);
        }
    }
    return (
        <>
            <MethodSelect 
                value={httpMethod} 
                onChange={setHttpMethod}
            />
            <UrlInput 
                value={url} 
                onChange={setUrl}
            />
            {methodsWithBody.includes(httpMethod) && (
                <BodyEditor
                    value={body}
                    onChange={setBody}
                />
            )}
            <HeaderEditor
                headers={headers}
                setHeaders={setHeaders}
            />
            <SendButton
                onClick={handleSend}
                isLoading={isLoading}
            /> 
        </>
    )
}
