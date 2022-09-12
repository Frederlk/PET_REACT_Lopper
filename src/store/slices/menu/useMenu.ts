import { useActions, useClickOutside, useEventListener } from "../../../hooks";
import { useAppSelector } from "../../../hooks/useRedux";

type ReturnType = {
    onOpenMenu: (e?: any) => void;
    onCloseMenu: (e?: any) => void;
    onToggleMenu: (e?: any) => void;
};

const useMenu = (ref?: any): ReturnType => {
    const { closeMenu, openMenu, setLock, setUnlock } = useActions();

    const { lockStatus } = useAppSelector((state) => state.bodyLock);
    const { menuStatus } = useAppSelector((state) => state.menu);

    const onOpenMenu = () => {
        if (!lockStatus && !menuStatus) {
            setLock();
            document.documentElement.classList.add("menu-open");
            openMenu();
        }
    };

    const onCloseMenu = () => {
        if (lockStatus && menuStatus) {
            closeMenu();
            document.documentElement.classList.remove("menu-open");
            setUnlock();
        }
    };

    const onToggleMenu = () => {
        lockStatus && menuStatus ? onCloseMenu() : onOpenMenu();
    };

    useEventListener("keydown", function (e) {
        if (e.which == 27 && e.code === "Escape") {
            onCloseMenu();
        }
    });

    ref ? useClickOutside(ref, onCloseMenu) : null;

    return { onOpenMenu, onCloseMenu, onToggleMenu };
};

export default useMenu;
