import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent {
  employeeSalaries = [
    {name : 'Seshu-In charge of home', amount: '15000'},
    {name : 'Tanai-Accountant and in charge', amount: '15000'},
    {name : 'Amala- Tutor', amount: '11000'},
    {name : 'Lakshmi-cooking', amount: '16000'},
    {name : 'Susheela-vessels and cleaning', amount: '10000'},
    {name : 'Rajitha-Helper', amount: '9000'},
    {name : 'Muthamma-Rest area cleaning', amount: '5000'},
    {name : 'Suresh washer man', amount: '9000'},
    {name : 'Drivers', amount: '24000'}
  ]

  maintenanceCost = [
    {name: 'Dry Ration & Groceries', amount: '96000'},
    {name: 'Rent', amount: '66950'},
    {name: 'Milk Bill', amount: '10440'},
    {name: 'Gas Bill', amount: '12500'},
    {name: 'Water bill', amount: '2100'},
    {name: 'Eggs', amount: '5500'},
    {name: 'Internet and Telephone bill', amount: '1100'},
    {name: 'Nutritional snacks', amount: '8000'},
    {name: 'Newspaper Bill', amount: '600'},
    {name: 'Power Bill', amount: '11000'},
  ]

  mealsCost = [
    {name:  'BREAKFAST', amount: 2900},
    {name:  'SNACKS', amount:  1100},
    {name:  'A VEGETARIAN MEAL', amount:  4200},
    {name:  'A NON-VEGETARIAN MEAL', amount:  6200},
    {name:  'FULL DAY MEAL VEG', amount:  9200},
    {name:  'FULL DAY MEAL NON VEG', amount:  11000},
    {name:  'GENERAL MEDICINES', amount:  500},
    {name:  'STATIONARY FOR ONE CHILD', amount:  800},
    {name:  'UNIFORM FOR ONE CHILD', amount:  900},
    {name:  'GROCERIES FOR RESIDENTIAL HOME', amount:  6000},
  ]

  kidsExpenses = [
    {name : 'clothing', amount: 11000},
    {name : 'SCHOOL UNIFORMS', amount: 3200},
    {name : 'STATIONARY', amount: 4200},
    {name : 'TRANSPORT', amount: 5490},
    {name : 'MISCELLANEOUS', amount: 2000},
  ]

  employeeSalariesTotal = this.employeeSalaries.reduce((total, item) => {
    return total + parseInt(item.amount);
  }, 0);

  maintenanceCostTotal = this.maintenanceCost.reduce((total, item) => {
    return total + parseInt(item.amount);
  }, 0);

  kidsExpensesTotal = this.kidsExpenses.reduce((total, item) => {
    return total + item.amount;
  }, 0);
}
