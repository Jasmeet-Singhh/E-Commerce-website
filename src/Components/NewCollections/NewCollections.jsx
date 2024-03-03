import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
import style from "./NewCollections.module.css";
const NewCollections = ()=>{
 return(
    <div className={style["new-collections"]}>
       <h1>NEW COLLECTIONS</h1>
       <hr />
       <div className={style.collections}>
         {new_collection.map((item, i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
         })}
       </div>
    </div>
 )
}

export default NewCollections;