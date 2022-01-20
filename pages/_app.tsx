import '../styles/globals.css'
import '../styles/Home.page.css'
import '../styles/TodoList.component.css'
import '../styles/Todo.component.css'
import '../styles/AddTodoForm.component.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
