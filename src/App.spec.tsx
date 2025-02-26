import { test, expect } from '@playwright/experimental-ct-react'
import { App } from './App'

test('Home page content', async ({ mount }) => {
  const component = await mount(<App />)
  await expect(component).toContainText('Swipy Nav')
})
