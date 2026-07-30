export default function SendButton({ onClick, isLoading }){
    return (
        <button onClick={onClick} disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
        </button>
    )
}