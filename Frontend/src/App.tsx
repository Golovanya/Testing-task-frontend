import { useEffect, useState } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react"; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from "ag-grid-community";

interface iData {
  articleid: number,
  subarticleid: number,
  articlename: string,
  external_str_id: number,
  ecrlongname: string,
  sectionname: string,
}

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
  const [data, setData] = useState<null | iData[]>(null);
  const fetchDataAsync = async () => {
    const fetchedData = await fetchData();
    setData(fetchedData);
  };
  useEffect(() => {
    fetchDataAsync();
  }, []);

  const colDefs: ColDef<iData>[] = [
    { field: "articleid", flex: 1 },
    { field: "subarticleid", flex: 1 },
    { field: "articlename", flex: 1 },
    { field: "external_str_id", flex: 1 },
    { field: "ecrlongname", flex: 2 },
    { field: "sectionname", flex: 1 },
  ];

  return (
    <div className="container">
      <div className="ag-theme-quartz-dark" 
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
