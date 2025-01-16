import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setCount } from "../redux/slices/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counterReducer);

  return (
    <div className="vh-100 w-100 d-grid place-items-center">
      <div className="d-flex flex-column gap-5 align-items-center justify-content-center">
        <h2>Sayaç</h2>

        <div className="d-flex gap-4 align-items-center justify-content-center">
          <button onClick={() => dispatch(decrease())}>Azalt</button>

          <span className="fs-1">{count}</span>

          <button onClick={() => dispatch(increase())}>Arttır</button>

          <button onClick={() => dispatch(setCount(0))}>Sıfırla</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
