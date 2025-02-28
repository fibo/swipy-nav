import { test, expect } from '@playwright/experimental-ct-react'
import { App } from './App'

test('Home page content', async ({ mount }) => {
  const app = await mount(<App />)
  await expect(app).toContainText('Swipy Nav')

  const settingsButton = await app.getByRole('button', { name: 'Settings' })
  const settingsTitle = await app.getByRole('heading', { name: 'Settings' })
  await settingsButton.click()
  await expect(settingsTitle).toBeVisible()
})
