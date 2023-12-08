import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "react-aria-components";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <div>
            <h1>Testing React Aria Components tree-shaking with webpack</h1>
            <div>
                <Button
                    onClick={() => {
                        alert("You clicked me!");
                    }}
                >
                    Click me
                </Button>
            </div>
        </div>
    </StrictMode>
);
