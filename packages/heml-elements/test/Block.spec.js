const render = require('@heml/render')
const Block = require('../build/Block').default
const Style = require('../build/Style').default

beforeAll(() => {
  Style.preRender({ elements: [] });
})

test('renders with some attrs', () => {
  const attrs = {
    margin: '1px 2px 3px 4px'
  }

  expect(render.renderElement(Block, attrs, 'Lady Dynamite')).toMatchSnapshot();
});
