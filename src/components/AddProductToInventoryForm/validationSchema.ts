import {z} from "zod";

export const addProductToInventorySchema = z.object({
    name: z.string({
        required_error: "Product name is required"
    })
        .trim()
        .min(1,"Product name is required"),
    quantity: z.number().positive("Quantity must be greater than 0").int()
})
