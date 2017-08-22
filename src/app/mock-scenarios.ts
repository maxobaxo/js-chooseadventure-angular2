import { Scenario } from './scenario.model';

export const SCENARIOS: Scenario[] = [
  new Scenario('You encounter monstrous bridge trolls that block your way across a dangerous ravine. They insist on payment for letting you pass unharmed.', 'What do you do?', ['Murder the trolls', 'Trick the trolls into killing themselves'], 1),

  new Scenario('A brutal rainstorm washes away your clear path. You lose your sense of direction and your compass.', 'Which way do you go?', ['God knows, I\'m going West', 'You head towards the smell of applie pie'], 2),
  
  new Scenario('An evil wizard clones you while you sleep, and instructs your clone to murder an innocent family. There is a bounty on your head.', 'How do you clear your name?', ['You brutally and publicy murder the wizard only after he confesses to framing you', 'You run. Far, far away to a town where no one knows your name'], 3)
];
