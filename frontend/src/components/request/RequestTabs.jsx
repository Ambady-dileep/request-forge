export default function RequestTabs({ activeTab, setActiveTab }){
    return (
        <div>
            <button className={activeTab === "body" ? "active" : ""} onClick={()=>setActiveTab("body")}>
                Body
            </button>
            <button className={activeTab === "headers" ? "active" : ""} onClick={()=>setActiveTab("headers")}>
                Headers
            </button>
        </div>
    )
}