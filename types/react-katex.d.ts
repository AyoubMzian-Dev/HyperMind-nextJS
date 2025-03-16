declare module 'react-katex' {
  import { FC } from 'react'

  export interface KaTeXProps {
    math: string
    block?: boolean
    errorColor?: string
    renderError?: (error: Error) => React.ReactNode
    settings?: {
      displayMode?: boolean
      throwOnError?: boolean
      errorColor?: string
      macros?: object
      colorIsTextColor?: boolean
      maxSize?: number
      maxExpand?: number
      strict?: boolean | string | string[]
      trust?: boolean | ((context: { command: string, url: string, protocol: string }) => boolean)
    }
  }

  export const BlockMath: FC<KaTeXProps>
  export const InlineMath: FC<KaTeXProps>
} 