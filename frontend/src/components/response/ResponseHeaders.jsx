export default function ResponseHeaders({responseHeaders}){

    return (
        <div>
            <h3>Response Headers</h3>

            {Object.entries(responseHeaders).map(([key,value])=>(
                <div key={key}>
                    <strong>{key}:</strong> {value}
                </div>
            ))}

        </div>
    )
}