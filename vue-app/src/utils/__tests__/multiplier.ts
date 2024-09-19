import { describe, it, expect } from 'vitest'

import { newMultiplier } from '../multiplier'

describe('multiplier', () => {
  it('initializes properly', () => {
    const { multiplier, increment } = newMultiplier()
    expect(multiplier.value).toBe(3)

    increment()
    expect(multiplier.value).toBe(4)
  })
})
