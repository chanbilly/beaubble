import { create } from 'zustand'

const useAppStore = create((set) => ({
  globalState: 'loading', // loading
  setGlobalState: (_state) => set(() => ({ globalState: _state })),
}))

export default useAppStore
