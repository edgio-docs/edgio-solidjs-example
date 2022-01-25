import './index.css'
import App from './App'
import { render } from 'solid-js/web'
import { Router } from 'solid-app-router'
import install from '@layer0/prefetch/window/install'
import installDevtools from '@layer0/devtools/install'

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'production') {
  install({
    includeCacheMisses: true
  })
  installDevtools()
}
