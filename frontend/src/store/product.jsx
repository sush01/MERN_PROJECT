
import {create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts:(products) => set({ products}),

  createProduct: async(newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price){
      return {success:false, message: "Please fill in all fields."}
    }

    try{

    const res = await fetch("/api/products",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if(!res.ok){
      const errorText = await res.text();
      throw new Error(`Error: ${res.status} - ${errorText}`);
    }
    
    const data = await res.json();
    set((state) => ({products:[...state.products, data.data] }));
    return { success: true, message: "Product created successfully"};
  }
    catch (error) {
    console.error("Error creating product:", error);
    return { success: false, message: "Failed to create product. Please try again." };
  }
  }

}));