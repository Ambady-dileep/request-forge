import { useState } from "react";
import MethodSelect from "./MethodSelect"
import SendButton from "./SendButton"
import UrlInput from "./UrlInput"

export default function RequestPanel({ 
    setResponse, 
    setError, 
    isLoading, 
    setIsLoading, 
    setStatus, 
    setResponseTime, 
    setResponseSize 
}) {
    const [ method, setMethod ] = useState("GET");
    const [ url, setUrl ] = useState("");

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

            const apiResponse = await fetch(trimmedUrl);

            const endTime = performance.now();
            const duration = Math.round(endTime - startTime);

            setStatus(apiResponse.status)
            setResponseTime(duration)

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
                value={method} 
                onChange={setMethod}
            />
            <UrlInput 
                value={url} 
                onChange={setUrl}
            />
            <SendButton
                onClick={handleSend}
                isLoading={isLoading}
            />
        </>
    )
}