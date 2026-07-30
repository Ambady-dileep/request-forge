import { useState } from "react";
import MethodSelect from "./MethodSelect"
import SendButton from "./SendButton"
import UrlInput from "./UrlInput"
import BodyEditor from "./BodyEditor";

export default function RequestPanel({ 
    setResponse, 
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

            if (methodsWithBody.includes(httpMethod) && body.trim()){
                try{
                    JSON.parse(body);
                } catch (error) {
                    setError("Invalid JSON body.");
                    return;
                }
                requestConfig.headers = {
                    "Content-Type":"application/json",
                }
                requestConfig.body = body;
            }

            const apiResponse = await fetch(trimmedUrl, requestConfig);

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
            <SendButton
                onClick={handleSend}
                isLoading={isLoading}
            /> 
        </>
    )
}
