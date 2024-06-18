import {z} from "zod";

export const addProductValidationSchema = z.object({
    name: z.string({
        required_error: "Product name is required"
    })
        .trim()
        .min(1,"Product name is required")
})
