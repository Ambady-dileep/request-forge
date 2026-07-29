export default function UrlInput({ value, onChange }) {
    return (
        <input 
            type="text" 
            placeholder="Enter URL"
            value={value}
            onChange={(e) => onChange(e.target.value)} 
        />
    );
}