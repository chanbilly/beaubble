import { create } from 'zustand'

const useAppStore = create((set) => ({
  // data
  wines: ['Elysian Fields', 'Lunar Bliss', 'Mystic Oak', 'Celestial Reserve', 'Golden Harvest', 'Eclipse Noir', 'Ruby Crest', 'Crimson Nectar'],
  
  // global state
  globalState: 'loading', // loading
  setGlobalState: (_state) => set(() => ({ globalState: _state })),


}))

export default useAppStore
