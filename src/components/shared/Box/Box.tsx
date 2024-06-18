import {PropsWithChildren} from "react";

type BoxProps = PropsWithChildren<React.HTMLProps<HTMLDivElement>&{
    title?: string;
}> ;
const Box = ({title,children,...props}: BoxProps) => <div className="box" {...props}>
    {title && <h2 className="box__title">{title}</h2>}
    {children}
</div>

export default Box;
