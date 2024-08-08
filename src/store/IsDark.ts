import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface isDarkT {
  isDark: boolean
  isDarkChange: () => void
}

export const useIsDarkStore = create<isDarkT>()(
  devtools(
    (set) => ({
      isDark: false,
      isDarkChange: () => set((state) => ({ isDark: !state.isDark })),
    }),
    { name: 'isDark' },
  ),
)
