import create from "zustand";

interface IStore {
  dark: boolean;
  loggedIn: boolean;
  toggleDark: () => void;
  login: () => void;
  logout: () => void;
}

export const useStore = create<IStore>((set, get) => ({
  dark: localStorage.getItem("theme") === "dark",
  loggedIn: localStorage.getItem("loggedIn") === "true",
  toggleDark: () => {
    const pDark = get().dark;
    if (pDark) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    set({ dark: !pDark });
  },
  login: () => {
    localStorage.setItem("loggedIn", "true");
    set({ loggedIn: true });
  },
  logout: () => {
    localStorage.setItem("loggedIn", "false");
    set({ loggedIn: false });
  },
}));
