import { useEffect, useState } from "react";
import useIsomorphicLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";

type ReturnType = [boolean, (locked: boolean) => void];

function useLockedBody(initialLocked = false): ReturnType {
    const [locked, setLocked] = useState(initialLocked);

    // Do the side effect before render
    useIsomorphicLayoutEffect(() => {
        if (!locked) {
            return;
        }

        // Save initial body style
        const originalPaddingRight = document.body.style.paddingRight;
        const wrapper = document.querySelector(".wrapper") as HTMLElement | null;
        const lock_padding = document.querySelectorAll<HTMLElement>("[data-lp]");

        // Lock body scroll
        // Get the scrollBar width
        const scrollBarWidth = wrapper ? window.innerWidth - wrapper?.offsetWidth : null;
        document.documentElement.classList.add("_lock");

        // Avoid width reflow
        if (scrollBarWidth) {
            lock_padding.forEach((el) => {
                el.style.paddingRight = `${scrollBarWidth}px`;
            });
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        }

        return () => {
            if (scrollBarWidth) {
                lock_padding.forEach((el) => {
                    el.style.paddingRight = originalPaddingRight;
                });
                document.body.style.paddingRight = originalPaddingRight;
            }
            document.documentElement.classList.remove("_lock");
        };
    }, [locked]);

    // Update state if initialValue changes
    useEffect(() => {
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
    }, [initialLocked]);

    return [locked, setLocked];
}

export default useLockedBody;
