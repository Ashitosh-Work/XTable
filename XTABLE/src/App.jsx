import { useRef, useState } from 'react'
import './App.css'

function App() {

  const fixedData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];

  const [data, setData] = useState(fixedData);

  const dateSorter = () => {
    let sortedData = [...data].sort((a, b) =>
      (Number(a.date.split("-").join("")) === Number(b.date.split("-").join(""))) ?
        b.views - a.views :
        Number(b.date.split("-").join("")) - Number(a.date.split("-").join(""))
    )
    setData(sortedData);
  }

  const viewsSorter = () => {
    let sortedData = [...data].sort((a, b) => (Number(a.views) === Number(b.views)) ? b.date - a.date : Number(b.views) - Number(a.views));
    setData(sortedData);
  }


  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={() => dateSorter()}>Sort by Date</button>
      <button onClick={() => viewsSorter()}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Views</th>
            <th scope="col">Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, idx) =>
            <>
              <tr>
                <td>{ele.date}</td>
                <td>{ele.views}</td>
                <td>{ele.article}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </>
  )
}

export default App
