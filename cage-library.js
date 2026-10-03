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
    id: 'ground-force', name: 'Farm Board Series', pillar: 'POWER', series: true,
    why: 'Ground force, one detail at a time. Feel the ground push back into the back leg, land and brace on the front leg, then take it to the tee. The barrel works north-south through the zone, not around it.',
    drills: [
      { id: 'fb-back-hold', name: 'Back Foot Pressure Hold', minutes: 2, feeder: 'none', equip: 'Farm Board',
        detail: 'Pressure into the inside of the back foot.',
        steps: ['Set the Farm Board under your back foot the way Coach showed you.', 'Get in your stance and sink into your load.', 'Hold for 5 seconds. Feel the pressure on the inside of your back foot, not the outside.'],
        reps: '5 holds of 5 seconds', cue: 'Sit into the back hip, push into the board.',
        check: 'You can hold the load without rocking to the outside of your foot.',
        mistake: 'Swaying the hips back past the back foot.', video: null, source: "Joey Cunha's Farm Board drills" },
      { id: 'fb-back-swing', name: 'Back Foot Board Swings', minutes: 4, feeder: 'none', equip: 'Farm Board, tee',
        detail: 'Push the ground away to start the swing.',
        steps: ['Back foot on the Farm Board, tee middle-middle.', 'Load into the board, then push the ground away to start the swing.', 'Hold your finish for 2 seconds.'],
        reps: '2 rounds of 6 swings', cue: 'Push the ground away, let the hips turn the barrel.',
        check: 'The swing starts from the legs and the barrel stays in the zone through contact.',
        mistake: 'Spinning off the board with the shoulders.', video: null, source: "Joey Cunha's Farm Board drills" },
      { id: 'fb-front-hold', name: 'Front Foot Landing Hold', minutes: 2, feeder: 'none', equip: 'Farm Board',
        detail: 'Land soft and brace the front leg.',
        steps: ['Set the Farm Board under your front foot the way Coach showed you.', 'Stride and land on the board. Freeze at landing.', 'Firm up the front leg and hold 3 seconds. Head stays still.'],
        reps: '5 landings, 3-second hold', cue: 'Land quiet, brace hard.',
        check: 'Front knee stays over the foot and you do not drift forward.',
        mistake: 'Front knee caving toward the pitcher.', video: null, source: "Joey Cunha's Farm Board drills" },
      { id: 'fb-front-swing', name: 'Front Foot Board Swings', minutes: 4, feeder: 'none', equip: 'Farm Board, tee',
        detail: 'Rotate against a braced front leg.',
        steps: ['Front foot on the Farm Board, tee middle-middle.', 'Land, brace the front leg, and turn against it.', 'Finish balanced, facing the pitcher.'],
        reps: '2 rounds of 6 swings', cue: 'Land, brace, turn. Barrel stays north-south.',
        check: 'The front leg firms up at contact and you hold your finish.',
        mistake: 'Upper half pulling off early.', video: null, source: "Joey Cunha's Farm Board drills" },
      { id: 'fb-tee', name: 'Off the Board: Tee', minutes: 4, feeder: 'none', equip: 'Tee',
        detail: 'Same ground feel, no board.',
        steps: ['Step off the board. Tee middle-middle.', 'Recreate the back-leg push and the front-leg brace.', 'Line drives only. Barrel works through the zone, not around it.'],
        reps: '2 rounds of 8 swings', cue: 'Ground, hips, then hands.',
        check: '6 of 8 are hard line drives up the middle.',
        mistake: 'Going back to an arms-only swing once the board is gone.' }
    ]
  },
  {
    id: 'mb-series', name: 'Med Ball Stability Series', pillar: 'POWER', series: true,
    why: 'A progression from movement prep to the tee. Each step isolates one small detail of stability and rotation, so the swing is driven by the ground and the hips, not the shoulders.',
    drills: [
      { id: 'mb-prep', name: 'Movement Prep', minutes: 3, feeder: 'none', equip: 'Med ball (4-6 lb)',
        detail: 'Open up the hips and the upper back.',
        steps: ['5 walking lunges each leg with a twist toward the front knee, ball held at the chest.', '5 hip openers each leg (knee up, open out to the side).', 'Half-kneeling, ball at the chest: 5 slow turns each way. Hips stay square, only the chest turns.'],
        reps: '1 round', cue: 'Loose hips, turning chest.',
        check: 'You can turn your chest without your hips moving in the half-kneeling turns.',
        mistake: 'Rushing it. Prep is slow and controlled.' },
      { id: 'mb-kneel', name: 'Half-Kneeling Scoop Toss', minutes: 3, feeder: 'none', equip: 'Med ball, cage net or wall',
        detail: 'Rotate from the core with the legs taken out.',
        steps: ['Half-kneel side-on to the net, back knee down, front knee up.', 'Stay tall. Turn the chest back, then rotate through and scoop the ball into the net.', 'No leaning. The core turns, the arms just follow.'],
        reps: '2 sets of 5 each side', cue: 'Stay tall, turn the middle.',
        check: 'You stay upright the whole throw and the ball comes off hard.',
        mistake: 'Leaning or throwing with the arms.' },
      { id: 'mb-loadhold', name: 'Load and Hold', minutes: 2, feeder: 'none', equip: 'Med ball',
        detail: 'Load the back hip and stay stable there.',
        steps: ['Get in your batting stance with the ball at your back hip.', 'Load into the back leg and hold for 3 seconds.', 'Feel the inside of the back foot. Head stays over the middle.'],
        reps: '5 holds of 3 seconds', cue: 'Load the hip, stay centered.',
        check: 'You can hold the load without swaying.',
        mistake: 'Weight rolling to the outside of the back foot.' },
      { id: 'mb-brace', name: 'Front Leg Brace Toss', minutes: 3, feeder: 'none', equip: 'Med ball, cage net or wall',
        detail: 'Brace the front side, then rotate.',
        steps: ['Start already in your landing position, ball at the back hip.', 'Firm up the front leg, then rotate and scoop the ball into the net.', 'Stop the front side so the hips can whip through.'],
        reps: '2 sets of 5', cue: 'Firm front side, hips whip through.',
        check: 'The front leg straightens a little at release and you finish balanced.',
        mistake: 'Front knee drifting forward at release.' },
      { id: 'mb-scoop', name: 'Full Scoop Toss', minutes: 3, feeder: 'none', equip: 'Med ball, cage net or wall',
        detail: 'Put it all together in order.',
        steps: ['Full stance, ball at the back hip.', 'Load, stride, brace, rotate, release. Same order every rep.', 'Throw on a line into the net, not around in a circle.'],
        reps: '2 sets of 5', cue: 'Ground, hips, then hands.',
        check: 'Loud throw, straight into the net, stable finish.',
        mistake: 'Shoulders starting the throw.',
        video: { url: 'https://www.youtube.com/watch?v=Qq83wji4t2I', label: 'Rotational scoop toss (Simone Sports Performance)' } },
      { id: 'mb-tee', name: 'Transfer to the Tee', minutes: 4, feeder: 'none', equip: 'Tee, bat',
        detail: 'Take the same order into the swing.',
        steps: ['Put the ball down and pick up the bat. Tee middle-middle.', 'Swing with the exact feel of the last toss: load, brace, rotate.', 'Barrel works north-south through the zone.'],
        reps: '2 rounds of 6 swings', cue: 'Same order, now with the bat.',
        check: 'The swing feels like the throw, and the ball comes off on a line.',
        mistake: 'Losing the lower half the moment the bat is back in your hands.',
        video: { url: 'https://www.youtube.com/watch?v=1ns15SvkuH0', label: "Hitter's scoop toss (Annex Sports Performance)" } }
    ]
  },
  {
    id: 'tank-series', name: 'Tidal Tank Series', pillar: 'POWER', series: true,
    why: 'The water moves if you move. Build a stable base, control the load, rotate clean, then take that control to the tee.',
    drills: [
      { id: 'tt-brace', name: 'Stance Brace', minutes: 2, feeder: 'none', equip: 'Tidal Tank',
        detail: 'Stable base, still water.',
        steps: ['Hold the Tidal Tank across your chest in your stance.', 'Brace your core and let the water settle.', 'Hold for 10 seconds without the water moving.'],
        reps: '3 holds of 10 seconds', cue: 'Quiet body, quiet water.',
        check: 'The water goes still and stays still.',
        mistake: 'Shifting your feet to fight the water.' },
      { id: 'tt-load', name: 'Load and Hold', minutes: 3, feeder: 'none', equip: 'Tidal Tank',
        detail: 'Get to the load without losing balance.',
        steps: ['From your stance, slowly load into your back leg.', 'Hold the load while the water settles. Do not let it rock you.', 'Come back to center and repeat.'],
        reps: '2 sets of 5 slow reps', cue: 'Stable base, quiet water.',
        check: 'You hold the load with no wobble.',
        mistake: 'Rushing the reps.',
        video: { url: 'https://www.youtube.com/watch?v=hxJkDH_uswA', label: 'Tidal Tank balance and stability (Northern Baseball Training)' } },
      { id: 'tt-rotate', name: 'Slow Rotation to Finish', minutes: 3, feeder: 'none', equip: 'Tidal Tank',
        detail: 'Rotate under control and stop it at the finish.',
        steps: ['From the load, rotate slowly to your finish.', 'Stop and hold the finish until the water is still.', 'Feet stay in the ground the whole time.'],
        reps: '2 sets of 5 each way', cue: 'Turn it, stop it, own it.',
        check: 'The water settles fast at the finish because you are stable.',
        mistake: 'Letting the water pull you off balance at the finish.' },
      { id: 'tt-stretch', name: 'Stretch Swing', minutes: 3, feeder: 'none', equip: 'Tidal Tank',
        detail: 'Stretch, then fire, with one clean slam.',
        steps: ['Load and stretch into your back side.', 'Rotate hard and let the water slam to the front once.', 'Head still, feet in the ground.'],
        reps: '2 sets of 5', cue: 'Stay in the ground, let the water move, not your head.',
        check: 'One clean slam at the end, feet never slide.',
        mistake: 'Losing your base or swaying with the water.',
        video: { url: 'https://www.youtube.com/watch?v=0YcdBiFpG3E', label: 'Tidal Tank stretch drill (BB Sports Training)' } },
      { id: 'tt-tee', name: 'Transfer to the Tee', minutes: 4, feeder: 'none', equip: 'Tee, bat',
        detail: 'Same stable rotation, now with the bat.',
        steps: ['Tee middle-middle.', 'Swing with the same stable base and clean rotation you just felt.', 'Hold every finish for 2 seconds.'],
        reps: '2 rounds of 6 swings', cue: 'Stable base, clean turn.',
        check: 'You hold every finish without stepping out.',
        mistake: 'Over-swinging and losing the base.' }
    ]
  },
  {
    id: 'inside-ball', name: 'Stay Inside the Ball Series', pillar: 'PRECISION', series: true,
    why: 'Keep the hands inside the ball so the barrel stays in the zone longer. Start with the SHORT BAT (middle and deep-inside contact points only), then progress to your GAME BAT: a tee set up on the net hit UP THE MIDDLE, and a tee deep on the inner half driven the OTHER WAY.',
    drills: [
      { id: 'ib-fence-dry', name: 'Short Bat: Fence Setup', minutes: 2, feeder: 'none', equip: 'Short bat, side net',
        detail: 'Find your distance and keep the barrel behind the hands.',
        steps: ['Short bat. Stand facing the side net with the knob on your belly button and the end of the bat just touching the net. That is your distance.', 'Get in your stance there and take slow dry swings without touching the net.', 'Hands lead, barrel stays behind them.'],
        reps: '2 sets of 5 slow swings', cue: 'Hands inside, barrel stays behind them.',
        check: '5 swings in a row without touching the net.',
        mistake: 'Casting the barrel out wide like a door opening.' },
      { id: 'ib-short-fence', name: 'Short Bat: Fence Tee Up the Middle', minutes: 4, feeder: 'none', equip: 'Short bat, tee, side net',
        detail: 'Middle contact point. Stay tight to the net, hit it up the middle.',
        steps: ['Short bat only. Set the tee up on the net at your short-bat distance, middle of the zone.', 'Swing without hitting the net and drive the ball straight up the middle.', 'A ball hooked to the pull side means the barrel came around. Reset and go again.'],
        reps: '2 rounds of 6', cue: 'Short to it, back up the middle.',
        check: '4 of 6 each round go up the middle and you never touch the net.',
        mistake: 'Pulling off and hooking it to the pull side.' },
      { id: 'ib-short-deep', name: 'Short Bat: Deep Inner-Half Tee', minutes: 4, feeder: 'none', equip: 'Short bat, tee',
        detail: 'Deep-inside contact point. Drive it the other way.',
        steps: ['Short bat only. Tee on the inner half, deep in the zone (back near your back hip, not out front).', 'Keep the hands inside the ball and drive it to the opposite field.', 'Line drives the other way only.'],
        reps: '2 rounds of 6', cue: 'Hands inside, drive it the other way.',
        check: '4 of 6 each round go on a line to the opposite field.',
        mistake: 'Hands drifting away from the body and rolling over.' },
      { id: 'ib-fence-tee', name: 'Game Bat: Fence Tee Up the Middle', minutes: 5, feeder: 'none', equip: 'Game bat, tee, side net',
        detail: 'Same path, now with your game bat.',
        steps: ['Switch to your game bat. Reset your distance: knob on the belly button, end of the bat touching the net. You will be farther back than with the short bat.', 'Tee up on the net, middle of the zone.', 'Same short path, drive it up the middle without touching the net.'],
        reps: '2 rounds of 6', cue: 'Same path, longer bat.',
        check: '4 of 6 up the middle, no net.',
        mistake: 'Letting the longer barrel swing out around the zone.' },
      { id: 'ib-deep-tee', name: 'Game Bat: Deep Inner-Half Tee', minutes: 5, feeder: 'none', equip: 'Game bat, tee',
        detail: 'Game bat, deep inside, other way.',
        steps: ['Game bat. Tee on the inner half, deep in the zone.', 'Keep the hands inside and drive it the other way, just like the short bat.', 'Line drives the other way only.'],
        reps: '2 rounds of 6', cue: 'Hands inside, drive it the other way.',
        check: '4 of 6 each round go on a line to the opposite field.',
        mistake: 'Getting jammed or rolling over because the bat is longer.' },
      { id: 'ib-combo', name: 'Game Bat: Combo Round', minutes: 4, feeder: 'none', equip: 'Game bat, tee, side net',
        detail: 'Same inside path on both tees.',
        steps: ['Game bat. Alternate: 2 swings on the fence tee up the middle, then 2 on the deep inner-half tee the other way.', 'Same hand path every swing. Only the contact point changes.', 'A point for every ball that goes where it should.'],
        reps: '2 rounds of 8 (4 each)', cue: 'Same path, every swing.',
        check: '6 of 8 or better each round.',
        mistake: 'Changing the swing between the two tees.' }
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
    id: 'timing', name: 'Timing & Load Series', pillar: 'SPEED', series: true,
    why: 'Three phases, one at a time: LOAD (hinge into the hips like you are about to sit in a chair), GATHER (pick the front foot up and get deeper into the hinge), then STRIDE (force stays on the back foot, spine straight, shoulders downhill). Force always goes straight down under your feet, never to the sides.',
    drills: [
      { id: 'tl-hinge', name: 'Hip Hinge Prep', minutes: 2, feeder: 'none', equip: 'Bat',
        detail: 'Hinge at the hips, not the back.',
        steps: ['Hold the bat behind you along your spine: one hand at your neck, one at your lower back.', 'Push your hips back like you are sitting in a chair. The bat stays touching your head, upper back, and tailbone.', 'Stand back up by pushing the ground away.'],
        reps: '2 sets of 8 slow hinges', cue: 'Sit in the chair.',
        check: 'The bat never leaves your back, so your spine stays straight.',
        mistake: 'Bending over at the waist or rounding the back.' },
      { id: 'tl-load', name: 'Chair Load Hold', minutes: 3, feeder: 'none', equip: 'None (bat in hand)',
        detail: 'Belly button to your belt, force in the middle of the foot.',
        steps: ['Get in your stance with the bat.', 'Load by hinging your hips: think of moving your belly button toward your belt, like you are loading up to sit in a chair.', 'Press into the MIDDLE of your feet and hold for 3 seconds.'],
        reps: '2 sets of 5 holds, 3 seconds each', cue: 'Belly button to your belt.',
        check: 'You feel pressure in the middle of both feet, not the toes or heels.',
        mistake: 'Squatting straight down instead of hinging the hips back.' },
      { id: 'tl-direction', name: 'Direction of Force Check', minutes: 2, feeder: 'none', equip: 'None',
        detail: 'Force goes straight down under your feet, not to the sides.',
        steps: ['From your load, look down at your ankles.', 'Push straight down into the ground. Your ankles stay tall, not rolling in or out.', 'Rock slightly front to back until the pressure sits in the middle of the foot, then hold.'],
        reps: '5 checks', cue: 'Force under your feet, not to the sides.',
        check: 'Ankles stay straight and you could not be pushed over sideways.',
        mistake: 'Rolling the ankles or pushing out to the edges of the feet.' },
      { id: 'tl-gather', name: 'Gather Hold', minutes: 3, feeder: 'none', equip: 'None (bat in hand)',
        detail: 'Pick the front foot up and sink deeper into the hinge.',
        steps: ['Start in your chair load.', 'Pick your front foot up off the ground. As it comes up, sink a little deeper into your hip hinge.', 'Keep pushing the back foot into the ground. Hold 2 seconds on one leg, balanced.'],
        reps: '2 sets of 5 gathers', cue: 'Pick it up, sink deeper.',
        check: 'You can balance on the back leg without tipping, and the hinge gets deeper, not taller.',
        mistake: 'Standing up tall when the foot comes up.' },
      { id: 'tl-stride', name: 'Stride and Freeze', minutes: 3, feeder: 'none', equip: 'None (bat in hand)',
        detail: 'Stride with force on the back foot. Spine straight, shoulders downhill.',
        steps: ['Load, gather, then stride forward.', 'Keep the force on your back foot as you stride. Do not fall back.', 'Freeze when the front foot lands: spine straight, shoulders tilted downhill.'],
        reps: '2 sets of 5 strides', cue: 'Spine straight, shoulders downhill.',
        check: 'At landing your weight is still back and your shoulders are downhill, not level or leaning back.',
        mistake: 'Falling back in posture or lunging forward onto the front foot.' },
      { id: 'tl-rhythm', name: 'Load, Gather, Stride, Swing', minutes: 3, feeder: 'none', equip: 'Bat',
        detail: 'Link the three phases into one rhythm.',
        steps: ['Say it out loud: "load... gather... stride... swing."', 'Dry swings at half speed, hitting every phase.', 'Speed it up only when every phase is clean.'],
        reps: '2 sets of 6 dry swings', cue: 'Load, gather, stride, then let it go.',
        check: 'Each phase looks the same as when you did it on its own.',
        mistake: 'Skipping the gather once you speed up.' },
      { id: 'tl-tee', name: 'Transfer to the Tee', minutes: 4, feeder: 'none', equip: 'Tee',
        detail: 'Same three phases, now hitting a ball.',
        steps: ['Tee middle-middle.', 'Load, gather, stride, then swing.', 'Hold your finish. Line drives only.'],
        reps: '2 rounds of 6 swings', cue: 'Sit in the chair, pick it up, stride downhill.',
        check: 'You hit every phase and the ball comes off on a line.',
        mistake: 'Rushing the load because there is a ball now.' },
      { id: 'tl-toss', name: 'Rhythm Soft Toss', minutes: 4, feeder: 'tosser', equip: 'Soft toss balls',
        detail: 'Time the load and gather to the toss.',
        steps: ['Partner says "load" as they show the ball, then tosses.', 'Load on "load," gather as the ball comes up, stride and swing.', 'Find the same rhythm every rep.'],
        reps: '2 rounds of 8', cue: 'Early load, on time.',
        check: 'You are never rushing. The swing feels smooth, not jumpy.',
        mistake: 'Waiting to load until the ball is already on the way.' }
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

// Builds a cage session from a player's assigned focus areas (1-3).
// Series run every step in order (small details, prep to tee).
// If more than one series is assigned, ONE series runs per session and they rotate.
// Regular focus areas add drills that rotate each session.
function buildCageSession(focusIds, sessionNumber) {
  const focuses = focusIds.map(id => CAGE_FOCUS.find(f => f.id === id)).filter(Boolean);
  if (!focuses.length) return null;
  const n = sessionNumber || 0;
  const series = focuses.filter(f => f.series);
  const regular = focuses.filter(f => !f.series);
  const pick = (f, k) => f.drills[(n + k) % f.drills.length];
  const blocks = [];
  let todaySeries = null;
  if (series.length) {
    todaySeries = series[n % series.length];
    todaySeries.drills.forEach((d, i) => blocks.push({ focus: todaySeries, drill: d, step: i + 1, of: todaySeries.drills.length }));
    regular.forEach(f => blocks.push({ focus: f, drill: pick(f, 0) }));
  } else if (regular.length === 1) {
    for (let k = 0; k < 3; k++) blocks.push({ focus: regular[0], drill: pick(regular[0], k) });
  } else if (regular.length === 2) {
    blocks.push({ focus: regular[0], drill: pick(regular[0], 0) });
    blocks.push({ focus: regular[1], drill: pick(regular[1], 0) });
    blocks.push({ focus: regular[0], drill: pick(regular[0], 1) });
  } else {
    regular.forEach(f => blocks.push({ focus: f, drill: pick(f, 0) }));
  }
  const minutes = CAGE_WARMUP.minutes + CAGE_FINISHER.minutes + blocks.reduce((t, b) => t + b.drill.minutes, 0);
  return { warmup: CAGE_WARMUP, blocks, finisher: CAGE_FINISHER, minutes, todaySeries, seriesCount: series.length };
}

// Longest session in the rotation, plus the rotation order, for the coach sheet.
function cageRotationInfo(focusIds) {
  const first = buildCageSession(focusIds, 0);
  if (!first) return { maxMinutes: 0, rotation: [] };
  const count = Math.max(1, first.seriesCount);
  const rotation = [];
  for (let i = 0; i < count; i++) {
    const s = buildCageSession(focusIds, i);
    rotation.push({ name: s.todaySeries ? s.todaySeries.name : 'Hitting drills', minutes: s.minutes });
  }
  return { maxMinutes: Math.max(...rotation.map(r => r.minutes)), rotation };
}

function estimateCageMinutes(focusIds) {
  return cageRotationInfo(focusIds).maxMinutes;
}
