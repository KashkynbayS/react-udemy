import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employers-list/employers-list";
import EmployeesAddForm from "../employers-add-form/employees-add-form";

function App() {

  const data = [
    {name: 'Ali', salary: 500, increase: false},
    {name: 'Mali', salary: 600, increase: true},
    {name: 'Tali', salary: 700, increase: false},
  ]

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>

  );
}

export default App;
