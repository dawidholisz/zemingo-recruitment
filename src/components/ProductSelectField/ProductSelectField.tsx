import Select, {Props} from 'react-select';
import {useGetProductsQuery} from "../../api";
import {useMemo} from "react";

const ProductSelectField = (props:Props) => {
    const {data:products=[],isLoading} = useGetProductsQuery()
    const options = useMemo(()=>products.map(({name})=>({value:name,label:name})),[products])
    return (
        <Select isLoading={isLoading} name="products" {...props} options={options} placeholder="Select product..." />
    );
};

export default ProductSelectField
