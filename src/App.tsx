import * as React from 'react'

function App() {
  const [now, setNow] = React.useState<string>()

  React.useEffect(() => {
    import('./moment').then((m) => {
      setNow(m.default().format('llll'))
    })
  }, [])

  return <p>{now}</p>
}

export default App
