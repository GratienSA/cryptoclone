export interface AuthProps {
  email: string
  password: string
}

export interface RegisterProps {
  firstName: string
  lastName: string
  pseudo: string
  hash: string
  email: string
  roleId: string
  city: string
  dollarAvailables: number
}
