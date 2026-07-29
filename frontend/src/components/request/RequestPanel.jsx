import { useState } from "react";
import MethodSelect from "./MethodSelect"
import SendButton from "./SendButton"
import UrlInput from "./UrlInput"

export default function RequestPanel({ setResponse, setError }) {
    const [ method, setMethod ] = useState("GET");
    const [ url, setUrl ] = useState("");

    const handleSend = async () => {
        if(!url) {
            alert("Please enter a URL first!");
            return;
        }
        const apiResponse = await fetch(url)
        if (!apiResponse.ok){
            setError(`Request failed with status ${apiResponse.status}`)
            return;
        }
        const data = await apiResponse.json();
        setResponse(data);
        setError(null)
    }
    return (
        <>
            <MethodSelect value={method} onChange={setMethod}/>
            <UrlInput value={url} onChange={setUrl}/>
            <SendButton onClick={handleSend}/>
        </>
    )
}