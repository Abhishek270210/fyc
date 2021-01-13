

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