import { Annotation } from './Query'

export interface IDescription {
  query: string
}
export interface IError {
  error: string
}
export interface ICard {
  header: string[]
  description: string[]
}
export interface IExplanation {
  tokens: Annotation[]
}
