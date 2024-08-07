import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface isMobileT {
  isMobile: boolean
  isMobileChange: (mobileBoolean: boolean) => void
}

export const useIsMobileStore = create<isMobileT>()(
  devtools(
    (set) => ({
      isMobile: false,
      isMobileChange: (mobileBoolean) =>
        set(() => ({ isMobile: mobileBoolean })),
    }),
    { name: 'isMobile' },
  ),
)
