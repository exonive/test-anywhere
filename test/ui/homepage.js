/**
 * @name GoDaddy domain search
 * @desc Searches GoDaddy.com for a domain and checks if the results show up
 */

const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch({
    headless: true
  })
  page = await browser.newPage()
})

describe('[ UI ] ', () => {

  describe('GoDaddy Homepage', () => {
    it('has search input', async () => {
      await page.setViewport({
        width: 1280,
        height: 800
      })
      await page.goto('https://www.godaddy.com', {
        waitUntil: 'networkidle0'
      })
      const searchInput = await page.$('.domain-name-input')
      assert.ok(searchInput)
    })

    it('shows search results after search input and verify unavilability', async () => {
      await page.type('.domain-name-input', 'usa.com')
      await page.click('.input-group-btn .btn-purchase')
      await page.waitForSelector('#searchResults')
      const domainStatus = await page.evaluate(el => el.innerText, await page.$('#searchResults'));
      assert.ok(domainStatus.includes('taken'));
      console.log(domainStatus)
    })


  })

  after(async () => {
    await browser.close()
  })

})