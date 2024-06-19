import {z} from "zod";

export const addProductToInventorySchema = z.object({
    name: z.string({
        required_error: "Product name is required"
    })
        .trim()
        .min(1,"Product name is required"),
    quantity: z.number({
        required_error: "Quantity is required",
        invalid_type_error: "Quantity must be a number",
    }).positive("Quantity must be greater than 0").int()
})
