import { chromium, firefox, webkit } from 'playwright'
import { bind, cond } from 'ramda'

const launchObj = (obj) => bind(obj.launch, obj)

const launchBrowser = cond([
  ['chromium', launchObj(chromium)()],
  ['firefox', launchObj(firefox)()],
  ['webkit', launchObj(webkit)()],
])

export default launchBrowser
