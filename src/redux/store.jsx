import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import PropTypes from 'prop-types';

import rootReducer from './reducers/index';
import { Provider } from 'react-redux'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

const DataProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default DataProvider;

DataProvider.propTypes = {
    children: PropTypes.element.isRequired,
    
};
