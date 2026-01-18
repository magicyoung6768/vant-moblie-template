import 'axios'

declare module 'axios' {
  interface AxiosRequestConfig {
    pem?: boolean
    sld?: boolean
  }
  interface AxiosResponse extends AxiosError {}
}

export interface ResultData<T = any> {
  code: number
  data: T
  msg: string
}
