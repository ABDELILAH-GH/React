import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByValue, minus, minusByValue, reset } from "./actions";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5 w-50 py-10">
      <div className="card border-0 bg-light text-dark">
        <div className="card-body">
          <h1 className="text-center mb-4">Counter : <span className="text-primary">{count}</span></h1>
          <div className="d-flex flex-column align-items-center">
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-success me-2 fs-5"
                onClick={() => dispatch(increment())}
              >
               Plus +1
              </button>
              <button
                type="button"
                className="btn btn-warning fs-5"
                onClick={() => dispatch(minus())}
              >
                Minus -1
              </button>
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-success me-2 fs-5"
                onClick={() => dispatch(incrementByValue(5))}
              >
                Plus +5
              </button>
              <button
                type="button"
                className="btn btn-warning fs-5"
                onClick={() => dispatch(minusByValue(5))}
              >
                Minus -5
              </button>
            </div>
            <button
              type="button"
              className="btn btn-danger me-3 fs-5"
              onClick={() => dispatch(reset())}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
