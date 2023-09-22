import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { pedirItemPorId } from "../helpers/pedirDatos";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const id = useParams().id;
    

    const [item, setItem] = useState(null);


    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) =>{
                setItem(res);
            })
        }, [id])

    return (
        <div>
            {item &&  <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer