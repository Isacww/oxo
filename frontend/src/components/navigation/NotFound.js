import React, { useEffect } from "react";
useEffect(() => {
    document.title = "OXO - 404";  // ✅ Change page title
}, []);
function NotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
        </div>
    );
}

export default NotFound;
