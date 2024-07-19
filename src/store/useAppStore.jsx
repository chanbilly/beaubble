import { create } from 'zustand'

const useAppStore = create((set) => ({
  wineData : [
    {
      name: "Elysian Fields",
      thumbnails: [
        { src: "/img/thumbnail-1.jpg", label: "EF Psittaciformes"},
        { src: "/img/thumbnail-2.jpg", label: "EF Noksae" },
        { src: "/img/thumbnail-3.jpg", label: "EF Corvus corone" }
      ]
    },
    {
      name: "Lunar Bliss",
      thumbnails: [
        { src: "/img/thumbnail-4.jpg", label: "LB Moon Cyclid" },
        { src: "/img/thumbnail-5.jpg", label: "Abyss Blue" }
      ]
    },
    { name: "Mystic Oak", thumbnails: [] },
    { name: "Celestial Reserve", thumbnails: [] },
    { name: "Golden Harvest", thumbnails: [] },
    { name: "Eclipse Noir", thumbnails: [] },
    { name: "Ruby Crest", thumbnails: [] },
    { name: "Crimson Nectar", thumbnails: [] },
  ],

  // global state
  globalState: 'loading', // loading
  setGlobalState: (_state) => set(() => ({ globalState: _state })),


}))

export default useAppStore
