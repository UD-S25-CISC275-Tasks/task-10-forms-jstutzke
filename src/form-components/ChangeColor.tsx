import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "crimson",
    "yellow",
    "cyan",
    "violet",
    "magenta",
    "lime",
    "goldenrod",
    "orange",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    // function updateColor(event: React.ChangeEvent<HTMLSelectElement>) {
    //     setColor(event.target.value);
    // }

    return (
        <div>
            <h3>Change Color</h3>

            <div>
                <Form.Group controlId="settingColor">
                    <Form.Label>Select a Color</Form.Label>
                    {COLORS.map((c: string) => (
                        <Form.Check
                            key={c}
                            inline
                            type="radio"
                            name="color"
                            label={c}
                            value={c}
                            onChange={(event) => {
                                setColor(event.target.value);
                            }}
                            checked={color === c}
                        />
                    ))}
                </Form.Group>
                <div>
                    Selected Color:{" "}
                    <div
                        data-testid="colored-box"
                        style={{
                            backgroundColor: color,
                            color: "white",
                        }}
                    >
                        {color}
                    </div>
                </div>
            </div>
        </div>
    );
}
