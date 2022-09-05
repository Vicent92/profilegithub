// import './App.css'
import { Container } from '@mui/material'
import { Search } from './components/search'
import { useState, useEffect } from 'react'
import { getUserGit } from './services'
import { UserCardt } from './components/userCardt/inde'

function App() {
  const [userInput, setUserInput] = useState('octocat')
  const [data, setData] = useState([])

  console.log(userInput)

  useEffect(() => {
    (async () => {
      try {
        const res = await getUserGit(userInput)

        if (userInput === 'octocat') {
          localStorage.setItem('octocat', JSON.stringify(res))
        }

        if (res.message === 'Not Found') {
          const el = JSON.parse(localStorage.getItem('octocat'))
         return setData(el)
        }
        setData(res)
        
      }catch (err) {
        console.error(err)
      }

    })()
  }, [userInput])

  console.log(data)

  return (
      
        <Container sx={{
          background: 'whitesmoke',
          width: '60%',
          height: '500px',
          borderRadius: '16px',
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Search
            userInput={setUserInput}
          />

        <UserCardt userdata={data}/>

        </Container>

  )
}

export default App
