export default function HeaderEditor({ headerValue, headerKey, onHeaderKeyChange, onHeaderValueChange }){
    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter Header key..."
                value={headerKey}
                onChange={(e) => onHeaderKeyChange(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter Header value..."
                value={headerValue}
                onChange={(e) => onHeaderValueChange(e.target.value)}
            />
        </div>
    )
}