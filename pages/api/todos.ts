import type { NextApiRequest, NextApiResponse } from 'next'
import { TodoItem } from '../../types/interfaces'
import { mockTodos } from '../../static/mock-todos'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoItem|TodoItem[]>
) {

  let authorization = req.headers['authorization']

  if (authorization) {
    let auth = authorization.split(' ')[1]
    const [ username, password ] = Buffer.from(auth, 'base64').toString().split(':')

    if (username === 'querplex' && password === 'Passwort') {

      res.status(200).json(mockTodos)

    } else {

      res.status(401).json([])

    }

  } else {

    res.status(401).json([])

  }

}