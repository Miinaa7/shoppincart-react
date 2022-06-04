import React from 'react';
import Button from './Button';
import './ProductList.css'

const ProductList=(props)=>{

    const {title, src, price, key, discount} = props.product;
   
    return(
            <div className='product'>
                {key}
                <div className='product-img'>
                    <img src={src} alt="tasvir" />
                </div>
                <div className='product-info'>
                    <h2>
                       {title}
                    </h2>
                    {
                        discount !=undefined && discount!=null?
                        <span className='beforeDiscount'>{(discount+price).toLocaleString()}</span>
                        :<></>
                    }
                    <p className={discount !=undefined && discount!=null ? "after-discount" :''}>
                        {price.toLocaleString()}
                    </p>

                    <Button add={props.add}>
                        اضافه کردن به سبد خرید
                    </Button>
                </div>
            </div>
        
    )
}
export default ProductList;