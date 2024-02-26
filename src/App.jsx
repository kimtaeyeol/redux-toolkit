import Header from "./components/Header"
import Nav from "./components/Nav"
import Article from "./components/Article"
import Create from "./components/Create"
import Update from "./components/Update"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTopic, updateTopic, removeTopic, changeMode, changeId } from "./features/topicSlice"

function App() {
  let topics = null
  let mode = null
  let id = null
  let topic = null

  const dispatch = useDispatch()
  topics = useSelector(state => state.topics.todos)
  mode = useSelector(state => state.topics.mode)
  id = useSelector(state => state.topics.id)

  let content = null
  let contextControl = null
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello WEB" />
  } else if (mode === 'READ') {
    topic = topics.find(t => t.id === id)
    content = <Article title={topic.title} body={topic.body} />
    contextControl = <>
      <li><a href={`/update/${id}`} onClick={e => {
        e.preventDefault()
        dispatch(changeMode('UPDATE'))
        dispatch(changeId(id))
      }}>Update</a></li>
      <li><button onClick={() => {
        dispatch(removeTopic(topic))
      }}>Delete</button></li>
    </>
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(title, body) => {
      topic = {id:topics.length+1, title, body}
      dispatch(addTopic(topic))
      }} />
  } else if (mode === 'UPDATE') {
    topic = topics.find(t => t.id === id)
    content = <Update topic={topic} onUpdate={(title, body) => {
      const _topic = {...topic, title, body}
      dispatch(updateTopic(_topic))
    }}/>
  }
  //console.log(topics, topic, mode, id)

  return (
  <>
  <Header title="WEB"/>
  <Nav onChangeMode={(id) => {
    dispatch(changeMode('READ'))
    dispatch(changeId(id))
  }}/>
  {content}
  <ul>
    <li><a href="/create" onClick={e => {
      e.preventDefault()
      dispatch(changeMode('CREATE'))
    }}>Create</a></li>
    {contextControl}
  </ul>
  </>
  )
}

export default App
