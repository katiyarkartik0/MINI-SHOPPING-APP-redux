import { useHistory } from "react-router-dom";
import "./product.css";
import {addCreator} from "../redux/action";
import { useDispatch } from "react-redux";

let Product = (props) => {
  let history = useHistory();
  let dispatch = useDispatch();
  return (
    <div className="product-card">
      <div className="product-img">
        <img onClick={()=>{
          history.push(`/preview/${props.data.id}`)
        }}
          src={props.data.img}
          alt=""
        />
      </div>
      <div className="product-btn">
        <button onClick={()=>{
          dispatch(addCreator(props.data.id))
        }}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;