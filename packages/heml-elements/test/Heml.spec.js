const render = require('@heml/render')
const Heml = require('../build/Heml').default

test('renders with some attrs', () => {
  const attrs = {
    margin: '1px 2px 3px 4px'
  }

  return expect(render.renderElement(Heml, attrs, '<head></head><body></body>')).toMatchSnapshot()
});
