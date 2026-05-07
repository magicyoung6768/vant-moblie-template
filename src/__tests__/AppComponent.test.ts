import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AppComponent from '../components/AppComponent/index.vue'

describe('AppComponent', () => {
  test('renders message from props', () => {
    const wrapper = mount(AppComponent, {
      props: { msg: 'Hello World' }
    })
    expect(wrapper.find('h1').text()).toBe('Hello World')
  })

  test('renders default message when no props provided', () => {
    const wrapper = mount(AppComponent)
    expect(wrapper.find('h1').text()).toBe('测试')
  })

  test('updates message when props change', async () => {
    const wrapper = mount(AppComponent, {
      props: { msg: 'Initial' }
    })
    expect(wrapper.find('h1').text()).toBe('Initial')

    await wrapper.setProps({ msg: 'Updated' })
    expect(wrapper.find('h1').text()).toBe('Updated')
  })

  test('logs message when clicked', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const wrapper = mount(AppComponent, {
      props: { msg: 'Test Message' }
    })

    await wrapper.find('h2').trigger('click')

    expect(consoleSpy).toHaveBeenCalledWith('Test Message')
    consoleSpy.mockRestore()
  })

  test('handles multiple clicks', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const wrapper = mount(AppComponent, {
      props: { msg: 'Multi Click' }
    })

    const button = wrapper.find('h2')
    await button.trigger('click')
    await button.trigger('click')
    await button.trigger('click')

    expect(consoleSpy).toHaveBeenCalledTimes(3)
    consoleSpy.mockRestore()
  })

  test('handles empty string message', () => {
    const wrapper = mount(AppComponent, {
      props: { msg: '' }
    })
    expect(wrapper.find('h1').text()).toBe('')
  })

  test('handles special characters', () => {
    const wrapper = mount(AppComponent, {
      props: { msg: '<script>alert("test")</script>' }
    })
    expect(wrapper.find('h1').text()).toBe('<script>alert("test")</script>')
  })

  test('handles unicode characters', () => {
    const wrapper = mount(AppComponent, {
      props: { msg: '你好世界 🌍' }
    })
    expect(wrapper.find('h1').text()).toBe('你好世界 🌍')
  })

  test('handles long strings', () => {
    const wrapper = mount(AppComponent, {
      props: { msg: 'a'.repeat(10000) }
    })
    expect(wrapper.find('h1').text().length).toBe(10000)
  })
})
