import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByValue, minus, minusByValue, reset } from "./actions";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5 w-50">
      <div className="card shadow-light border-0 bg-dark text-light">
        <div className="card-body">
          <h1 className="text-center mb-4">Counter: {count}</h1>
          <div className="d-flex flex-column align-items-center">
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-success me-2"
                onClick={() => dispatch(increment())}
              >
               Increment +1
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => dispatch(minus())}
              >
                Minus -1
              </button>
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-success me-2"
                onClick={() => dispatch(incrementByValue(5))}
              >
                Increment +5
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => dispatch(minusByValue(5))}
              >
                Minus -5
              </button>
            </div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
