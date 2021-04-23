import { routes as auth } from '../modules/auth'
import { routes as principal } from '../modules/principal'
import { routes as lista } from '../modules/lista'
import { routes as mercado } from '../modules/mercado'

export default [
  ...auth,
  ...principal,
  ...mercado,
  ...lista
]
