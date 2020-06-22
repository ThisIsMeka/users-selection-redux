import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectUser } from '../redux/reducers/myUsers'

const ListItem = (props) => {
  const [checked, setChecked] = useState(props.allChecked)
  const dispatch = useDispatch()

  useEffect(() => {
    setChecked(props.allChecked)
  }, [props.allChecked])

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onChange={(e) => dispatch(selectUser(e.target.checked, props.el))}
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
      </td>
      <td className="left">{props.el.name}</td>
      <td className="left">{props.el.username}</td>
      <td className="left">{props.el.email}</td>
    </tr>
  )
}

export default ListItem
