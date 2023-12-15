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
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {/* <p>Data for years {filterInfoText} is hidden</p> */}
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
