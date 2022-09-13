export const _slideUp = (target: HTMLElement, duration = 500, showmore = 0) => {
    if (!target.classList.contains("_slide")) {
        console.log("slideUp");

        target.classList.add("_slide");
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.height = `${target.offsetHeight}px`;
        target.offsetHeight;
        target.style.overflow = "hidden";
        target.style.height = showmore ? `${showmore}px` : `0px`;
        target.style.paddingTop = "0";
        target.style.paddingBottom = "0";
        target.style.marginTop = "0";
        target.style.marginBottom = "0";
        window.setTimeout(() => {
            target.hidden = !showmore ? true : false;
            !showmore ? target.style.removeProperty("height") : null;
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            !showmore ? target.style.removeProperty("overflow") : null;
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
            target.classList.remove("_slide");
            // Создаем событие
            document.dispatchEvent(
                new CustomEvent("slideUpDone", {
                    detail: {
                        target: target,
                    },
                })
            );
        }, duration);
    }
};

export const _slideDown = (target: HTMLElement, duration = 500, showmore = 0) => {
    if (!target.classList.contains("_slide")) {
        target.classList.add("_slide");
        target.hidden = target.hidden && false;
        showmore ? target.style.removeProperty("height") : null;
        const height = target.offsetHeight;
        target.style.overflow = "hidden";
        target.style.height = showmore ? `${showmore}px` : `0px`;
        target.style.paddingTop = "0";
        target.style.paddingBottom = "0";
        target.style.marginTop = "0";
        target.style.marginBottom = "0";
        target.offsetHeight;
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.height = height + "px";
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        window.setTimeout(() => {
            target.style.removeProperty("height");
            target.style.removeProperty("overflow");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
            target.classList.remove("_slide");
            // Создаем событие
            document.dispatchEvent(
                new CustomEvent("slideDownDone", {
                    detail: {
                        target: target,
                    },
                })
            );
        }, duration);
    }
};

export const _slideToggle = (target: HTMLElement, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
};

