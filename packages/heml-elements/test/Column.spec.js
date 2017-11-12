const render = require('@heml/render')
const Column = require('../build/Column').default
const Style = require('../build/Style').default

beforeAll(() => {
  Style.preRender({ elements: [] });
})

test('renders with not attrs or content', () => {
  return expect(render.renderElement(Column, {} )).toMatchSnapshot()
});

test('renders with content', () => {
  return expect(render.renderElement(Column, {}, 'Lady Dynamite')).toMatchSnapshot()
})

test('renders with small attr', () => {
  const attrs = {
    small: 6
  }

  return expect(render.renderElement(Column, attrs)).toMatchSnapshot()
})

test('renders with large attr', () => {
  const attrs = {
    large: 12
  }

  return expect(render.renderElement(Column, attrs)).toMatchSnapshot()
})

test('renders with large the same as small', () => {
  const attrs = {
    large: 12,
    small: 12
  }

  return expect(render.renderElement(Column, attrs)).toMatchSnapshot()
})
