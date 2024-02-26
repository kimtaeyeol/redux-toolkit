import { useSelector } from "react-redux"

export default function Nav (props) {
  const topics = useSelector(state => state.topics.todos)
  let lis = []
  lis = topics.map((t) => <li key={t.id}>
      <a href={`/read/${t.id}`} onClick={e => {
        e.preventDefault()
        props.onChangeMode(t.id)
      }}>{t.title}</a>
    </li>)

  return (
  <nav>
    <ol>
      {lis}
    </ol>
  </nav>
  )
}