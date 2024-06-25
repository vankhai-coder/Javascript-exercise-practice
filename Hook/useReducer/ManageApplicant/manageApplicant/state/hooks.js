import { useContext } from "react"
import { StoreContext } from '../store'

export const useStore = () => {
    const [state, dispatch] = useContext(StoreContext)
    return [state, dispatch]
}