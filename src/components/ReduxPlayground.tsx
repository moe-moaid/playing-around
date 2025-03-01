import { useDispatch, useSelector } from 'react-redux';
import ThemeButton from './ThemeButton';
import { AppDispatch, RootState } from 'src/redux/store';
import { numberIncrement, numberDecrement, incrementAsync, decremenAsync } from 'src/redux/theme/themeSlice';
export default function ReduxPlayground() {
  const num = useSelector((state: RootState) => state.theme.num);
  const asyncNum = useSelector((state: RootState) => state.theme.asyncNum);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div>
        <p>click to touggle theme slice</p>
        <ThemeButton />
      </div>
      <div>
        <p>click to touggle number slice {num}</p>
        <div className="flex flex-row gap-x-4">
          <button
            className="border border-green-300 px-2 py-1 rounded-md"
            onClick={() => dispatch(numberIncrement(num + 10))}
          >
            Increment
          </button>
          <button
            className="border border-yellow-300 px-2 py-1 rounded-md"
            onClick={() => dispatch(numberDecrement(num - 10))}
          >
            Decrement
          </button>
        </div>
      </div>
      <div>
        <p>click to Increment the number Asyncronously {asyncNum}</p>
        <div className="flex flex-row gap-x-4">
          <button
            className="border border-green-300 px-2 py-1 rounded-md"
            onClick={() => dispatch(incrementAsync(asyncNum + 10))}
          >
            Increment
          </button>
          <button
            className="border border-yellow-300 px-2 py-1 rounded-md"
            onClick={() => dispatch(decremenAsync(asyncNum - 10))}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}
