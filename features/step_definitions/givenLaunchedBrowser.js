import { Given } from '@cucumber/cucumber'
import launchBrowser from '../launchBrowser'

Given(/^a launched (.*)$/, (browser) => {
  launchBrowser(browser)
})
