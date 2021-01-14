// import Cartitem from "../../components/cart-item-component/cart-item";


export const additemtocart=(cartitems,newitem)=>{
   const  alreadyexists=cartitems.find(cartitem=>cartitem.id===newitem.id);
    if(alreadyexists)
    {
     return  cartitems.map(cartitem=>{
         return (
             cartitem.id===newitem.id ? {...cartitem,quantity:cartitem.quantity+1}:cartitem
         )
      })
    }
    else
    {
        return [...cartitems,{...newitem,quantity:1}];
    }
}

export const deleteitem=(cartitems,itemToDelete)=>{
    const alreadyexists=cartitems.find(cartitem=>cartitem.id===itemToDelete.id);
    if(alreadyexists.quantity===1)
    {
        return cartitems.filter(cartitem=> cartitem.id!==itemToDelete.id)
    }
   else
   {
        return cartitems.map(cartitem=> cartitem.id===itemToDelete.id ?  {...cartitem,quantity:cartitem.quantity-1}:cartitem) 
    }
}