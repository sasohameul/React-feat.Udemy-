import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {

  const[filteredYear, setFilterYear] = useState('2023');

  // let filterInfoText = '2020, 2021 & 2022'; 파생된 상태

  // if(filteredYear === '2020') filterInfoText = '2021, 2022 & 2023';
  // else if (filteredYear === '2021') filterInfoText = '2020, 2022 & 2023';
  // else if (filteredYear === '2022') filterInfoText = '2020, 2021 & 2023';
  // else filterInfoText = '2020, 2021 & 2022';

  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses.js');
    // console.log(selectedYear);
    setFilterYear(selectedYear);
  }

  const filterdExpenses = props.items.filter(expense => {return expense.date.getFullYear().toString() === filteredYear});

  //3번째 방법 {expensesContent} 변수에 담아서 로직을 줄이기
  let expensesContent = <p>No expenses found.</p>;
  if(filterdExpenses.length > 0) {
    expensesContent = filterdExpenses.map(expense =>
                      <ExpenseItem 
                      key={expense.id}
                      title={expense.title} 
                      amount={expense.amount} 
                      date={expense.date}
                      /> )
  }

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {/* <p>Data for years {filterInfoText} is hidden</p> 파생된 상태*/}
       
        {/* 2. 조건이 맞으면 && 뒤로 실행이 됨. 이렇게 두개로 쪼개서 표현하는게 더 가독성있음*/}
        {/* {filterdExpenses.length === 0 && <p>No expenses found.</p> }
        {filterdExpenses.length > 0 && filterdExpenses.map(expense =>
                                        <ExpenseItem 
                                        key={expense.id}
                                        title={expense.title} 
                                        amount={expense.amount} 
                                        date={expense.date}
                                        /> )}                              */}
        
       
       
       
       
        {/* {filterdExpenses.length === 0 ? <p>No expenses found.</p> 
                                      : filterdExpenses.map(expense =>
                                        <ExpenseItem 
                                        key={expense.id}
                                        title={expense.title} 
                                        amount={expense.amount} 
                                        date={expense.date}
                                        />)} */} {/* 1. 이 표현식은 너무 길다. */}
       {expensesContent} 
      </Card>
    </div>
  );
}

export default Expenses;
