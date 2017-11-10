const render = require('@heml/render')
const jest = require('jest')

jest.mock('../build/Style', () => {
  return {
    render: () => '<mock-style></mock-style>'
  }
})

const HR = require('../build/Hr').default;

test('renders with attrs', () => {
  const attrs = {
    margin: '1px 2px 3px 4px',
    fluff: 'floof'
  }

  expect(render.renderElement(HR, attrs)).toMatchSnapshot()
})
