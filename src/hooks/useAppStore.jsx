import { create } from 'zustand'

export default create((set, get) => ({
  globalState: 'loading', // loading
  setGlobalState: (_state) => set(() => ({ globalState: _state })),
}))
