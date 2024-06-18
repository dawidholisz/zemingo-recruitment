import Button from "../shared/Button";
import Box from "../shared/Box";
import {InventoryItem} from "../../types";
import {useUpdateInventoryItemsMutation} from "../../api";
import {useCallback} from "react";
import toast from "react-hot-toast";

type InventoryListProps = {
    items: InventoryItem[]
    removeItem: (item:InventoryItem)=>void
}
const InventoryList = ({items,removeItem}: InventoryListProps) => {
    const [saveInventoryList] = useUpdateInventoryItemsMutation()
    const handleListSave = useCallback(()=>{
        saveInventoryList(items)
            .unwrap()
            .then(()=>toast.success("List saved successfully"))
            .catch((error)=>toast.error(error.data.error || "Failed to save list"))
    },[items])
    return (
        <Box title="Items">
            <table className="inventory-list">
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>

                {items?.map((item) => (
                    <tr key={item.name}>
                        <td>
                            {item.name}
                        </td>
                        <td>{item.quantity}
                        </td>
                        <td>
                            <Button onClick={() => removeItem(item)}>-</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={3}>
                        <Button onClick={handleListSave}>Save</Button>
                    </td>
                </tr>
                </tfoot>
            </table>
        </Box>
    )
}
export default InventoryList;
