export default function BodyEditor({value, onChange}) {
    return (
        <textarea
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            placeholder="Enter JSON body"
        />
    )
}