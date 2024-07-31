import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "../css/app.css";

createInertiaApp({
    title: (title) => (title ? `${title} | Laracrest` : "Laracrest"),
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx", {
            eager: true,
        });
        return pages[`./Pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
