import { useState } from "react";
import MethodSelect from "./MethodSelect"
import SendButton from "./SendButton"
import UrlInput from "./UrlInput"

export default function RequestPanel() {
    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState("");

    const handleSend = () => {
        if(!url) {
            alert("Please enter a URL first!");
            return;
        }
        console.log(`Making a ${method} request to ${url}`)
    }
    return (
        <>
            <MethodSelect value={method} onChange={setMethod}/>
            <UrlInput value={url} onChange={setUrl}/>
            <SendButton onClick={handleSend}/>
        </>
    )
}