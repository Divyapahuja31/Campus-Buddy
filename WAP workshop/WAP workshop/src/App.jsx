import { useState, useEffect } from 'react'
import './App.css'

import PocketBaseConnectionCreator from 'pocketbase'

const PBconnection = new PocketBaseConnectionCreator('http://127.0.0.1:8090')

function App() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchData() {
      const records = await PBconnection.collection('categories').getFullList()
      setCategories(records)
    }

    fetchData()
  }, [])

  return (
    <>
      <table className="categorytable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td
                style={{
                  backgroundColor: cat.color,
                }}>
                {cat.color}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App 