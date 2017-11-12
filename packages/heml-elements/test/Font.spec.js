const render = require('@heml/render')
const Font = require('../build/Font').default

test('renders with some attrs', () => {
  const attrs = {
    href: 'https://example.com'
  }

  return expect(render.renderElement(Font, attrs)).toMatchSnapshot()
});
