const isOject = x => typeof x === 'object' && x !== null;

export const RecursiveComponent = ({ data }) => {
    //Define stopping case
    if (!isOject(data)) {
        return (
            <li>{data}</li>
        )
    }

    const pairs = Object.entries(data) //this returns our object's key value entries
    return (
        <>
        { pairs.map(([key, value]) => (
            <li>
                {key}:
                <ul>
                    <RecursiveComponent data={value} />
                </ul>
            </li>
        )) }
        </>
    );
}
