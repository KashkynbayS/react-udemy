import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employers-list/employers-list";
import EmployeesAddForm from "../employers-add-form/employees-add-form";

function App() {

  const data = [
    {name: 'Ali', salary: 500, increase: false, id: 1},
    {name: 'Mali', salary: 600, increase: true, id: 2},
    {name: 'Tali', salary: 700, increase: false, id: 3},
    {name: 'Bali', salary: 800, increase: false, id: 4},
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
