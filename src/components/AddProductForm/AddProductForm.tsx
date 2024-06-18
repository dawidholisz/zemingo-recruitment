import toast from "react-hot-toast";
import {SubmitHandler, useForm} from "react-hook-form";
import {Product} from "../../types";
import Button from "../shared/Button";
import {useAddProductMutation} from "../../api";
import {addProductValidationSchema} from "./validationSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";


const AddProductForm = () => {
    const [addProduct, {isLoading}] = useAddProductMutation()

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    } = useForm<Product>({
        resolver: zodResolver(addProductValidationSchema),
        mode: "all"
    })
    const onSubmit: SubmitHandler<Product> = (data) => {
        addProduct(data).unwrap().then(() => {
            toast.success("Product added successfully!")
                reset()
            }
        ).catch((error) => {
            toast.error(error.data.error || "Failed to add product")
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input className="input" {...register("name")} placeholder="Product Name"/>
            {errors.name && <span className="form__error">{errors.name.message}</span>}
            <Button type="submit" disabled={isLoading}>Save</Button>
        </form>
    );
};

export default AddProductForm;
