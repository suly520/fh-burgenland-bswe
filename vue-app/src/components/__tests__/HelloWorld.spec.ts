import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest', multiplier: 5, multiplicand: 3 } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
