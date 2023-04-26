import React, {useState} from "react";
import {useNavigate} from "react-router";

export default function Create() {
    const [form, setForm] = useState({
        name: "",
        position: "",
        level: "",
    });
    const navigate = useNavigate();

    // update the state properties
    function updateForm(value) {
        return setForm((prev) => {
            return {...prev, ...value};
    });
}

async function onSubmit(e) {
    e.preventDefault();

    // post request sent, create url, add new record.
    const newPerson = { ...form };

    await fetch("httpL://localhost:5000/record/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
    })
    .catch(error => {
        window.alert(error);
        return;
    });

    setForm({ name: "", position: "", level: ""});
    navigate("/");
}


// display input form 
// fill in HTML later.

return (
    <div>
        
    </div>
)
}