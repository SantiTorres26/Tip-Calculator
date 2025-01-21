import { Dispatch, useMemo } from "react";
import { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer";

type OrderTotalProps = {
    order: OrderItem[],
    tip: number
    dispatch: Dispatch<OrderActions>

}

export default function OrderTotal({ order, tip, dispatch }: OrderTotalProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tip, [tip, order])

    //UseMEMO para evitar renderizarciones innescesarias en el codigo. .REDUCE toma dos parametros e itera, el valor inicial es el 0 ultimo. Itera y calcula el subtotal.


    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>
                    Subtotal a pagar:{''}
                    <span className="font-bold">${subtotalAmount}</span>
                </p>

                <p>
                    Propina:{''}
                    <span className="font-bold">${tipAmount}</span>
                </p>

                <p>
                    Total a pagar:{''}
                    <span className="font-bold">${totalAmount}</span>
                </p>

            </div>

            <button
                className="w-full bg-black text-white p-3 uppercase font-bold mt-10 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={() => dispatch({type: 'place-order'})}
                >
               Guardar Orden

            </button>
        </>

    )
}
