import { changeMode } from "../features/topicSlice"
import { useDispatch } from "react-redux"

export default function Header (props) {
  const dispatch = useDispatch()

  return (
  <header>
    <h1>
      <a href="/" onClick={(e) => {
        e.preventDefault()
        dispatch(changeMode('WELCOME'))
      }}>
        {props.title}
      </a>
    </h1>
  </header>
  )
}