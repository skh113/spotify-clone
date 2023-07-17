import { create } from "zustand";

interface PlayerStore {
  IDs: string[];
  activeID?: string;
  setID: (ID: string) => void;
  setIDs: (IDs: string[]) => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  IDs: [],
  activeID: undefined,
  setID: (ID: string) => set({ activeID: ID }),
  setIDs: (IDs: string[]) => set({ IDs: IDs }),
  reset: () => set({ IDs: [], activeID: undefined }),
}));

export default usePlayer;
