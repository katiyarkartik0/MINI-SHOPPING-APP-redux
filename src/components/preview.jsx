import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./preview.css";
import { addCreator } from "../redux/action"


let Preview = () => {
    let { id } = useParams();
    let state = useSelector((state)=>state);
    let reqObj = state[id];
    let dispatch = useDispatch();

    return (<>
    <div className="preview-container">
        <div className = "preview-img-container">
            <img src = {reqObj.img}
            alt=""/>
        </div>

        <div className="preview-listing">
            <h2>{reqObj.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quis rem est cupiditate quaerat qui vel modi aliquam dignissimos sunt. Quo sapiente, ex beatae omnis fugiat saepe. Dolorem, ratione tempora?
            </p>
            <button onClick={()=>{
                dispatch(addCreator(reqObj.id))
            }}>Add to Cart</button>
        </div>
    </div>
    </>);
  };
  
  export default Preview;