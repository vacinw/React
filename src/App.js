import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import DefaultLayout from './layouts'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map(({ path, component, layout }, index) => {
            const Page = component
            const Layout = layout === null ? Fragment :
              (layout || DefaultLayout)
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              >
              </Route>
            )
          })}
        </Routes>
      </div >
    </Router >
  )
}


export default App