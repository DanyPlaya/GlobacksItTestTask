import { create } from 'zustand'

type UserStore = {
    postId: number | undefined
    setUserPostId: (id: number) => void
}

export const useUserStore = create<UserStore>()((set) => ({
    postId: undefined,
    setUserPostId: (id) => set((state) => ({ postId: state.postId = id })),
}))