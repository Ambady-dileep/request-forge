export default function ResponseTabs({activeTab,setActiveTab}){

    return (
        <div>
            <button
                onClick={()=>setActiveTab("body")}
            >
                Body
            </button>

            <button
                onClick={()=>setActiveTab("headers")}
            >
                Headers
            </button>
        </div>
    )
}