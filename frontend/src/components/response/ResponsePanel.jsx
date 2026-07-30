export default function ResponsePanel({ response, error, isLoading, status, responseTime }) {
    return(
        <div>
            <h2>Response Panel</h2>

            <div className="response-metadata">
                {status !== null && <span>Status: {status}</span>}
                {responseTime !== null && <span>Response Time: {responseTime} ms</span>}
            </div>

            <div className="response-content">

                {isLoading && <p className="loading">Loading...</p> }

                {!isLoading && error && <p className="error">{error}</p>}

                {!isLoading && !error && response && (
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                )}

                {!isLoading && !error && !response && <p>No Response</p>}
            </div>

        </div>

    )
}
