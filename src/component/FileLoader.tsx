import React, {useCallback, useEffect, useState} from 'react';
import Papa, {ParseResult} from 'papaparse';
import shortid from 'shortid';
import {biggestDate, dateCalculator, smallestDate} from '../utiles/functions';


type Data = {
  'EmpID': string
  'ProjectID': string
  'DateFrom': string
  'DateTo': string
}

type headerKeys = {
  'Employee ID #1': string,
  'Employee ID #2': string,
  'Project ID': string,
  'Days worked': number,
}

const header = ['Employee ID #1', 'Employee ID #2', 'Project ID', 'Days worked Together']

function FileLoader() {
  const [file, setFile] = useState<File>();
  const [values, setValues] = React.useState<Data[]>()
  let commonProjects: Data[][] = [];
  let finalValues: headerKeys[] = [];

  const getCSV = useCallback(() => {
    if (file) {
      Papa.parse(file, {
        download: true,
        skipEmptyLines: true,
        delimiter: ",",
        complete: (results: ParseResult<string[]>) => {

          const objMade = results.data.map((a) => ({
            'EmpID': a[0],
            'ProjectID': a[1],
            'DateFrom': a[2],
            'DateTo': a[3],
          }))

          setValues(objMade)
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
  }, [getCSV])

  if (values) {
    for (let i = 0; i < values.length; i++) {
      for (let j = i; j < values.length; j++) {
        if (values[i].EmpID !== values[j].EmpID && values[i].ProjectID === values[j].ProjectID) {
          commonProjects = [...commonProjects, [values[i], values[j]]]
        }
      }
    }
  }

  finalValues = commonProjects.map((a) => ({

    "Employee ID #1": a[0].EmpID,
    "Employee ID #2": a[1].EmpID,
    "Project ID": a[0].ProjectID,
    "Days worked": Number(dateCalculator(biggestDate(a[0].DateFrom, a[1].DateFrom), smallestDate(a[0].DateTo, a[1].DateTo)))

  })).filter((a) => a['Days worked'] > 0)

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
              {values && header.map((key) => (
                <th key={shortid.generate()}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {finalValues && finalValues.map((item) => (
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

export default FileLoader;
