import { describe, test, expect } from 'vitest'
import { isMobile } from '../utils/utils'

describe('utils/isMobile', () => {
  test('returns true for mobile user agents', ({ skip }) => {
    const mobileUserAgents = [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X)',
      'Mozilla/5.0 (Linux; Android 10; SM-G975F)',
      'Mozilla/5.0 (iPad; CPU OS 13_2_3 like Mac OS X)',
      'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1)'
    ]

    mobileUserAgents.forEach(userAgent => {
      Object.defineProperty(window.navigator, 'userAgent', {
        writable: true,
        configurable: true,
        value: userAgent
      })
      expect(isMobile()).toBe(true)
    })
  })

  test('returns false for desktop user agents', () => {
    const desktopUserAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36'
    ]

    desktopUserAgents.forEach(userAgent => {
      Object.defineProperty(window.navigator, 'userAgent', {
        writable: true,
        configurable: true,
        value: userAgent
      })
      expect(isMobile()).toBe(false)
    })
  })
})
