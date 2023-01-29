import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  console.log(cash)


  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name, 
      id: Date.now(),
    }
    console.log(customers)
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }


  return (
    <div className={'app'}>
      <div style={{fontSize: '3rem', marginBottom: '10px'}}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button className={'add-cash'} onClick={() => addCash(Number(prompt()))}>Put money</button>
        <button className={'get-cash'} onClick={() => getCash(Number(prompt()))}>Withdraw money</button>
        <button className={'add-customer'} onClick={() => addCustomer(prompt())}>Add customer</button>
        <button className={'add-many-customer'} onClick={() => dispatch(fetchCustomers())}>Get customer from Database</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer => 
            <div onClick={() => removeCustomer(customer)} className={'customer'}>{customer.name}</div>
          )}
        </div>
        : 
        <div style={{fontSize: '2rem', marginTop: '20px'}}>
          There is no customers
        </div>}
    </div>
  );
}

export default App;
