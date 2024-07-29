import React, { useEffect, useState } from "react";
const AppFooter = () => {
    const [time] = useState(new Date());
    return (
        <section className="flex items-center gap-4 py-8">
            <h4>&copy; {time.getFullYear()}</h4>
            <a href="/">Twitter</a>
            <a href="/">LinkedIn</a>
            <a href="/">Email</a>
        </section>
    );
};

export default AppFooter;
