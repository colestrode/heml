const render = require('@heml/render')
const Container = require('../build/Container').default
const Style = require('../build/Style').default

beforeAll(() => {
  Style.preRender({ elements: [] });
})

test('renders with some attrs', () => {
  const attrs = {
    margin: '1px 2px 3px 4px'
  }

  return expect(render.renderElement(Container, attrs, 'Lady Dynamite')).toMatchSnapshot()
});
