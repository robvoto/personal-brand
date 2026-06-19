const { test, expect } = require('@playwright/test');
const path = require('path');
const { indexHtmlPath, workSamplesOverviewPath, workSamplesRoot } = require('./constants');

const fileUrl = (filePath) => `file:///${filePath.replace(/\\/g, '/')}`;

const detailPages = [
  {
    file: 'bpmn-process-maps.html',
    title: 'BPMN & process maps | Rob Voto',
    heading: 'BPMN & process maps',
    snippets: [
      'Job Hunter scoring process flow',
      'Scraper captures the raw job record and keeps structured metadata separate from the description.',
      'Save, skip and apply actions feed learning',
    ],
  },
  {
    file: 'business-rules-decision-logic.html',
    title: 'Business rules & decision logic | Rob Voto',
    heading: 'Business rules & decision logic',
    snippets: [
      'Job Hunter separates hidden filtering from inspectable scoring',
      'Job Hunter rules spine',
      'keeps hidden penalties out of the system',
    ],
  },
  {
    file: 'acceptance-criteria-delivery.html',
    title: 'Acceptance criteria & delivery stories | Rob Voto',
    heading: 'Acceptance criteria & delivery stories',
    snippets: [
      'KnowMe has a public UI and an admin surface',
      'Story to release path',
      'same definition of done',
    ],
  },
  {
    file: 'ai-product-decision-flows.html',
    title: 'AI product decision flows | Rob Voto',
    heading: 'AI product decision flows',
    snippets: [
      'AI Tech Lead is a local orchestrator',
      'Orchestrator decision flow',
      'Complex tasks can be gated for research approval before execution continues.',
    ],
  },
];

const assertActionLabels = async (card, labels) => {
  const actions = card.locator('.card-actions').first();

  for (const label of labels) {
    await expect(actions.getByRole('link', { name: label })).toBeVisible();
  }
};

test('homepage shows BA work sample actions', async ({ page }) => {
  await page.goto(fileUrl(indexHtmlPath));

  await expect(page.getByRole('heading', { name: 'BA Work Samples' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'View all work samples' })).toHaveAttribute('href', 'work-samples.html');

  const jobsCard = page.locator('article').filter({ has: page.getByRole('heading', { name: 'Job Intelligence Tool' }) });
  await assertActionLabels(jobsCard, ['Demo', 'App', 'Case study', 'Decision flows']);

  const knowMeCard = page.locator('article').filter({ has: page.getByRole('heading', { name: 'knowMe' }) });
  await assertActionLabels(knowMeCard, ['App', 'Case study', 'How it works']);

  const orchestratorCard = page.locator('article').filter({ has: page.getByRole('heading', { name: 'AI Coding Orchestrator' }) });
  await assertActionLabels(orchestratorCard, ['Case study', 'Architecture', 'Agent flow']);

  const workflowCard = page.locator('article').filter({ has: page.getByRole('heading', { name: 'Workflow Automation Prototype' }) });
  await assertActionLabels(workflowCard, ['Case study', 'Workflow', 'Rules']);
});

test('work-samples overview page links to detail pages', async ({ page }) => {
  await page.goto(fileUrl(workSamplesOverviewPath));

  await expect(page).toHaveTitle('BA Work Samples | Rob Voto');
  await expect(page.getByRole('heading', { name: 'BA Work Samples | Rob Voto' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'BPMN & process maps' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Business rules & decision logic' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Acceptance criteria & delivery stories' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'AI product decision flows' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Open BPMN & process maps' })).toHaveAttribute(
    'href',
    'work-samples/bpmn-process-maps.html'
  );
});

test('work sample detail pages render the required structure', async ({ page }) => {
  await page.goto(fileUrl(path.join(workSamplesRoot, 'ai-product-decision-flows.html')));

  await expect(page).toHaveTitle('AI product decision flows | Rob Voto');
  await expect(page.getByRole('heading', { name: 'AI product decision flows' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Context / problem' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'What Rob did' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Diagram area' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Why it mattered' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Related project links' })).toBeVisible();
  await expect(page.getByText('Job Intelligence Tool')).toBeVisible();
  await expect(page.getByText('KnowMe')).toBeVisible();
  await expect(page.getByText('AI Coding Orchestrator')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Back to BA Work Samples' })).toHaveAttribute('href', '../work-samples.html');
});

for (const detailPage of detailPages) {
  test(`work sample page ${detailPage.file} renders`, async ({ page }) => {
    await page.goto(fileUrl(path.join(workSamplesRoot, detailPage.file)));

    await expect(page).toHaveTitle(detailPage.title);
    await expect(page.getByRole('heading', { name: detailPage.heading })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Related project links' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Back to BA Work Samples' })).toHaveAttribute('href', '../work-samples.html');

    for (const snippet of detailPage.snippets) {
      await expect(page.getByText(snippet, { exact: false })).toBeVisible();
    }
  });
}
