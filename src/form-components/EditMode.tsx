import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    // default state: text shows user's name and if they are a student
    // alternate state: editable form for editing user's name and the student
    // state of edit mode is controlled by a switch -- DONE
    // starts not in EM -> user's name is "Your Name", user is a student
    // when not in EM -> text of component must include "" check instructions
    // regular checkbox controls if they are a student

    const [edit, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function editStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function studentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                // label="Edit Mode"
                checked={edit}
                onChange={editStatus}
            />
            <div>Edit mode is {edit ? "on" : "off"}</div>

            {!edit ?
                <div>
                    {name} is {student ? "a student" : "not a student"}
                </div>
            :   <Form.Group controlId="formName">
                    <Form.Label>Name: {name}</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        name="student"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />

                    <Form.Label>Student: {student}</Form.Label>
                    <Form.Check
                        type="checkbox"
                        role="checkbox"
                        label="student"
                        aria-label="student"
                        checked={student}
                        onChange={studentStatus}
                        name="student"
                    />
                </Form.Group>
            }
        </div>
    );
}
