import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Papa, { ParseResult } from 'papaparse';
import shortid from 'shortid';

type Data = {
  'Employee ID #1': string
  'Employee ID #2': string
  'Project ID': string
  'Days worked': string
}

type Values = {
  data: Data[]
}

const headerKeys = ['Employee ID #1', 'Employee ID #2', 'Project ID', 'Days worked Together']

function App() {
  const [file, setFile] = useState<File>();
  const [values, setValues] = React.useState<Values | undefined>()

  const getCSV = useCallback (() => {
    if (file) {
      Papa.parse(file, {
        header: true,
        download: true,
        skipEmptyLines: true,
        delimiter: ",",
        complete: (results: ParseResult<Data>) => {
          setValues(results)
        },
      })
    }
  }, [file]);

  const handleUploadFile = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {

      if (event.target.files) {
        const newValue = event.target.files[0];
        setFile(newValue)
      }
    },
    [],
  );

  useEffect(() => {
    getCSV()
  }, [file, getCSV])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Upload a cvs file to read the info
        </p>

        <form>
          <input type="file" accept='.csv' onChange={handleUploadFile} />
        </form>

        <table>
        <thead>
          <tr key={"header"} >
            {values?.data && headerKeys.map((key) => (
              <th key={shortid.generate()}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {values?.data.map((item) => (
            <tr key={shortid.generate()}>
              {Object.values(item).map((val) => (
                <td key={shortid.generate()}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      </header>
    </div>
  );
}

export default App;
