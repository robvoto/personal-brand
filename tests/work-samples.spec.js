const { test, expect } = require('@playwright/test');
const path = require('path');
const { indexHtmlPath, workSamplesOverviewPath, workSamplesRoot } = require('./constants');

const fileUrl = (filePath) => `file:///${filePath.replace(/\\/g, '/')}`;

const detailPages = [
  {
    file: 'bpmn-process-maps.html',
    title: 'BPMN & process maps | Rob Voto',
    heading: 'BPMN & process maps',
  },
  {
    file: 'business-rules-decision-logic.html',
    title: 'Business rules & decision logic | Rob Voto',
    heading: 'Business rules & decision logic',
  },
  {
    file: 'acceptance-criteria-delivery.html',
    title: 'Acceptance criteria & delivery stories | Rob Voto',
    heading: 'Acceptance criteria & delivery stories',
  },
  {
    file: 'ai-product-decision-flows.html',
    title: 'AI product decision flows | Rob Voto',
    heading: 'AI product decision flows',
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
});

for (const detailPage of detailPages) {
  test(`work sample page ${detailPage.file} renders`, async ({ page }) => {
    await page.goto(fileUrl(path.join(workSamplesRoot, detailPage.file)));

    await expect(page).toHaveTitle(detailPage.title);
    await expect(page.getByRole('heading', { name: detailPage.heading })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Related project links' })).toBeVisible();
  });
}
