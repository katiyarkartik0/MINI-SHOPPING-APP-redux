import { useDispatch, useSelector } from "react-redux";
import { removeCreator } from "../redux/action";


let Cart = (props) => {
  let state = useSelector((state)=>state);
  let total = 0;

  let filteredArr = state.filter((el)=>{
    if(el.qty>0){
      return el;
    }
  })

  let dispatch = useDispatch();

    return (
      <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredArr.map((el,index)=>{
              let amount = el.qty*el.price;
              
              total = total + amount;
              return <tr>
                <td>{index+1}</td>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.qty}</td>
                <td>{amount}</td>
                <td><button onClick={()=>{
                  dispatch(removeCreator(el.id))
                }}>Remove</button></td>
              </tr>
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };
  
  export default Cart;