// * <SPOLLERS> ==============================================================================================================================
export function spollers() {
    const spollersArray = document.querySelectorAll<HTMLElement>("[data-spollers]");
    if (spollersArray.length > 0) {
        // Получение обычных слойлеров
        const spollersRegular = Array.from(spollersArray).filter((item) => {
            return !item?.dataset?.spollers?.split(",")[0];
        });

        // Работа с контентом
        const initSpollerBody = (spollersBlock: HTMLElement, hideSpollerBody = true) => {
            const spollers = spollersBlock.querySelectorAll<HTMLElement>("[data-spoller]");
            if (spollers.length) {
                const spollerTitles = Array.from(spollers).filter(
                    (item) => item.closest("[data-spollers]") === spollersBlock
                );
                spollerTitles.forEach((spollerTitle) => {
                    if (hideSpollerBody) {
                        spollerTitle.removeAttribute("tabindex");
                        if (!spollerTitle.classList.contains("_spoller-active")) {
                            const body = spollerTitle.nextElementSibling as HTMLElement;
                            body!.hidden = true;
                        }
                    } else {
                        spollerTitle.setAttribute("tabindex", "-1");
                        const body = spollerTitle.nextElementSibling as HTMLElement;
                        body!.hidden = false;
                    }
                });
            }
        };

        const setSpollerAction = (e: MouseEvent) => {
            const el = e.target as Element;
            if (el.closest("[data-spoller]")) {
                const spollerTitle = el.closest("[data-spoller]");
                const spollersBlock = spollerTitle?.closest("[data-spollers]") as HTMLElement;
                const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed
                    ? parseInt(spollersBlock.dataset.spollersSpeed)
                    : 500;
                if (!spollersBlock.querySelectorAll("._slide").length) {
                    if (oneSpoller && !spollerTitle?.classList.contains("_spoller-active")) {
                        hideSpollersBody(spollersBlock);
                    }
                    spollerTitle?.classList.toggle("_spoller-active");
                    _slideToggle(spollerTitle?.nextElementSibling as HTMLElement, spollerSpeed);
                }
                e.preventDefault();
            }
        };

        const hideSpollersBody = (spollersBlock: HTMLElement) => {
            const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
            const spollerSpeed = spollersBlock.dataset.spollersSpeed
                ? parseInt(spollersBlock.dataset.spollersSpeed)
                : 500;
            if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                spollerActiveTitle.classList.remove("_spoller-active");
                _slideUp(spollerActiveTitle.nextElementSibling as HTMLElement, spollerSpeed);
            }
        };

        // Инициализация
        const initSpollers = (spollersArray: any, matchMedia: any = false) => {
            spollersArray.forEach((spollersBlock: any) => {
                spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                if (matchMedia.matches || !matchMedia) {
                    spollersBlock.classList.add("_spoller-init");
                    initSpollerBody(spollersBlock);
                    spollersBlock.addEventListener("click", setSpollerAction);
                } else {
                    spollersBlock.classList.remove("_spoller-init");
                    initSpollerBody(spollersBlock, false);
                    spollersBlock.removeEventListener("click", setSpollerAction);
                }
            });
        };

        // Получение слойлеров с медиа запросами
        const mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
        if (mdQueriesArray && mdQueriesArray.length) {
            mdQueriesArray.forEach((mdQueriesItem) => {
                // Событие
                mdQueriesItem.matchMedia.addEventListener("change", function () {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
        }

        // Инициализация обычных слойлеров
        if (spollersRegular.length) {
            initSpollers(spollersRegular, false);
        }

        // Закрытие при клике вне спойлера
        const spollersClose = document.querySelectorAll("[data-spoller-close]");
        if (spollersClose.length) {
            document.addEventListener("click", function (e) {
                const el = e.target as Element;
                if (!el.closest("[data-spollers]")) {
                    spollersClose.forEach((spollerClose) => {
                        const spollersBlock = spollerClose.closest("[data-spollers]") as HTMLElement;
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed
                            ? parseInt(spollersBlock.dataset.spollersSpeed)
                            : 500;
                        spollerClose.classList.remove("_spoller-active");
                        _slideUp(spollerClose.nextElementSibling as HTMLElement, spollerSpeed);
                    });
                }
            });
        }
    }
}

export const _closeAllSpollers = () => {
    const activeSpollers = document.querySelectorAll<HTMLElement>("[data-spoller]._spoller-active");
    if (activeSpollers.length > 0) {
        Array.from(activeSpollers).map((item) => {
            if (!item.querySelectorAll("._slide").length) {
                item.classList.remove("_spoller-active");
                _slideUp(item.nextElementSibling as HTMLElement, 0);
            }
        });
    }
};
// * </SPOLLERS> ==============================================================================================================================

// Обработа медиа запросов из атрибутов
export function dataMediaQueries(array: NodeListOf<HTMLElement>, dataSetValue: string) {
    // Получение объектов с медиа запросами
    const media = Array.from(array).filter((item) => {
        if (item.dataset[dataSetValue]) {
            return item?.dataset[dataSetValue]?.split(",")[0];
        }
    });
    // Инициализация объектов с медиа запросами
    if (media.length) {
        const breakpointsArray: { value: string; type: string; item: HTMLElement }[] = [];
        media.forEach((item) => {
            const params = item.dataset[dataSetValue];
            const paramsArray = params?.split(",");
            paramsArray &&
                breakpointsArray.push({
                    value: paramsArray[0],
                    type: paramsArray[1] ? paramsArray[1].trim() : "max",
                    item,
                });
        });

        // Получаем уникальные брейкпоинты
        let mdQueries = breakpointsArray.map((item) => {
            return `(${item.type}-width: ${item.value}px),${item.value},${item.type}`;
        });

        mdQueries = uniqArray(mdQueries);
        const mdQueriesArray: any[] = [];

        if (mdQueries.length) {
            // Работаем с каждым брейкпоинтом
            mdQueries.forEach((breakpoint) => {
                const paramsArray = breakpoint.split(",");
                const mediaBreakpoint = paramsArray[1];
                const mediaType = paramsArray[2];
                const matchMedia = window.matchMedia(paramsArray[0]);
                // Объекты с нужными условиями
                const itemsArray = breakpointsArray.filter(function (item) {
                    if (item.value === mediaBreakpoint && item.type === mediaType) {
                        return true;
                    }
                });
                mdQueriesArray.push({
                    itemsArray,
                    matchMedia,
                });
            });
            return mdQueriesArray;
        }
    }
}

// Уникализация массива
export function uniqArray(array: string[]) {
    return array.filter((item, index, self) => self.indexOf(item) === index);
}

//========================================================================================================================================================

export let bodyLockStatus = true;
export const bodyLockToggle = (delay = 500) => {
    if (document.documentElement.classList.contains("_lock")) {
        bodyUnlock(delay);
    } else {
        bodyLock(delay);
    }
};

export const bodyUnlock = (delay = 500) => {
    const body = document.querySelector("body") as HTMLElement;
    if (bodyLockStatus) {
        const lock_padding = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
            Array.from(lock_padding).map((el) => {
                (el as HTMLElement).style.paddingRight = "0px";
            });
            body.style.paddingRight = "0px";
            document.documentElement.classList.remove("_lock");
        }, delay);

        bodyLockStatus = false;
        setTimeout(function () {
            bodyLockStatus = true;
        }, delay);
    }
};

export const bodyLock = (delay = 500) => {
    const body = document.querySelector("body") as HTMLElement;
    const wrapper = document?.querySelector(".wrapper") as HTMLElement;
    const padding = window.innerWidth - wrapper.offsetWidth + "px";
    if (bodyLockStatus) {
        const lock_padding = document.querySelectorAll("[data-lp]");
        Array.from(lock_padding).map((el) => {
            (el as HTMLElement).style.paddingRight = padding;
        });
        body.style.paddingRight = padding;
        document.documentElement.classList.add("_lock");

        bodyLockStatus = false;
        setTimeout(function () {
            bodyLockStatus = true;
        }, delay);
    }
};
