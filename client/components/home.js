import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, selectedAll } from '../redux/reducers/myUsers'
import '../assets/css/table.css'
import ListItem from './listItem'

const Home = () => {
  const users = useSelector((s) => s.users.users)
  const selected = useSelector((s) => s.users.selected)
  const dispatch = useDispatch()
  const [allChecked, setAllChecked] = useState(false)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold shadow-md py-4 px-2 mb-10 flex justify-between">
          Users Selection
          <img
            className="h-8 w-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV38RrdmxkwiZG6sAI1G0joL654Yi7DgmjwONhGClQGN79E3Xf&usqp=CAU"
            alt="user avatar"
          />
        </h2>
      </div>
      <div className="container mx-auto pt-0">
        <table className="px-5 shadow-xl py-4 mb-8">
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={(e) => {
                  setAllChecked(e.target.checked)
                  dispatch(selectedAll(e.target.checked, users))
                }}
                checked={allChecked}
              />
            </th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
          {users.map((el) => (
            <ListItem key={el.name} el={el} allChecked={allChecked} />
          ))}
        </table>
        <div>
          <table className="px-5 shadow-xl py-4 mb-5">
            <th>Selected users:</th>
            <tr className="selectedUsers shadow-inner">
              <td>
                <div className=" overflow-auto h-24">
                  {selected.map((el) => (
                    <div key={el.id}>{el.name}</div>
                  ))}
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
