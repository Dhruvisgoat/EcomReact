import React from "react";
import Products from "../product";

export const ShopContext=React.createContext(null);
//store states 

const getdefaultcart=()=>{
    const cart={};
    for(let i=0;i<Products.length;i++){
        cart[i]=0;
    }
    return cart;
    //cart is an object which contains an key value pairs of product id and quantity
};

export const ShopcontextProvider=(props)=>{
    const [cart,setcart]=React.useState(getdefaultcart());
    const [total,settotal]=React.useState(0);

    const setgivenvalue=(id,value)=>{
        const newcart={...cart};
        newcart[id]=value;
        setcart(newcart);
    };
    const addtocart=(id)=>{
        const newcart={...cart};
        newcart[id]=newcart[id]+1;
        setcart(newcart);
    };
    const removefromcart=(id)=>{

        const newcart={...cart};
        if(newcart[id]>0){
            newcart[id]=newcart[id]-1;
        }
        setcart(newcart);
    };
    const gettotal=()=>{
        let total=0;
        for(let i=0;i<Products.length-1;i++){
            total=total+Products[i].price*cart[i+1];
        }
        settotal(total);
        console.log(total);
    };
    React.useEffect(()=>{gettotal()},[cart]);

    return(
        <ShopContext.Provider value={{cart,addtocart,removefromcart,total,setgivenvalue}}>
            {props.children}
        </ShopContext.Provider>
    );
}