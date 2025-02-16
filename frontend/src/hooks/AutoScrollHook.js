import { useEffect, useRef } from "react";

const useAutoScroll = () => {
    const targetRef = useRef(null);

    useEffect(() => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return targetRef;
};

export default useAutoScroll;
