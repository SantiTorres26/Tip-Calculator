import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"
import { Dispatch } from "react"

type MenuItemProps = {
    item: MenuItem
    dispatch : Dispatch<OrderActions>
}
export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button
    className="border-2 border-teal-500  hover:bg-teal-200 w-full p-3 text-lg rounded-lg flex justify-between"
    onClick={() => dispatch({type : 'add-item', payload:{item}})}
    >
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    </button>
  )
}
