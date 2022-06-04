import React from "react";
import './Cart.css'
import ProductList from "./ProductList";
import Button from "./Button";
import { FaShoppingBasket} from 'react-icons/fa';
import Hamberger  from '../images/Hamberger.jpg'
import CheeseeB from '../images/CheeseB.jpg';
import Dberger from '../images/Dberger.jpg';
import Pastasan from '../images/Pastasan.jpg';
import Lazania from '../images/Lazania.jpg';
import Vegtables from '../images/Vegtables.jpg';
import PastaM from '../images/PastaM.jpg'


class Cart extends React.Component{
    //همبر ذغالی-برگر ایتالیایی-دوبل ایتالیایی -> تخفیف
    state={
            products:[
            {
            title:"همبرگر ذغالی"
            ,
            price:1500000
            ,
            discount:1000,
            
            src:Hamberger
            ,
            id:0
            ,
            count:1,

            
            }
            ,
            {
            title:"چیز برگر ایتالیایی"
            ,
            price:1700000
            , 
            src:CheeseeB
            ,
            id:1
            ,
            discount:1000,
            count:1


            }
            , 
            {
            title:"دوبل چیز برگر ایتالیایی"
            ,
            price:209000
            ,
            src:Dberger
            ,
            discount:2000,
            id:2
            ,
            count:1

            },
            {
            title:"پاستا سان ست"
            ,
            price:150000
            ,
            src:Pastasan
            ,
            id:3,

            
            count:1
    
            },
            {
            title:"لازانیا"
            ,
            price:165000
            ,
            src:Lazania
            ,
            id:4
            ,
            count:1
            }   
            ,
            {
            title:"بشقاب سبزیحات"
            ,
            price:85000
            ,
            src:Vegtables
            ,
            id:5
            ,
            count:1
            
            },
            {
            title:"پاستا مالیبو"
            ,
            price:114000
            ,
            src:PastaM
            ,
            id:6
            ,
            count:1
                
                },
        ]
            ,
            userBasket:[]
            ,
            totalPrice:0
            ,
            all:0
        }


        //for decrese
        miness=(id)=>{
            console.log(id);
            const newP=[...this.state.userBasket]
           console.log(newP);
           const index=newP.findIndex(item=>item.id===id)
           const updatedP={...newP[index]}
           if(updatedP.count>=2){
            const finall=newP[index].count--;
            console.log(updatedP.count);
            this.setState({
                count:finall
            }) 
           }
           else{
               this.remove(id)
               
           }
           

        }





        //for increse count
        add=(id)=>
        {
            console.log(id);
             const newP=[...this.state.userBasket]
            console.log(newP);
            const index=newP.findIndex(item=>item.id===id)
            const updatedP={...newP[index]}
            const finall=newP[index].count++;
            this.setState({
                count:finall
            }) 
         
          
        }
        
         


        //for add to userBasket
        addtoCart=(item)=>{
            const newCart = [...this.state.userBasket] ;
            const index = newCart.findIndex(p => p.id === item.id);
            console.log(index) ;
            if(index === -1 ){  
                newCart.push(item)
                this.setState({
                    userBasket:newCart  
                })  
            }else{
                alert("لطفا محصول را در سبد خربد کم و زیاد کنید")

            }      
                
           
        }

        remove=(id)=>{
            console.log(id);
             const arrayBasket=[...this.state.userBasket];
            const newList = arrayBasket.filter((item) => 
            item.id !== id
            );
             this.setState({
              userBasket:newList
          })
        }
           
        componentDidUpdate(){
            const totalPrice= this.state.userBasket.reduce((accumulator, currentItem)=>{
              return accumulator+ (currentItem.price*currentItem.count);
            }, 0);
            return(this.state.total=totalPrice)
        } 

        //for remove
        removeBasketHandler=()=>{
        const arrayBasket=[...this.state.userBasket];
        this.setState({
        userBasket:[]
        })
        }
       
        static getDerivedStateFromProps(props, state){
                const allCount= state.userBasket.reduce((accumulator, currentItem)=>{
            return accumulator+ (currentItem.count);
            }, 0);
 

            return{
                products: state.products,
                all: allCount,
            }
            } 

            estimateDiscount(){
                const totalDiscount = this.state.userBasket.reduce((sum, item)=>{
                    if(item.discount != undefined && item.discount != null)
                    {
                        return sum+(item.discount*item.count);
                    }
                    else 
                        return sum+0;
                },0);
                return totalDiscount;
            }
            
    render(){
        return(
            //make a container
            <div className="parent">
                <div className="product-parent">
                    {
                       //making component
                        this.state.products.map((item)=>{
                        return (
                                 <ProductList
                                    key={item.id}
                                    product={item}
                                    add={()=>{this.addtoCart(item)}}
                                />
                                )})    
                                
                                }
                </div>           
                <div className="shopping-cart-container">
                    <div className="icons">
                    <FaShoppingBasket size={50} />
                    <span className="circle">
                        {this.state.all}
                    </span>
                    </div>
                    <ul className="shopping-care-head">
                        <li>نام کالا</li>
                        <li>قیمت</li>
                        <li>تعداد</li>
                        <li>حدف</li>
                     </ul>
                    <ul className="product-container">


                        {
                            this.state.userBasket.length?
                            this.state.userBasket.map((item)=>{
                            return(
                                    <li className="parent-li" key={item.id}>
                                        <h5>
                                            {item.title}
                                        </h5>
                                         <p>
                                            {item.price*item.count}
                                        </p>
                                        <div className='btns'>
                                            <button onClick={(id)=>{this.add(item.id)}} className='increase'>+</button>
                                            <span>{item.count}</span>
                                            <button onClick={(id)=>{this.miness(item.id)}}>-</button>
                                        </div>
                                                        
                                        <button onClick={()=>{this.remove(item.id)}} className="remove">
                                           حدف   
                                        </button>
                                                   
                                     </li>
                                )
                                        })
                                        
                                        :<h2>
                                            سبد خرید خالی است
                                        </h2>
                            }
                        </ul>

                            <div className="shopping-cart-footer">
                                <p>{"مجموع تخفیف"+this.estimateDiscount()}</p>
                                <p>
                                    مبلغ قابل پرداخت:{this.componentDidUpdate()}
                                </p>
                                <div className="buttons">
                                    <button type="button" onClick={()=>this.removeBasketHandler()}>
                                        حذف
                                    </button>
                                    <button type="button">
                                        خرید نهایی
                                    </button>
                                </div>
                            </div>

                        
                </div>
          </div>

        )
    }
}
export default Cart;