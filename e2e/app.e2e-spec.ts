import { PortfolioPage } from './app.po';

describe('portfolio App', () => {
  let page: PortfolioPage;

  beforeEach(() => {
    page = new PortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
