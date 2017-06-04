import { CookingPage } from './app.po';

describe('cooking App', () => {
  let page: CookingPage;

  beforeEach(() => {
    page = new CookingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
