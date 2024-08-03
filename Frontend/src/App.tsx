import { useEffect, useState } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

async function fetchData() {
  try {
    const { data } = await axios.get("http://localhost:3000/data");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}

function App() {
  const [data, setData] = useState(null);
  const fetchDataAsync = async () => {
    const fetchedData = await fetchData();
    setData(fetchedData);
  };
  useEffect(() => {
    fetchDataAsync();
  }, []);

  const [colDefs] = useState([
    { field: "articleid", flex: 1 },
    { field: "subarticleid", flex: 1 },
    { field: "articlename", flex: 1 },
    { field: "external_str_id", flex: 1 },
    { field: "ecrlongname", flex: 2 },
    { field: "sectionname", flex: 1 },
  ]);

  return (
    <div className="container">
      <div
        className="ag-theme-quartz-dark" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={data}
          columnDefs={colDefs}
          pagination={true}
          paginationPageSize={50}
        />
      </div>
    </div>
  );
}

export default App;
