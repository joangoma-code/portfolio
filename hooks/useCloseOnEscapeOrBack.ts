import { useEffect } from "react";

export default function useCloseOnEscapeOrBack(active: boolean, onClose: () => void) {
  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const handlePopState = () => {
      onClose();
    };

    try {
      window.history.pushState({ modal: true }, "");
    } catch (e) {
      // ignore
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);

      try {
        const st = window.history.state as any;
          if (st && st.modal) {
            const { modal, ...rest } = st;
            window.history.replaceState(rest, "");
          }
      } catch (e) {
        // ignore
      }
    };
  }, [active, onClose]);
}
