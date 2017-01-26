import { GitlabProjectsPage } from './app.po';

describe('gitlab-projects App', function() {
  let page: GitlabProjectsPage;

  beforeEach(() => {
    page = new GitlabProjectsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
