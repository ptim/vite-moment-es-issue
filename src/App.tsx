import * as React from 'react'
import moment from './moment'

function App() {
  const [now, setNow] = React.useState<string>()

  React.useEffect(() => {
    // import('./moment').then((m) => {
    //   setNow(m.default().format('llll'))
    // })
    setNow(moment().format('llll'))
  }, [])

  return <p>{now}</p>
}

export default App
