const render = require('@heml/render')
const Head = require('../build/Head').default
const Style = require('../build/Style').default
const Meta = require('../build/Meta').default

beforeAll(() => {
  Style.preRender({ elements: [] });
  Meta.preRender();
})

test('renders with some attrs', () => {
  const attrs = {
    margin: '1px 2px 3px 4px'
  }

  return render.renderElement(Head, attrs, '<contents></contents>')
    .then((res) => expect(res).toMatchSnapshot())
});
