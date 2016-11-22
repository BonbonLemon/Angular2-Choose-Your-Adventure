import { ChooseYourAdventurePage } from './app.po';

describe('choose-your-adventure App', function() {
  let page: ChooseYourAdventurePage;

  beforeEach(() => {
    page = new ChooseYourAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
