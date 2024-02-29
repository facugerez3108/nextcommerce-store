import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";



interface CartStoreProps {
    items: Product[]
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStoreProps>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);

            if(existingItem) {
                return toast("El item ya está en el carro")
            }

            set({items: [...get().items, data]});
            toast.success("Item agregado al carro")
        },
        removeItem: (id: string) => {
            set({items: [...get().items.filter((item) => item.id !== id)] });
            toast.success("Item eliminado del carro")
        },
        removeAll: () => set({items: []})
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)
export default useCart;