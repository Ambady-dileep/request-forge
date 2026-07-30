export default function MethodSelect({ value, onChange }){
    return (
        <select value={value} onChange={ (e)=> onChange(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
        </select>
    )
}