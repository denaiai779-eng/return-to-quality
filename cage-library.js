// Makos Cage Plan library: focus areas and drills for 45-minute cage sessions.
// Coaches assign each player 1-3 focus areas; the session builder pulls drills from here.
// feeder: 'none' = hitter alone, 'tosser' = a parent or teammate feeds (soft toss / front toss).

const CAGE_WARMUP = {
  id: 'warmup', name: 'Warm-Up', minutes: 5,
  steps: [
    'Jog the length of the cage and back twice.',
    '10 arm circles each way, 10 trunk twists, 10 walking lunges.',
    '10 dry swings at half speed, then 5 at full speed. Finish every swing balanced.'
  ],
  cue: 'Get loose before you get loud.'
};

const CAGE_FOCUS = [
  {
    id: 'ground-force', name: 'Ground Force', pillar: 'POWER',
    why: 'Power starts in the ground, not the arms. Learn to push into the ground and let it fire your hips before your hands.',
    drills: [
      { id: 'gf-pause', name: 'Pause at Landing', minutes: 12, feeder: 'none', equip: 'Tee',
        steps: ['Set the tee middle of the plate, belt high.', 'Stride and land, then FREEZE for one second with your weight on the inside of your back foot.', 'From the freeze, push the ground away and swing.'],
        reps: '3 rounds of 8 swings', cue: 'Land, freeze, push the ground away.',
        check: 'You can hold the freeze without falling forward, and the ball comes off as a line drive.',
        mistake: 'Drifting onto the front foot before the swing starts.' },
      { id: 'gf-stepback', name: 'Step-Back Swings', minutes: 12, feeder: 'none', equip: 'Tee',
        steps: ['Start with feet together, a step in front of your normal spot.', 'Step your front foot BACK into your stance, load into your back leg, then stride and swing.', 'Feel your back leg do the work.'],
        reps: '3 rounds of 8 swings', cue: 'Load the back leg like a spring.',
        check: 'Back knee stays inside your back foot on the load; contact is hard and level.',
        mistake: 'Swaying the hips back past the back foot.' },
      { id: 'gf-heavy', name: 'Finish Tall Front Leg', minutes: 10, feeder: 'tosser', equip: 'Soft toss balls',
        steps: ['Partner soft tosses from the side, slightly in front of you.', 'Stride, then firm up your front leg as you swing so your hips can turn.', 'Hold your finish for 2 seconds after every swing.'],
        reps: '3 rounds of 10', cue: 'Brace the front leg, let the hips spin.',
        check: 'Front leg is straight-ish at contact and you finish balanced facing the pitcher.',
        mistake: 'Front knee collapsing forward toward the pitcher.' }
    ]
  },
  {
    id: 'inside-ball', name: 'Stay Inside the Ball', pillar: 'PRECISION',
    why: 'Hands stay close and travel inside the ball so you can hit the inside pitch hard and keep the barrel in the zone longer.',
    drills: [
      { id: 'ib-fence', name: 'Fence Swings', minutes: 10, feeder: 'none', equip: 'Tee, net or fence',
        steps: ['Stand facing the side net, bat knob touching your belly button and the end cap touching the net.', 'Take your stance there and swing without hitting the net.', 'Move the tee in front of you once you can do 5 clean swings in a row.'],
        reps: '20 dry swings, then 2 rounds of 8 off the tee', cue: 'Knob to the ball, barrel stays behind the hands.',
        check: 'No clipping the net; ball off the tee goes up the middle.',
        mistake: 'Casting the barrel out early (bat swings wide like a door).' },
      { id: 'ib-inside-tee', name: 'Inside Tee', minutes: 12, feeder: 'none', equip: 'Tee',
        steps: ['Set the tee on the inside corner, a little in front of the plate.', 'Keep your hands inside the ball and drive it to the pull-side gap.', 'Line drives only. A ball pulled foul does not count.'],
        reps: '3 rounds of 8', cue: 'Get the hands inside, punch it to the gap.',
        check: '6 of 8 each round are fair line drives to the pull side.',
        mistake: 'Getting jammed (contact too deep) or rolling over.' },
      { id: 'ib-onehand', name: 'Top Hand / Bottom Hand', minutes: 10, feeder: 'none', equip: 'Tee, short bat if you have one',
        steps: ['Choke way up. Top-hand only: 8 swings off the tee.', 'Bottom-hand only: 8 swings.', 'Finish with 8 normal swings and feel both hands working together.'],
        reps: '8 / 8 / 8, twice', cue: 'Short to it, long through it.',
        check: 'One-hand swings still come off as line drives.',
        mistake: 'Dropping the barrel below the hands on the top-hand swings.' }
    ]
  },
  {
    id: 'contact-point', name: 'Contact Point', pillar: 'PRECISION',
    why: 'Where you hit the ball decides where it goes. Inside pitch out front, middle pitch even with your front foot, outside pitch deeper.',
    drills: [
      { id: 'cp-three-tee', name: 'Three-Spot Tee', minutes: 12, feeder: 'none', equip: 'Tee',
        steps: ['Inside: tee out in front of the plate. Middle: even with your front foot. Outside: tee a little deeper on the outside corner.', 'Take 4 swings from each spot, then mix them up.', 'Say where the ball should go before you swing.'],
        reps: '3 rounds of 12 (4 per spot)', cue: 'Inside out front, outside let it travel.',
        check: 'Inside goes pull, middle goes middle, outside goes oppo.',
        mistake: 'Same contact point no matter where the tee is.' },
      { id: 'cp-high-low', name: 'High-Low Tee', minutes: 10, feeder: 'none', equip: 'Tee',
        steps: ['Set the tee at the top of the zone: 8 swings, stay on top of it, line drives.', 'Drop it to the knees: 8 swings, keep the barrel above your hands as long as you can.', 'Alternate high and low.'],
        reps: '3 rounds of 8', cue: 'Match the plane of the pitch.',
        check: 'No pop-ups off the high tee, no ground balls off the low tee.',
        mistake: 'Dropping the back shoulder on the high pitch.' },
      { id: 'cp-front-toss', name: 'Front Toss Zones', minutes: 12, feeder: 'tosser', equip: 'L-screen, bucket of balls',
        steps: ['Partner front tosses from behind the L-screen, about 20 feet away.', 'They call the zone before each toss: in, middle or out.', 'Drive it to the matching field.'],
        reps: '3 rounds of 10', cue: 'See the zone, match the field.',
        check: '7 of 10 go to the right field each round.',
        mistake: 'Pulling everything, even the outside toss.' }
    ]
  },
  {
    id: 'bat-speed', name: 'Bat Speed & Intent', pillar: 'SPEED',
    why: 'Swing with intent. Every rep is a game rep: fast, on purpose, and on balance. Quality over quantity.',
    drills: [
      { id: 'bs-max', name: 'Max-Intent Rounds', minutes: 12, feeder: 'none', equip: 'Tee',
        steps: ['Tee middle, belt high.', 'Take 5 swings as hard as you can while staying on balance. Rest 30 seconds between rounds.', 'Every swing counts. No lazy swings.'],
        reps: '5 rounds of 5 swings, 30 sec rest', cue: 'Swing it like you mean it, finish on balance.',
        check: 'Ball jumps off the bat and you hold your finish every time.',
        mistake: 'Swinging hard but falling over. Balance first.' },
      { id: 'bs-rapid', name: 'Rapid Fire Soft Toss', minutes: 10, feeder: 'tosser', equip: 'Soft toss balls',
        steps: ['Partner soft tosses from the side, one ball right after the other.', 'Reload quickly and swing at each one.', 'Stay short and quick. Do not muscle it.'],
        reps: '4 rounds of 8, rest between', cue: 'Quick hands, quick reload.',
        check: 'You stay ready for the next toss without stepping out of your stance.',
        mistake: 'Getting long and slow as you get tired. Stop the round if form breaks.' },
      { id: 'bs-line', name: 'Line Drive Targets', minutes: 10, feeder: 'tosser', equip: 'L-screen, a target on the back net',
        steps: ['Pick a target on the back net about chest high.', 'Front toss or tee. Try to hit the target hard.', 'Hard and on a line beats high and far.'],
        reps: '3 rounds of 10', cue: 'Hard on a line, through the target.',
        check: '5 of 10 hit near the target each round.',
        mistake: 'Uppercutting to try to hit it far.' }
    ]
  },
  {
    id: 'all-fields', name: 'All Fields / Oppo', pillar: 'PRECISION',
    why: 'Good hitters use the whole field. Letting the outside pitch travel and driving it the other way keeps you from rolling over.',
    drills: [
      { id: 'af-outside-tee', name: 'Outside Tee Oppo', minutes: 12, feeder: 'none', equip: 'Tee',
        steps: ['Tee on the outside corner, even with the back of the plate.', 'Let the ball get deep and drive it to the opposite field gap.', 'Keep your front shoulder closed until contact.'],
        reps: '3 rounds of 8', cue: 'Let it travel, drive it oppo.',
        check: '6 of 8 go oppo on a line.',
        mistake: 'Pulling off with the front shoulder and rolling over.' },
      { id: 'af-round', name: 'Pull-Middle-Oppo Round', minutes: 10, feeder: 'tosser', equip: 'L-screen, balls',
        steps: ['Front toss. Hit 3 to the pull side, then 3 up the middle, then 3 oppo.', 'Partner adjusts the toss location to help: in, middle, away.', 'Miss your field and that set starts over.'],
        reps: '3 rounds', cue: 'Choose the field, own the field.',
        check: 'You finish all three sets in a round.',
        mistake: 'Changing your swing instead of your contact point.' },
      { id: 'af-backside', name: 'Backside Drive', minutes: 10, feeder: 'tosser', equip: 'L-screen, balls',
        steps: ['Front toss middle to away.', 'Drive everything to center or the opposite gap.', 'Count how many of 10 go center or oppo.'],
        reps: '3 rounds of 10', cue: 'Stay through it to the backside.',
        check: '5 of 10 or better to center or oppo.',
        mistake: 'Cutting the swing off early.' }
    ]
  },
  {
    id: 'two-strike', name: 'Two-Strike Approach', pillar: 'RELENTLESSNESS',
    why: 'With two strikes you battle. Shorten up, widen out, protect the plate. Put it in play or foul it off. No easy outs.',
    drills: [
      { id: 'ts-choke', name: 'Choke & Battle Tee', minutes: 10, feeder: 'none', equip: 'Tee',
        steps: ['Choke up an inch and widen your stance a little.', 'Move the tee around the zone after every 3 swings.', 'Short, compact swings. Contact every time.'],
        reps: '3 rounds of 9', cue: 'Shorten up, see it, hit it.',
        check: 'Solid contact on every swing, wherever the tee is.',
        mistake: 'Taking your full big swing with two strikes.' },
      { id: 'ts-front', name: 'Two-Strike Front Toss', minutes: 12, feeder: 'tosser', equip: 'L-screen, balls',
        steps: ['Partner front tosses all over the zone, mixing speeds.', 'You are always at two strikes: anything close, you swing.', 'Foul it off or put it in play. A swing and miss ends the round.'],
        reps: '3 rounds of 10', cue: 'Protect the plate, compete every pitch.',
        check: 'A full round of 10 with zero misses.',
        mistake: 'Taking a close one. With two strikes, close is a strike.' },
      { id: 'ts-foul', name: 'Foul-Off Game', minutes: 10, feeder: 'tosser', equip: 'L-screen, balls',
        steps: ['Partner tosses a tough pitch on the edge (corners, high, low).', 'Your job: stay alive. Foul it back or hit it hard.', 'Count your longest streak without a miss.'],
        reps: 'Play for 8 minutes, beat your streak', cue: 'Stay alive.',
        check: 'Beat your best streak from last session.',
        mistake: 'Giving up on the pitch. Battle every one.' }
    ]
  },
  {
    id: 'timing', name: 'Timing & Load', pillar: 'SPEED',
    why: 'Get your load started early so you are ready when the ball arrives. Late load means late swing.',
    drills: [
      { id: 'tm-rhythm', name: 'Rhythm Soft Toss', minutes: 10, feeder: 'tosser', equip: 'Soft toss balls',
        steps: ['Partner says "load" as they show the ball, then tosses.', 'Load on "load," stride as the ball comes, swing.', 'Find the same rhythm every rep.'],
        reps: '3 rounds of 10', cue: 'Early load, on time.',
        check: 'You are never rushing; the swing feels smooth, not jumpy.',
        mistake: 'Waiting to load until the ball is already on the way.' },
      { id: 'tm-speeds', name: 'Change-Up Front Toss', minutes: 12, feeder: 'tosser', equip: 'L-screen, balls',
        steps: ['Partner mixes firm tosses and slow tosses without telling you.', 'Stay back on the slow one. Do not lunge.', 'Hit both hard.'],
        reps: '3 rounds of 10', cue: 'Ready for the firm one, adjust to the slow one.',
        check: 'No lunging; you drive the slow tosses back up the middle.',
        mistake: 'Leaking forward and hitting off your front foot.' },
      { id: 'tm-machine', name: 'Machine Timing Round', minutes: 12, feeder: 'none', equip: 'Pitching machine (if the cage has one)',
        steps: ['Set the machine to a speed you can handle.', 'Start your load when the ball goes into the feeder.', 'Track every ball all the way in, even the ones you take.'],
        reps: '3 rounds of 10', cue: 'Load with the machine, see it deep.',
        check: '7 of 10 squared up each round.',
        mistake: 'Starting late and pulling off the ball.' }
    ]
  },
  {
    id: 'zone', name: 'Zone Discipline', pillar: 'RELENTLESSNESS',
    why: 'Swing at strikes, take balls. Know the zone and hunt your pitch. This is how you get quality at-bats.',
    drills: [
      { id: 'zn-call', name: 'Ball or Strike Call', minutes: 10, feeder: 'tosser', equip: 'L-screen, balls',
        steps: ['Partner front tosses some strikes and some balls.', 'Swing only at strikes. On every take, call "ball" out loud.', 'Partner tells you if you were right.'],
        reps: '3 rounds of 10', cue: 'Know the zone, swing at yours.',
        check: '8 of 10 right decisions each round.',
        mistake: 'Chasing the high ball.' },
      { id: 'zn-hunt', name: 'Hunt Your Pitch', minutes: 12, feeder: 'tosser', equip: 'L-screen, balls',
        steps: ['Pick ONE zone you hunt (for example, middle-in).', 'Swing hard at that zone only. Take everything else, even strikes.', 'Next round, pick a new zone.'],
        reps: '3 rounds of 10', cue: 'Hunt it, do damage.',
        check: 'You only swing at your zone and drive it hard.',
        mistake: 'Swinging at strikes outside your zone.' },
      { id: 'zn-colors', name: 'Color Ball Recognition', minutes: 10, feeder: 'tosser', equip: 'Two colors of balls (or numbered balls)',
        steps: ['Partner mixes two colors of balls.', 'Swing at one color, take the other.', 'Decide as early as you can.'],
        reps: '3 rounds of 10', cue: 'See it early, decide early.',
        check: 'No swings at the take color.',
        mistake: 'Deciding late and checking your swing.' }
    ]
  }
];

