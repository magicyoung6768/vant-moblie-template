import { config } from '@vue/test-utils'

config.global.stubs = {
  Transition: {
    template: '<div><slot /></div>'
  }
}
