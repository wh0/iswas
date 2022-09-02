# is⚡was
[is⚡was](https://iswas.glitch.me/) ![was](https://iswas.glitch.me/wh0/iswas/light.svg#gh-light-mode-only)![was](https://iswas.glitch.me/wh0/iswas/dark.svg#gh-dark-mode-only) a service that generates little images that say either "is" or "was" based on whether a GitHub repository has been updated in the last 90 days (you know like those badges that say your CI is failing).

That way, you can have a README that says "Fooinator is a project that ..." now, but it'll automatically update to "Fooinator was a project that ..." when you inevitably abandon it for some other side project.

## Q & A
**Why GitHub only?**

Actually we use their API to get the repo's last updated date.
I don't know if theres a way in Git to get a default branch's last commit date without downloading at least an entire tree.
Let me know if you have a way though.

**What about bold/italic/headings and other languages or whatever?**

If this were an enterprise product, I feel like those would be in a paid tier.

**How does it handle dark mode?**

Behold! https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/

**How did you come up with the image sizing and stuff?**

The numbers are based on metrics from Nimbus Roman, which I think is supposed to be compatible with Helvetica.
Check me on that though.

**Does -apple-system really work in an img SVG?**

I don't know.

**Can I build something similar to display other pieces of text?**

Maybe, but the specifics of image baseline alignment make it so that descenders will mess things up.
We're actually very lucky that "is" and "was" don't have any gjpqy letters.

**What happens if the service goes down?**

That meaning humanity has died off, the server will not respond, and the browser will show the alt text "was," which will be correct in that scenario.

I suppose you can change the alt text to "is" if you're more optimistic though.
