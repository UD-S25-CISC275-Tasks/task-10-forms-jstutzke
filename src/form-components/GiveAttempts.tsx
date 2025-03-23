import { Button, Form } from "react-bootstrap";
import React, { ChangeEvent, useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    // state for attempts that are left -- start at 3 -- DONE
    // state for attempts they are requesting -- DONE
    // numeric input box to request a number of attempts -- DONE
    // button Use -- decreases attempts by one -- DONE
    // button Gain -- adds however many attempts are inputted -- DONE
    // when attempts are 0, Use is disabled -- DONE

    const [remaining, setRemaining] = useState<number>(3);
    const [requesting, setRequesting] = useState<string>("0");

    function gainToAttempts() {
        const requestedAttempts = parseInt(requesting);
        if (!isNaN(requestedAttempts) && requestedAttempts > 0) {
            setRemaining(remaining + requestedAttempts);
        }
        setRequesting("0");
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formRequestingAttempts">
                <Form.Label>Request:</Form.Label>
                <div>
                    <Form.Control
                        type="number"
                        value={requesting}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            setRequesting(event.target.value);
                        }}
                    />
                </div>
            </Form.Group>
            <Button
                onClick={() => {
                    setRemaining(remaining - 1);
                }}
                disabled={remaining === 0}
            >
                Use
            </Button>
            <Button onClick={gainToAttempts}>Gain</Button>
            <div></div>
            <span>Attempts Remaining: {remaining}</span>
        </div>
    );
}
