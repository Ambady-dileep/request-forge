export default function ResponsePanel({ response, error }) {
    if (error) {
        return (
            <div>
                <p className="error">{error}</p>
            </div>
        );
    }

    if (response) {
        return (
            <div>
                <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
        );
    }

    return (
        <div>
            <p>No Response</p>
        </div>
    );
}
