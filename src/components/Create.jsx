export default function Create ({onCreate}) {
  return (
  <>
  <form method="post" onSubmit={e => {
    e.preventDefault()
    const title = e.target.title.value
    const body = e.target.body.value
    onCreate(title, body)
  }}>
    <p><input type="text" name="title" placeholder="Title" /></p>
    <p><textarea name="body" rows="10" placeholder="Body"></textarea></p>
    <p><input type="submit" value="Create" /></p>
  </form>
  </>
  )
}