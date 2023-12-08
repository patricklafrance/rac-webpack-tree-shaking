import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button, ListBox, ListBoxItem } from "react-aria-components";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <div>
            <h1>Testing React Aria Components tree-shaking with webpack</h1>
            <div>
                <Button
                    onPress={() => {
                        alert("You pressed me!");
                    }}
                >
                    Press me
                </Button>
                <ListBox aria-label="Favorite animal" selectionMode="single">
                    <ListBoxItem>Aardvark</ListBoxItem>
                    <ListBoxItem>Cat</ListBoxItem>
                    <ListBoxItem>Dog</ListBoxItem>
                    <ListBoxItem>Kangaroo</ListBoxItem>
                    <ListBoxItem>Panda</ListBoxItem>
                    <ListBoxItem>Snake</ListBoxItem>
                </ListBox>
            </div>
        </div>
    </StrictMode>
);
