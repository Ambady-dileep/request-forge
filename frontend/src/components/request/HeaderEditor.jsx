export default function HeaderEditor({ headers, setHeaders }) {

    const updateHeader = (index, field, value) => {

        const updatedHeaders = [...headers];

        updatedHeaders[index][field] = value;

        setHeaders(updatedHeaders);

    };


    const addHeader = () => {

        setHeaders([
            ...headers,
            {
                key:"",
                value:""
            }
        ]);

    };


    return (
        <div>

            <h3>Headers</h3>

            {headers.map((header, index)=>(
                <div key={index}>

                    <input
                        placeholder="Header key"
                        value={header.key}
                        onChange={(e)=>
                            updateHeader(
                                index,
                                "key",
                                e.target.value
                            )
                        }
                    />


                    <input
                        placeholder="Header value"
                        value={header.value}
                        onChange={(e)=>
                            updateHeader(
                                index,
                                "value",
                                e.target.value
                            )
                        }
                    />

                </div>
            ))}


            <button onClick={addHeader}>
                Add Header
            </button>

        </div>
    )
}