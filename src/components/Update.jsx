import { useState } from "react"

export default function Update ({topic, onUpdate}) {
  const [title, setTitle] = useState(topic.title)
  const [body, setBody] = useState(topic.body)

  return (
  <>
  <form method="post" onSubmit={e => {
    e.preventDefault()
    onUpdate(title, body)
  }}>
    <p><input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/></p>
    <p><textarea name="body" rows="10" value={body} onChange={e => {setBody(e.target.value)}}></textarea></p>
    <p><input type="submit" value="Update" /></p>
  </form>
  </>
  )
}