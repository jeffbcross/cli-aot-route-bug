import { CliBetaTestPage } from './app.po';

describe('cli-beta-test App', function() {
  let page: CliBetaTestPage;

  beforeEach(() => {
    page = new CliBetaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
