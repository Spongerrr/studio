export interface IProject {
  id: string
  name: string
  task: string
  description: string
  service: string[]
  stack: string[]
  path: string
  images: string[]
  best: boolean
  statistic: {
    hours: number
    dev: number
    des: number
  }
}