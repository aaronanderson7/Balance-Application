import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) = (
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.position}</td>
        <td>{props.record.level}</td>
        <td>
            <Link className = "btn btn-link" to = {`/edit/${props.record._id}`}>Edit</Link> |
            <button className = "btn btn-link"
                onClic = {() => {
                    props.deleteRecord(props.record._id);
                }}
            > Delete </button> 
        </td>
    </tr>
);

export default function RecordList() {
    const [records, setRecords] = useState([]);

    // this method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/record/`);

            if (!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records);
        }

        getRecords();

        return;
    }, [records.length]);
}