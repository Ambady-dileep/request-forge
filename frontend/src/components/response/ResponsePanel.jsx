export default function ResponsePanel({ response }) {
    return (
        <div>
            Response Panel
            <pre>
                {JSON.stringify(response, null, 2)}
            </pre>
        </div>
    )
}