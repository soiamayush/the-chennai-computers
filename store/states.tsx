import create from "zustand";

const useStore = create((set) => ({
  searchText: "",
  setSearchText: (text: any) => set({ searchText: text }),
}));

export default useStore;
