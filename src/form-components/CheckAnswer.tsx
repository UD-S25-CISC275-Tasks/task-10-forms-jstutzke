import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkingAnswer">
                <Form.Control
                    type="form"
                    placeholder="Type here"
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <div>
                {answer === expectedAnswer ?
                    <span>✔️</span>
                :   <span>❌</span>}
            </div>
        </div>
    );
}
