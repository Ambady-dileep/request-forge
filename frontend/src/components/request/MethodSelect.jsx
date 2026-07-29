export default function MethodSelect({ value, onChange }){
    return (
        <select value={value} onChange={ (e)=> onChange(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            {/* <option value="POST">PUT</option>
            <option value="POST">PATCH</option>
            <option value="POST">DELETE</option> */}
        </select>
    )
}