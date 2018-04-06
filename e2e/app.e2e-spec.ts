import { GhanaBeLLPage } from './app.po';

describe('ghana-be-ll App', function() {
  let page: GhanaBeLLPage;

  beforeEach(() => {
    page = new GhanaBeLLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
