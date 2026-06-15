# Horse Race

This is a code demo I made of a horse race using TypeScript and React.

By default, all of the horses have a 0.6 chance to move forward at every interval. After each interval, the state is updated to move a horse forward if that horse has a success. Each horse also has its chance to move changed by a value randomly between -0.1 and 0.1. This chance is visualized for each lane throughout the race. The race can be paused and resumed at any time. The race can also be reset at any time, returning everything to the initial state.

<img src='./demo.gif' alt='demo' height='400px' />

## Future Improvements

- Randomize parameters for the horses.
- Introduce "risky" and "safe" horses that have more and less volatile changes in their chance to move forward.
- Add fanfare after the race finishes.

## Live Demo

Visit the deployed app here:

https://horse-race-app-swart.vercel.app/
