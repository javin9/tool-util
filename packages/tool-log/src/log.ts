
import { add } from '@tool/core'

export const log = (name: string) => {
  console.log(name)
  return add(1, 2)
}
