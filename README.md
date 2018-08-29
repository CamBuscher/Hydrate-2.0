# Code challenge

This application is for a code challenge from a company that I've been talking to over the last week. I'm purposefully not mentioning the name in case some sleuth is trying to cheat on a code challenge (do people do that?).

I actually had a great time building this small application, and have several ways I'd like to enhance it, but am turning it in as is just for the sake of time. I will continue working on some issues I have with it throughout the week. **The project had several interesting problems, chief among them: configuring my own react app (if I wanted to use React, which I did).**

This problem was actually really fun, because I still wanted to use React, and had only ever used CRA to do that before! So learning to configure my own React application was rather eye-opening. I followed [a guide](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658), and it was fantastic. A lot of explanation on not just what to do but why I was doing them, and it's insane how much I was taking for granted from CRA. This process also allowed me to weigh what was really important in my process building a React application. For example, I like to bind my Component functions with arrow keys as I write them. It's a simple pattern that I'm used to and don't even really think about. But for whatever reason the way I configured this app didn't like that, and would lose context of `this` for things like `this.setState` (fairly important). I probably could figure out the configuration necessary to allow that syntax, but it was just easier to bind them in the constructors of my components and be done with it, even though it (in my opinion) makes for ugly and mundane code.

---

## Issues I want to resolve

* **[Make a zone component](https://github.com/YayFiber/Hydrate-2.0/issues/6)**: The bulk of the App's logic lives in the Device component. It's clunky, long, and not exactly approachable. This kind of thing happens when you build an app over 36 hours. Excited to tackle this. **_Will make testing much easier._**
* **[Test](https://github.com/YayFiber/Hydrate-2.0/issues/7)**: Something I really wanted to have done before turning in, but like I mentioned earlier: time. Configuration of testing will be very fun and interesting, but hopefully not difficult, as configuration difficulties are the least intriguing.

## Setup

Very simple. Clone down this repo, `NPM install`, `npm start`, visit localhost:3000. 

## Gifs!

I know you don't want to install this, so I've included some gifs and a little bit about what's goin on, enjoy!

### Log In page
Your simple log in page. I thought it'd be fun to have the option to use more API keys, just in case people love this _so much_ that they want to use it on their own sprinkler systems. If a user enters an invalid API key, a message will appear. For development and judging purposes, I included the company's provided key to their fake API as a default for logging in.
[![Image from Gyazo](https://i.gyazo.com/6ee5ea66a7c455f00a51894c2af3d816.gif)](https://gyazo.com/6ee5ea66a7c455f00a51894c2af3d816)

---

### Devices page
From here a user can see all of their devices, start zones individually for the set amount of minutes, or start all of a devices zones with one beautiful click. It will also let the user know they have already started a zone or a device on that visit, and also not allow them to do it again. Also this gif is rad because it has another gif happening inside it. It's like gifception.

[![Image from Gyazo](https://i.gyazo.com/f952e2aee901ce5f8348b9680f61d179.gif)](https://gyazo.com/f952e2aee901ce5f8348b9680f61d179)

---

Thanks for reading my README and visiting my github! Please let me know if you have any questions.