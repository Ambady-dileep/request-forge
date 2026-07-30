import { useState } from "react";
import MethodSelect from "./MethodSelect"
import SendButton from "./SendButton"
import UrlInput from "./UrlInput"

export default function RequestPanel({ setResponse, setError }) {
    const [ method, setMethod ] = useState("GET");
    const [ url, setUrl ] = useState("");

    const handleSend = async () => {
        const trimmedUrl = url.trim();

        if(!trimmedUrl) {
            setError("Please enter a URL.")
            return;
        }
        try{
            setError(null)
            setResponse(null);

            const response = await fetch(trimmedUrl)

            if (!response.ok){
                setError(`Request failed with status ${response.status}`)
                return;
            }
            const data = await response.json();
            setResponse(data);
        }catch(error){
            setError(error.message)
        }
    }
    return (
        <>
            <MethodSelect value={method} onChange={setMethod}/>
            <UrlInput value={url} onChange={setUrl}/>
            <SendButton onClick={handleSend}/>
        </>
    )
}