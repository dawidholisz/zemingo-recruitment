import AddProductToInventoryForm from "../AddProductToInventoryForm";
import InventoryList from "../InventoryList";
import {useGetInventoryItemsQuery} from "../../api";
import {useCallback, useEffect, useState} from "react";
import {InventoryItem} from "../../types";

const AddInventoryItem = () => {
    const {data: inventoryItems = [], isFetching} = useGetInventoryItemsQuery()
    const [localItems, setLocalItems] = useState(inventoryItems)

    useEffect(() => {
        setLocalItems(inventoryItems)
    }, [inventoryItems])

    const handleInventoryItemAdd = useCallback((item: InventoryItem) => {
        setLocalItems(items => [...items, item])
    }, [])

    const handleInventoryItemRemove = useCallback((item: InventoryItem) => {
        setLocalItems(items => items.filter(inventoryItem => inventoryItem.name !== item.name))
    }, [])

    return (
        <>
            <AddProductToInventoryForm addItem={handleInventoryItemAdd}/>
            {isFetching
                ? <p>Loading...</p>
                : <InventoryList items={localItems} removeItem={handleInventoryItemRemove}/>}
        </>

    );
};

export default AddInventoryItem;