const CAGE_FINISHER = {
  id: 'finisher', name: 'Quality At-Bat Round', minutes: 6,
  steps: [
    'Finish with a live round: 10 front tosses or machine pitches.',
    'Each pitch is a game at-bat. Partner calls the count and situation (runner on 2nd, 2 strikes, etc.).',
    'Count your quality at-bats: hard contact, right decision, or move the runner.'
  ],
  cue: 'Every rep is a game rep. #ReturnToQuality'
};

// Builds a 45-minute session from a player's assigned focus areas (1-3).
// Rotates drills each session so the same focus area doesn't repeat the same drill.
function buildCageSession(focusIds, sessionNumber) {
  const focuses = focusIds.map(id => CAGE_FOCUS.find(f => f.id === id)).filter(Boolean);
  if (!focuses.length) return null;
  const n = sessionNumber || 0;
  const blocks = [];
  const pick = (f, k) => f.drills[(n + k) % f.drills.length];
  if (focuses.length === 1) {
    blocks.push({ focus: focuses[0], drill: pick(focuses[0], 0) });
    blocks.push({ focus: focuses[0], drill: pick(focuses[0], 1) });
    blocks.push({ focus: focuses[0], drill: pick(focuses[0], 2) });
  } else if (focuses.length === 2) {
    blocks.push({ focus: focuses[0], drill: pick(focuses[0], 0) });
    blocks.push({ focus: focuses[1], drill: pick(focuses[1], 0) });
    blocks.push({ focus: focuses[0], drill: pick(focuses[0], 1) });
  } else {
    focuses.slice(0, 3).forEach(f => blocks.push({ focus: f, drill: pick(f, 0) }));
  }
  return { warmup: CAGE_WARMUP, blocks, finisher: CAGE_FINISHER };
}
