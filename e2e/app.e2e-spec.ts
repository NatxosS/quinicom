import { QuinicomPage } from './app.po';

describe('quinicom App', function() {
  let page: QuinicomPage;

  beforeEach(() => {
    page = new QuinicomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
