import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = props => {

  const chartDataPoints = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0}

  ];

  for(const expense of props.expenses){ //props.expenses 가 객체가 아닌 배열이기에 of를 사용 (객체는 in)

    const expenseMonth = expense.date.getMonth(); //starting at 0 ==> Jan ==> 0
    chartDataPoints[expenseMonth].value += expense.ammount;
  }



  return(<Chart dataPoints={chartDataPoints}/>)
}

export default ExpensesChart;