import { Provider } from 'react-redux';
import store from './store';
import Counter from './counter';

export default function ReduxNormale() {
   return (
      <>
         <Provider store={store}>
            <Counter />
         </Provider>
      </>
   );
}
