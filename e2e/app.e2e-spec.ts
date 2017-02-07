import { PolymerExamplePage } from './app.po';

describe('polymer-example App', function() {
  let page: PolymerExamplePage;

  beforeEach(() => {
    page = new PolymerExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
