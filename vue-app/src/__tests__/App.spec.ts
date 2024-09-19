import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App, {})
    expect(wrapper.text()).toContain('The result of your multiplication is: 5 * 3 = 15')
  })

  it('increases properly', async () => {
    const wrapper = mount(App, {})
    expect(wrapper.text()).toContain('The result of your multiplication is: 5 * 3 = 15')
    await wrapper.find('#increment').trigger('click')
    expect(wrapper.text()).toContain('The result of your multiplication is: 5 * 4 = 20')
  })
})
