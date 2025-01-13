import { increment, incrementByVal } from "./actions";
import { useDispatch, useSelector } from "react-redux";
export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    < div className="container mt-3 w-50">
      <h2>Counter : {count}</h2>
      <button type="submit" class="btn btn-primary"
      onClick={()=>dispatch(increment())}
      >
        +1
      </button>
      <button type="submit" className="btn btn-info ms-3"
      onClick={()=> dispatch(incrementByVal(5))}
      >
        +5
      </button>
    </div>
  );
}
