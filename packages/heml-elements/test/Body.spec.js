const render = require('@heml/render')
const Body = require('../build/Body').default
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

  return render.renderElement(Body, attrs, 'Lady Dynamite')
    .then((res) => {
      expect(res).toMatchSnapshot();
    });
});
