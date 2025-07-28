import ProgressBar from './components/ProgressBar'

function App() {

  return (
    <div className='App'>
      <ProgressBar percent={30} status='normal' />
      <ProgressBar percent={50} status="active" />
      <ProgressBar percent={70} status="exception" />
      <ProgressBar percent={100} status="success" />
      <ProgressBar percent={50} status='normal' showInfo={false} />
    </div>
  )
}

export default App
