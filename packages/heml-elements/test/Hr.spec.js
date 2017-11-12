const render = require('@heml/render')
const HR = require('../build/Hr').default
const Style = require('../build/Style').default

beforeAll(() => {
  Style.preRender({ elements: [] });
})

test('renders with some attrs', () => {
  const attrs = {
    margin: '1px 2px 3px 4px',
    fluff: 'floof'
  }
  expect(render.renderElement(HR, attrs)).toMatchSnapshot();
});
