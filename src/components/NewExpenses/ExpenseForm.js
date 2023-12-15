import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value); //개별 useState 사용 하는 경우

    // setUserInput({
    //   ...userInput, 기존 키-값
    //   enteredTitle: event.target.value//override 새로운 키-값
    // }); 이 방법은 좋지 않음, 리액트는 상태업데이트를 예약해서 즉시 처리하지 않기 때문에

    // setUserInput((prevState) =>{

    //   return {...prevState, enteredTitle: event.target.value};
    // });
    // 다수의 상태 업데이트를 동시에 예약할 경우 오래되었거나 잘못된 상태를 의존하지 않기 위해 이 방법을 써야함
    // 이 함수를 사용해야 최신 상태가 되도록 보장해줌
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value
    // });
  };
  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value

    // });
  };

  // const inputChangeHandler = (identifier, value) => {

  //   if(identifier === 'title') setEnteredTitle(value);
  //   else if(identifier === 'amount') setEnteredAmount(value);
  //   else setEnteredDate(value);

  // }; 한꺼번에 처리하고싶을때 !

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData); 
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input type="text" onChange={(event)=>{inputChangeHandler('title',event.target.value)}} /> 화살표함수를 사용해야 onChange 이벤트가 발생할때마다 실행해줌 */}
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
