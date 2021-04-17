#### Please read the [Wiki/FAQ](https://github.com/pymedusa/Medusa/wiki) before opening an issue ####
All issues and bug reports must be opened at [GitHub](https://github.com/pymedusa/Medusa/issues)

#### 0.5.11 (17-04-2021) ####

For this release the biggest change is the rewrite of the history page. We have transitioned the page to a vue.js page. Some features may have been removed, but we plan to keep improving the page based on the feedback we get.

#### New Features
- Added new provicer TvRoad. (credits to IamMika23) ([9424](https://github.com/pymedusa/Medusa/pull/9424))

#### Improvements
- Vueify history page. ([9201](https://github.com/pymedusa/Medusa/pull/9201))
- Nebulance: Prevent duplicate results for provider. ([9333](https://github.com/pymedusa/Medusa/pull/9333))
- Add Cloudflare BFM detection. ([9407](https://github.com/pymedusa/Medusa/pull/9407))

#### Fixes
- AnimeBytes: Fix exception when processing multi-ep BD specials. ([9396](https://github.com/pymedusa/Medusa/pull/9396))
- Fix issue with sending torrents to Synology downloadstation. ([9401](https://github.com/pymedusa/Medusa/pull/9401))
- Fix a number of issues with trakt sync. ([9319](https://github.com/pymedusa/Medusa/pull/9319))
- Fix shows enriched with wrong IMDB show data. ([9435](https://github.com/pymedusa/Medusa/pull/9435))
- Fix configured provider ratio getting lost after restart. ([9413](https://github.com/pymedusa/Medusa/pull/9413))
- Fix sending torrents to Synology Download Station from version 3.8.16.-3566. (credits to BenjV). ([9401](https://github.com/pymedusa/Medusa/pull/9401))



#### 2021-02-28 (0.5.9) ####

This release is about our new postprocessing method named Download Handler. For a long time postprocessing has always been something that ran in the background. But always had an imppact on the rest of the app, in a way that it lead to locking the UI. We've introduced the (async) download handler to fix this issue once and for all.
It can be used instead of scheduled postprocessing or nzbToMedia/torrentToMedia. But you'll get some added benefits. For example, torrent users will now be able to configure an action like "pause torrent" or "remove torrent" after their seeding has finished. There are a number of other benefits, but we'd like to redirect you to our ([wiki](https://github.com/pymedusa/Medusa/wiki/Post-Processing#download-handler)) for more info.

As of release 0.5.8 we've introduced feature flagging. Which means that certain new features will be hidden behind a setting. To start using the Download Handler you'll have to first enable experimental features in config -> general -> advanced. After enabling this setting, you will be able to find Download Handler in config -> postprocessing.

Please be aware, this is an experimental feature. So if you encounter any issues using it, we'd appreciate it if you could raise a new GitHub issue for it. That way we can try to fix it asap.

#### New Features
- Added new postprocessing method download handler. Check ([wiki](https://github.com/pymedusa/Medusa/wiki/Post-Processing#download-handler)) for more info. ([8485](https://github.com/pymedusa/Medusa/pull/8485))
- Add async postprocessing to manual postprocessing ([8485](https://github.com/pymedusa/Medusa/pull/8485))
- Add postprocessing to apiv2. sabToNzb uses apiv2 when fork=medusa-apiv2. ([9212](https://github.com/pymedusa/Medusa/pull/9212))

#### Fixes
- Fix setStatus in manage/episodeStatuses page. ([9228](https://github.com/pymedusa/Medusa/pull/9228))
- Fix error when using manage/backlogOverview page. ([9208](https://github.com/pymedusa/Medusa/pull/9208))

#### 2021-01-10 ####

A new year a new release. One of our New Year's resolutions, was adding lots of cool features for 2021. So let's kick off with an improved Trakt library, which should fix a lot of the trakt authentication issues, we experienced with the old implementation. Next we made sure that changing settings to thread (backend) related functionality, does not need a restart anymore. And last, we added a feature that will allow you to save torrent hash (magnet) to a .magnet file, if the torrent cannot be located through one of the magnet cache sites. In the meantime we also threw in a couple of bug fixes.

#### Improvements
- Replace trakt lib with PyTrakt (and switch to OAuth device authentication). ([8916](https://github.com/pymedusa/Medusa/pull/8916))
- Make all thread schedulers hot-reload when enabled/disabled. ([8948](https://github.com/pymedusa/Medusa/pull/8948))
- Add an option to create .magnet files when a torrent can't be downloaded from a magnet URI, using one of the magnet cache registries. ([8955](https://github.com/pymedusa/Medusa/pull/8955))

#### Fixes
- Fix setting default episode status (after) when adding a new show. ([8918](https://github.com/pymedusa/Medusa/pull/8918))
- Fix provider anidex. Add a bypass to it's DDOS-Gaurd protection. ([8955](https://github.com/pymedusa/Medusa/pull/8955))

#### 2020-11-30 ####

Our first Python 3 release. We've fixed some critical bugs that where introduced in v. 0.4.6. That's why we're releasing soon after 0.4.6.

#### New Features
- Separate proxy configs for Providers, Indexers, CLients (torrent/nzb) and others ([8605](https://github.com/pymedusa/Medusa/pull/8605))

#### Improvements
- Add absolute numbering to indexers tvmaze and tmdb, making them suitable for anime ([8777](https://github.com/pymedusa/Medusa/pull/8777))

#### Fixes
- Provider Nyaa.si: Correct the category that is used for anime searches ([8777](https://github.com/pymedusa/Medusa/pull/8777))
- Indexer TMDB: Fix adding show using an alternative language ([8784](https://github.com/pymedusa/Medusa/pull/8784))

#### 2020-11-25 ####

Finally, this is it. Our last release that will run on python 2. We've been working to this point for a while now. And removing python 2 support, will help us as developers a lot, because we can now remove all the python 2 hacks that were in place to allow Medusa to run on python 2 and 3.

Note, that you can still start Medusa using release 0.4.6. But the upgrade notification will be blocked until you upgrade to python 3.

This release is not only about python versions. But we've also added a brand new add show and add existing show page. It may look the same at first glance. But we've added a number of nice improvements to both pages.

Last, we've fixed the Provider TVChaosUK.

For a complete change log, please refer to [changelog](https://github.com/pymedusa/Medusa/blob/master/CHANGELOG.md).

Enjoy!

#### 2020-09-06 ####

We are moving closer to version 0.5.0, where we will drop Python 2 support. This and the coming 1 or 2 releases will focus at delivering a stable version, which can be used by users who can't upgrade to Python 3.6 or higher. We've worked hard on improving the update process. Using Medusa's UI to switch between the master and develop branch should also be fixed. Let us know if there are any issues we should address.

## 0.4.2

#### Improvements
- Added new page "restart", for restarting and shutting down medusa ([8399](https://github.com/pymedusa/Medusa/pull/8399))
- Added new page "update", for updating medusa to a new version ([8437](https://github.com/pymedusa/Medusa/pull/8437))

#### Fixes
- Fix show-selector using the show lists ([8426](https://github.com/pymedusa/Medusa/pull/8426))
- Fix home poster layout. Re-add the search by show title ([8415](https://github.com/pymedusa/Medusa/pull/8415))
- Fix backlog search ignoring cached search results ([8395](https://github.com/pymedusa/Medusa/pull/8395))
- Fix guessit parsing numbered episode titles as multi season ([8413](https://github.com/pymedusa/Medusa/pull/8413))
- Fix History page showing black text (on black) when using dark theme ([8375](https://github.com/pymedusa/Medusa/pull/8375))

<br/>

#### 2020-08-18 ####

## 0.4.1

- Fixed show titles displayed in white text on the schedule page ([#8338](https://github.com/pymedusa/Medusa/pull/8338))
- Fixed Series show list title shown, also when it's the only show list used ([#8338](https://github.com/pymedusa/Medusa/pull/8338))
- Fixed home table layouts Downloads sorting ([#8338](https://github.com/pymedusa/Medusa/pull/8338))
- Fixed home table layouts previous and next episode sorting ([#8337](https://github.com/pymedusa/Medusa/pull/8337))
- Fixed show's show lists not stored after restart ([#8337](https://github.com/pymedusa/Medusa/pull/8337))

<br/>

#### 2020-08-15 ####

## 0.4.0

Version 0.4.0 will be a (minor) version bump, going from 3 to 4. The reason for this, is that we've worked hard on Medusa's new frontend. With version 0.4.0 the most used pages have been transitioned to vue.js. This will allow you to load Medusa once, and reuse the list of shows and other data, when switching to different (also transitioned) pages. Overall it should result in faster and more user-friendly application. We haven't transitioned all pages, so we still have a lot of work to do.

Maybe you'll notice that some user interface features have been removed. Don't fear, most of them will return eventually.

We'd still like to know what you think of the "new" UI. So let us know through the usual channels like ([Discord](https://discord.gg/zMdAdUK)) or you can always create a GitHub ticket.

#### New Features
- Added Search shows by id ([#8308](https://github.com/pymedusa/Medusa/pull/8308))
- Added UI option to create your own show list categories ([#8308](https://github.com/pymedusa/Medusa/pull/8308))
- Add the ability to modify the Discord bot username ([#8148](https://github.com/pymedusa/Medusa/pull/8148))

#### Improvements
- Vueified Home page (Poster, small poster, banner, simple layouts) ([5345](https://github.com/pymedusa/Medusa/pull/5345))
- Vueified Snatch Selection page ([7345](https://github.com/pymedusa/Medusa/pull/7345))
- Add the save path option for qBittorrent version > 3.2 ([8304](https://github.com/pymedusa/Medusa/pull/8304))
- show-header: mark indexer used for adding show with star ([8286](https://github.com/pymedusa/Medusa/pull/8286))
- Utilize season search results from cache ([8281](https://github.com/pymedusa/Medusa/pull/8281))
- Improve season scene name handling for non-anime shows ([8155](https://github.com/pymedusa/Medusa/pull/8155))

#### Fixes
- Disable forcing of the scene option when adding shows ([8316](https://github.com/pymedusa/Medusa/pull/8316))
- Fix associated files matching more files than wanted ([8152](https://github.com/pymedusa/Medusa/pull/8152))
For a complete changelog, please refer to [changelog](https://github.com/pymedusa/Medusa/blob/master/CHANGELOG.md).

<br/>

#### 2019-12-08 ####

## 0.3.8

#### Improvements  
- Display Show: Display qualities in presets or allowed as green instead of yellow ([#7415](https://github.com/pymedusa/Medusa/pull/7415))  
- Display Show: Add option to disable pagination ([#7438](https://github.com/pymedusa/Medusa/pull/7438))  
- Improve a number of anime release names parsed by guessit ([#7418](https://github.com/pymedusa/Medusa/pull/7418)) ([#7396](https://github.com/pymedusa/Medusa/pull/7396)) ([#7427](https://github.com/pymedusa/Medusa/pull/7427))  
  
#### Fixes  
  
- Show Header: Fix showing correct amount of stars for the IMDB rating ([#7401](https://github.com/pymedusa/Medusa/pull/7401))  
- Re-implement tvdb season poster/banners (was disabled because of tvdb api issues) ([#7460](https://github.com/pymedusa/Medusa/pull/7460))  
- Fix showing the data directory in the bottom of some config pages ([#7424](https://github.com/pymedusa/Medusa/pull/7424))

For a complete changelog, please refer to [changelog](https://github.com/pymedusa/Medusa/blob/master/CHANGELOG.md).

<br/>

#### 2019-11-18 ####

## 0.3.7

Fixes:

 - Fixed broken TheTVDB caused by API v3 changes [(#7355)](https://github.com/pymedusa/Medusa/pull/7355)
 - DisplayShow: Fixed Xem and Medusa season exceptions not shown anymore [(#7360)](https://github.com/pymedusa/Medusa/pull/7360)

For a complete changelog, please refer to [changelog](https://github.com/pymedusa/Medusa/blob/master/CHANGELOG.md).

<br/>

#### 2019-11-11 ####

## 0.3.6

This release will bring you a modernized Display Show page, as well as the ability to add shows which do not yet have any episodes added to the indexers. The new "vueified" display show page also has some new interesting features, like:

 - Pagination;
 - Loading of the episodes per season. It will show you more seasons as they come in;
 - New sort and filter options;
 - Directly change show config options like subtitles, anime, sports, season folders, by clicking on the red cross / green checkmark;

With the help of our rapid expanding community we were also able to fix a number of bugs or repair some broken providers: AnimeBytes, Beyond-HD, BTDB and BJ-share to name a few. So we'd like to encourage everyone to keep sending those bug reports, feature requests and pull requests.
For a complete changelog, please refer to [changelog](https://github.com/pymedusa/Medusa/blob/master/CHANGELOG.md).

<br/>

#### 2019-06-28 ####

## Upcoming update to our Docker image

**If you're using the [pymedusa/Medusa Docker image](https://hub.docker.com/r/pymedusa/medusa), this message is for you!**  

A week from today (_Friday, 2019-07-05_) we will be releasing an updated Docker image **to the `develop` branch**.  

- The updated image will use the latest version of Python **3.7** (upgraded from **2.7**).  
- By removing some unneeded files and folders, we shrinked the size of the container (after creation) from ~230mb down to ~160mb.
- **Please note** that we are also removing the automatic restart functionality (s6 overlay) from our image.  
  We suggest using the built-in [restart policy feature](https://docs.docker.com/config/containers/start-containers-automatically/#use-a-restart-policy) when running the container instead.  
  Without a restart policy, restarting or shutting down Medusa from the Web UI will cause the container to stop.

When this update is released, it will be available as the `develop` Docker image tag.  
**When the next version of Medusa is released, the default `latest`/`master` image tag will be this updated Docker image.**  
Apart from having to configure a restart policy for the new container, the migration to this new image should be smooth.

<br/>

#### 2019-06-12 ####

## 0.3.3

Just a hotfix release to fix some minor bugs.  
Refer to the changelog for the specific details.

<br/>

#### 2019-06-05 ####

## 0.3.2

We're exited to bring you another minor release that addresses a few issues.
Especially noteworthy is a fix that should vastly increase the load speed of the home page. We know that loading big shows can be slow and are actively working on improving the show page loading. We have already made some good progress and are confident that we can include these changes in the next release. We've also added three new torrent providers, two private and one public. Make sure to check them out if you need more sources.

We'd like to thank everyone contributing through issues, pull requests and other channels.
Please make sure to use the appopriate [issue template](https://github.com/pymedusa/Medusa/issues/new?template=bug_report.md) when you report new issues. Failing to do so will result in the issue being closed. Please undertand that our time is limited and the information we request is needed. Without it, we can't possibly help you - it is in your own interest to provide as much information as possible.

Finally, for a list of all the latest changes, you can take a look at the [changelog](https://github.com/pymedusa/Medusa/blob/master/CHANGELOG.md). Enjoy!

<br/>

#### 2019-03-20 ####

## 0.3.1

Just a hotfix release to fix some minor bugs.  
Refer to the changelog for the specific details.

<br/>

#### 2019-03-13 ####

## 0.3.0

With a lot of hard work from many contributors, we're happy to announce that Medusa is finally fully Python 3.5 and up compatible. We've taken the time to properly implement and test Python 3 support, as some of you already tested the waters with the develop branch, in which many bugs have been fixed.

Before you start updating your run scripts, please check out this wiki page first, as there are some things to consider, when migrating from a running Python 2 installation. For this please check out this [wiki](https://github.com/pymedusa/Medusa/wiki/Switch-to-Python-3) page. For now, you will need to have Python 3.5 or higher installed, and preferably Python 3.7, as this seems to be the fastest version. A windows installer with Python 3.7 embedded should be released in the coming days.

Well, for the last four months, did we only work on Python 3 support, you may ask yourself? Absolutely not! We've added the option to configure a search offset per show. You have this particular show, which always releases 1 day early compared to the day it's aired? It is now possible to configure an offset, that will allow Medusa to start searching early (or later if that suits your use case).

Another nice feature we've added is the possibility to exclude specific preferred words for a show, instead of only the ability to add to the global list of preferred words.

Together with a few bug fixes, we are very proud of this release, as this is the very first Sick* clone that is Python 3 compatible. Which is something we have been working on for a number of years. With this out of the way, expect us to increase our release frequency with lots of nice features to come.

We'd also like to take the opportunity to thank a few people who helped with development and testing:
- [@ngosang](https://github.com/ngosang) for starting the Python 3 changes, without him it would have taken much longer.
- [u/outcider](https://www.reddit.com/user/outcider), [u/Lumeer](https://www.reddit.com/user/Lumeer), [u/EnigmA-X](https://www.reddit.com/user/EnigmA-X) for testing and providing valuable feedback on [r/PyMedusa](https://www.reddit.com/r/PyMedusa/).

<br/>

#### 2018-12-19 ####

## 0.2.14

Maybe you didn't hear from us in while, but we haven't been sitting still.

This release has something a nice new provider named Nordicbits, useful for our Scandinavian users. As well as some nice daily and backlog search-related improvements. It should result in more search hits for fast-paced RSS providers.

We've also addressed an old bug, where it was not possible to provide your banner or fanart replacing the images provided by your provider. That should now work, by configuring a metadata provider like Kodi 12+ and replacing the images in your series folder.

For all the other goodies please refer to the full [changelog](https://github.com/pymedusa/Medusa/blob/v0.2.14/CHANGELOG.md).
Keep providing us with those issue reports, and Happy Holidays!

<br/>

#### 2018-11-16 ####

## 0.2.12

We are happy to deliver you some important bug fixes, nice enhancements, and a cool new feature: The ability to send notifications to Join, a nice multi-platform notification platform by joaoapps.com.

Thanks to some very welcome new contributors, the ability to set a priority with Pushover notifications has been added. Also providers like Nyaa and Anidex are not usable for other series than Anime anymore.

As for the fixes, we fixed a bug where it was not possible to configure multiple metadata providers. This has been broken for a short period. Also, a small bug in registering with Growl should be fixed now.

As an ongoing task of migrating the user interface to a new, more responsive and modern framework, following the editShow and config -> notifications page we've also given the config -> search page a facelift. In the following releases you will see more and more pages migrated, and with that the overall loading times will be reduced.

For a complete list of changes please refer to the [changelog](https://github.com/pymedusa/Medusa/blob/v0.2.12/CHANGELOG.md).

<br/>

#### 2018-10-29 ####

## 0.2.11

It took us some time, but with a wave of new users, we also recieved a wave of bug reports and feature requests. So let's start with welcoming everyone who boarded the ship and thanks for all the contributions in whatever shape or format.

This release can be highlighted with a major version upgrade of Guessit to version 3.x. Guessit is our release name parsing tool. Version 2 was already very good at "guessing" release names. In version 3.x, a number of bugs have been fixed. Especially titles with short language codes and releases with the word 'line' in the title, should be parsed correctly now.

We've also improved our APIv2 webserver, which should now run multithreaded. This will result in faster loading times on numerous pages.

The list of bugfixes is too long to mention here. But to mention a few, we've fixed an issue where you could not save the metadata config and the config postprocessing frequency. Also, there was an issue with opening an anime show with anidb release groups. That should be something of the past.

We've noticed a number of pull requests from new contributors. We'll try to include those for the next release. And in the meantime, keep those bug reports and pull requests coming.

For a list of all the latest changes, you can take a look at the [changelog](https://github.com/pymedusa/Medusa/blob/v0.2.11/CHANGELOG.md).

<br/>

#### 2018-09-09 ####

## 0.2.10

A hotfix release, containing some much needed bug fixes.  
You may refer to the changelog for the specific details.

<br/>

#### 2018-09-06 ####

## 0.2.9

Bulletpoints:

- Now bundling the web application using Webpack, so it should become a bit faster to load the web interface.
- The Post Processing Config page is now fully converted to Vue.
- Fixed issues with anime shows - calls to AniDB.net should now be less frequent, and the web interface should be a bit more responsive.
- Fixed UI not loading using edge browser, when using a reverse proxy (without an alternative port).
- Fixed error when changing episode status from episode status management.
- Fixed multi-episode snatches not being marked as snatched in history.
- Fixed whole seasons being downloaded as multi-episode replacement.
- A bunch of other bug fixes, check the changelog for details.

<br/>

#### 2018-07-28 ####

## 0.2.8

This version fixes the following bugs:

- The web interface not loading after the last update, and requiring a "hard" page refresh (using Ctrl + F5).
- The home page tabs being broken, when the setting for "Split home in tabs" is enabled
- Error when trying to rename episodes

<br/>

#### 2018-07-27 ####

## 0.2.7

Version 0.2.7 is out, with a number of new features/improvements and some important bugs squashed.  

Let's start with a much-requested feature. As of today, it is "again" possible to manually change the existing episode quality with support for the qualities downloaded and archived. Yes, we've heard you. And we've made sure you can overwrite the quality when in some exceptions reading the quality from the filename and getting the quality from the media, isn't working as expected.

A few months ago we introduced themes. We did this to enable the possibility of adding and versioning atomically separated frontend themes. At first, we wanted to keep support for IE11. But we changed our mind for a number of reasons.  
But with this change, it was not possible to hot-swap themes. Meaning you would need to restart Medusa, for the change to have any effect. Hot swapping themes should be possible again.

Most of our efforts are going into the frontend side of things, as we're working on a modern "componentized" frontend. This means that we are working hard to a real single page application (SPA). And part of that, means we need to transform more than 100 pages into Vue.js components. In this release, we've again added a lot of components. And there is light at the end of the tunnel.

On the providers, we've made sure that YggTorrents, NorBits, and Abnormal are working again.

We'd like to share with you [our new changelog](https://github.com/pymedusa/Medusa/blob/develop/CHANGELOG.md). We've made it part of the codebase, and hopefully more readable.  
In addition, because it's updated as we update the develop branch, you can now keep track of the changes planned for the upcoming release.

Last but not least we'd like to have your attention for a Kodi addon we're developing, that will let you re-download episodes from your seat, using a Kodi context menu.  
If you feel like experimenting a little, you can manually install this addon, and share your experiences on the addon's thread on the [Kodi forums](https://forum.kodi.tv/showthread.php?tid=333091).  
You can find more info on the addon itself on the addon's Github page: [kodi-failed-downloads-addon](https://github.com/pymedusa/kodi-failed-downloads-addon).  
Let us know if we need to improve the addon in some way, or work on the installation instructions. Any feedback is welcome!

<br/>

#### 2018-07-03 ####

## 0.2.6

Today we are extremely proud to bring you our newest release.  
For the past three weeks we have been working hard to fix as many reported bugs as we could.  
With over 50 solved issues, this has been one of the most productive releases we have ever had.

Just to name a few of the bugs that were fixed:  
- The code responsible for filtering releases based on preferred/undesired words has been almost completely rewritten, the logic behind it has been improved, making it faster and more reliable.  
- Season and Proper searches were causing multiple downloads on some occasions, that has been fixed as well.  
- In some setups, higher quality releases were not being downloaded, that should finally be a thing of the past.  
- Email notifications were not that pretty, were they? They should be beautiful again now.  
- We decided to make the quality detection for your existing episodes more flexible. It will now be easier to get your episodes correctly recognized even with minimal information available (the video resolution is all that's needed).  
- We are also planning on bringing back the manual quality selection. Sadly it didn't make it into this release.  

These and many more fixes were made possible by your bug reports, please keep them coming.  
We have also given a boost to the issue submitter's speed and accuracy, so it should now be faster to submit any bugs you may encounter right from Medusa's web interface.

On the frontend side of things, we have made much progress, although much of it is behind the scenes.  
You should already notice some speed improvements while browsing around and it will only get better once we are done with the switch.  

If you encounter a bug in the interface on any page, be sure to check the developer console for errors by clicking the `F12` key on most browsers, and add them to your bug report.

That'd be all for now, make sure to check out the changelog to find out about all the other changes, fixes and improvements.

If you like what we do and want to support us, spread the word and share the love for Medusa!

<br/>

#### 2018-06-10 ####

## 0.2.5

Release 0.2.4 was a critical bugfix. Whereas with 0.2.5 we're picking up the pace on the migration of the all pages to our new vue.js based user interface. We're still far away of finishing it, but at least we're making steady progress.

This release is filled with some nice user contributions. Support for a new (Brazilian) torrent provider named BJ-Share was added. We've also fixed our support for the provider AnimeBytes. This should now also work properly without having to resort to Jackett (torznab) for it.

Besides a really long list of bugfixes, we've finally separated Medusa's qualities and status states. This was a piece of legacy which we wanted to get rid of for a long time. With this change we removed some technical debt, and we can now further improve on our quality handling. More improvements regarding the postprocessing coming soon.

<br/>

#### 2018-05-16 ####

## 0.2.3

In our previous release, we started refactoring a lot of our user interface. With that, we noticed a few bugs popped up, which we've been fixing for the last month.

With the exception of a new provider named AvistaZ we haven't added any new features.

We did further improve the edit show page. Made it more responsive and improved the 'save' message.

<br/>

#### 2018-04-21 ####

## 0.2.2

Hi all, when we finally were up to a two weekly release cycle, we're back to almost 2 months. But we guarantee you, we haven't been sitting still. 

Let's start with mentioning our new Jackett section in the provider's config. You are now able to add dedicated Jackett providers. With that change, we took the time to fix a number of bugs we were experiencing with some Jackett providers and, for example, in combination with magnet links. Those issues should now be a thing of the past. As part of this new feature, using Newznab providers as Jackett (Torznab) providers is now deprecated. Switch them to [Jackett providers](https://github.com/pymedusa/Medusa/wiki/Using-Jackett-with-Medusa) as soon as possible for the best experience.

We haven't been able to add as many new features as we'd like to, and that's because a few months ago we started laying the foundation for a new frontend. This new frontend is based on the JavaScript framework Vue.js. And we are working hard on rewriting the existing user interface into a componentized Vue.js UI.

We will not only focus on migrating the old interface, but we will also make improvements where possible, with little impact.

When migrated to the new Vue.js based UI, we will start development on a new responsive UI. And for that, we can use some help. So if you're good with HTML, JS, CSS, UX, Photoshop, whatever actually, do let us know!

<br/>

#### 2018-03-1 ####

## 0.2.1

We've finally managed to release within a two week cycle. And we hope to be able to continue on this pace, for the coming releases. This release will give you two noticable new features and a load of bug fixes.

We've finally implemented a proper caching system for the recommended shows. Opening a recommended shows page from trakt, anidb or imdb, might still take a while the first time. But all shows are stored on the filesystem. Meaning that the next load of a recommended show list should be fast. Shows are stored 7 days for now. But we might increase this in the future. The shows are stored in a standardized way, which enables us to start creating composite lists. We're not there yet, but you can expect it in one of the next releases.

As for the second feature, we've provided the option to configure a CA bundle for when using a self signed SSL certificate. This will allow you to connect to external services like Transmission which have a self signed certificate configured, without needing to disable certificate verification.

We'd like to thank everyone contributing through issues, pull requests and other channels.

<br/>

#### 2018-02-17 ####

## 0.2.0

As you might have noticed with this release we're bumping our version with a minor version bump according the semver rules. We did this for a couple of reasons. One, are happy to share with you that Medusa is finally a fully multi indexer PVR. And one of its kind in that. We know we supported the movie db and tvmaze for some time now, but it was never fully implemented. As such as it was not possible to add a show from tvdb with the same id as a show from tvmaze. At first we noticed that the different indexers where avoiding overlapping each others id's. But lately this was not anymore the case.

This change also means that we had to rework our image caching, as we now store the images in a separate folder for each indexer. With this change we took the time to remove some long outstanding bugs. And we hope that with these changes all bugs related to image caching have been resolved.

Another new cool feature is atomically separated user interfaces. This means that it is now possible to add your own UI. Each UI is isolated into it's own folder structure. At the same time we've taken use of this new frondend structure, by create a fully IE11 supported legacy UI. The feature set for this legacy UI has been frozen. So new UI features will not make it into this UI. The other UI's dark and light are going to make use of modern browser technologies, so you can expect to see some cool UI features in the near future.

We encourage anyone who has some or a lot of web design skills, to make use of our api v2 (and api v1 where needed), to start creating some cool themed UI's.

Of course we've also included some bug fixes and provider maintenance. As one of the more popular providers torrentday made a change to its api. We've made adaptations to make the provider usable again. And if that's not enough, we've added the provider PrivateHD.

<br/>

#### 2018-01-15 ####

## 0.1.23

This is our first release of the year. We have some big changes in the pipeline for your guys, but because IMDb made some changes in their api, we thought it was important to have that fixed asap.

For the anime fans we've added an option that allows you to separate your list of anime with the list of series using tabs in the home page. Besides that, this release focuses mostly around bugfixes and some preparation towards a new big feature coming shortly after this one.

This will also be the last semVer path update. Our next release will continue with 0.2.0.

<br/>

#### 2017-12-26 ####

## 0.1.21

We aimed for a Christmas release, and here it is! We'd like to thank everyone for the increased support with issues submissions an even a few new committers.

This release can be remembered as the one when we added the much requested feature 'search delay'. It will allow you to delay snatches for a specific episode. This way you can prioritize that nzb provider over a torrent. Or make sure you only use that very valuable grab for a provider when absolutely needed. We hope you'll find good use for it.

Of course we've again fixed a lot of bugs. As for example YggTorrent should be usable again. And when adding new shows, it should now pick the highest rated image available. If you'd like to replace your current posters, banners or fanart, we've got you covered. You can use the mass update (Manage - Mass update) for that.

You can expect from us to keep improving upon Medusa in 2018. So until then Merry Christmas and best wishes for 2018!

<br/>

#### 2017-12-06 ####

## 0.1.20

This is mainly a bugfix release, addressing some annoying issues with a bunch of providers that had their addresses changed. Besides the usual bug-squashing (see changelog), we also managed to improve the season searches, which should now be better for some providers. We also added two new network icons that were requested. The subtitle module was updated and some old issues from OpenSubtitles, Addic7ed and LegendasTV errors when unavailable/timeout/too many requests were fixed. As always, we tried our best to enhance the overall stability of Medusa. In this regard your issue reports are fundamental, please keep on reporting the bugs and errors you find on our official issues tracker.

<br/>

#### 2017-10-21 ####

## 0.1.16

Not much has happened these last two months, but we thought that adding two new providers, and fixing a number of critical bugs warrants enough reason for a new release.

So here you have it guys and gals. Thanks to a number of community contributions, we've been able to add the providers HeBits and EliteTracker. And of course, all the reported GitHub issues helped us allot in fixing some long outstanding bugs.

Especially anime watchers will rejoice we've finally fixed a bug where some anime shows, which were going into a season that required a season scene exception, missing allot of results when the season just started.

We'd also like to use this opportunity to emphasize that a project like this is very dependent on its community. So if you don't have any coding experience, please keep on submitting those bug reports. But also if you do have some coding experience, don't be afraid to pitch in. There are some more experienced devs, who are more than willing to help you out.

<br/>

#### 2017-08-29 ####

## 0.1.15

Again it took a while to get this release out. But in return we've managed to bring out a very stable release with lot's of new features. What to think of the new providers, Torrenting and YggTorrent. And the new notifier, Slack. We've made some GUI improvements that should help with the usability on devices with a smaller resolution like on mobile or tablets.

We've tried to make the recommended lists usable again by implementing a cache which means the first time we load a recommended list still might time out; but subsequent loads should be remarkable faster.

We'd like to thank you guys for reporting the issues. As you helped us getting providers like SceneAccess, HoundDawgs, LimeTorrents, Shanaprojects and BIT-HDTV fixed. So keep up with the good work and we will too!

<br/>

#### 2017-07-20 ####

Medusa is currently having issues because of a false DMCA request that was sent to Github. We have countered this notice and are waiting to hear back from them.

Because of this none of the developers from Medusa, Sickrage and SickGear are able to access our repos so there won't be any updates at all until this is all sorted. We hope you all understand and we're very sorry for the current situation.

If you'd like to keep up to date with what's going on please join our [IRC channel](https://kiwiirc.com/client/irc.freenode.net/#pymedusa).

<br/>

#### 2017-07-06 ####

## 0.1.14

This is mainly a bugfix release, focusing on enhancing the overall stability of the application. Nonetheless, we wanted to bring you some new providers to componsate the ones that sadly had to be removed. The new Nyaa provider was added for the anime fans out there, it is one of the most popular anime trackers out there. Torrent9 was added as well, it is a public french torrent tracker, that lists many dubbed releases. An additonal subtitles provider was added as well: Wizdom, bringing us quality Hebrew subtitles. The rest of the changes were mainly bug fixes and code cleanups. Make sure to check out the complete changelog for a detailed overview of the remaining changes.

<br/>

#### 2017-05-29 ####

## 0.1.13

We managed to slip one release in for you guys in the month of May. During the past month we unfortunately saw some good trackers go. But on the bright side, some others took the spotlight. We quickly adapted, and made these available for you. For our anime loving users, we filled the void that NyaaTorrents left us, with new indexers like HorribleSubs, AniDex and Shanaproject. In the foreseeable future we expect to have a nice replacement available for NyaaTorrents. The community has really stepped up there. So stay tuned for that.

In addition to fine-tuning providers, we implemented a lot of bug fixes. If you want to know more about these, take a look at the changelog, or spend some time on our GitHub page, which you can use to track or report issues.

<br/>

#### 2017-04-21 ####

## 0.1.12

This release contains many bug fixes and a few useful new features. First of all, we would like to say thank you to all users who took the time to report bugs. We take your feedback very seriously and we are constantly trying to improve Medusa.

Let's talk about the new features now. A lot of users have reported slow loading times with huge libraries, this should be much better now with the lazy-loading of images. Your backlog has always been too messy? We made some substantial changes that give you more control over the overview, making it easier and more straightforward to manage your pending shows. An exclusive (for now) feature for Transmission and Deluge users has been added as well. Completed downloads can be moved to a seeding folder of choice, making it easier to handle files that are waiting to be processed. Make sure to check it out if interested. Now you can also update scene exceptions or sync Trakt shows manually if required.

Users that require basic authentication to access their Medusa installs, rejoice! That annoying bug has been fixed now. Please check out the changelog to find out more about other bugs that got fixed in this release.

<br/>

#### 2017-02-19 ####

## 0.1.11

Little time has passed, but a lot of work has been done. The most noticeable changes are the user interface improvements. We'd like to thank wimpyrbx for his awesome work on the new logo, as well as the many designs he has provided which have resulted in a new look & feel. You can expect to see even more UI improvements in the coming months.

Backlogged episode management has been improved by adding controls for starting manual or forced searches in the backlog overview page. Upon changing the desired qualities for a show you will get a real-time warning showing how it will affect your backlog. A helpful message appears when episodes are added or removed from the backlog due to changes in show quality settings.

With Medusa becoming more and more stable you can expect to see shorter release cycles. After a lot of time spent increasing overall stability, we will now be able to focus more on Medusa's overall performance. Expect to see performance improvements to the overall startup as well as faster loading of pages in the coming releases.

As always we value the feedback we receive, so keep creating those issue reports!

<br/>

#### 2017-02-03 ####

## 0.1.10

New year, new release! This time we are proud to bring you a very polished release, containing mainly bug fixes and some fine
tuning to our new indexers [TVmaze](http://www.tvmaze.com/) and [TMDb](https://www.themoviedb.org/). A big part of the code that
powers the shows information has been rewritten. Adding and updating shows should now be faster than ever before. Some fixes were 
added to our [guessit](https://github.com/guessit-io/guessit) parser that will make the parsing of anime shows more reliable. Furthermore, the post-processing logic was improved. Processing epsiodes should be quicker and we also added some more detailed logs, that will help you understand what is going on exactly during the post-processing. Last but not least, we updated the main shows page, making it more visually appealing - more of this in the next release. As always, many bug fixes for our providers and indexers, including some old bug reports. We hope you enjoy this release. Make sure to report the bugs you find to our [Github issues tracker](https://github.com/pymedusa/Medusa/issues).

As for the users who are interested into new developments, we're working on a new feature for our Transmission torrent users.
We've added a new feature that removes the torrent from the torrent client, when the ratio (configured per provider) has been reached. You'll find this setting in the "Search settings" menu, as an opt-in setting. For now it will only log the removal but will not remove the torrent.
If your willing to help us out, please enable the setting and let us know if you notice a torrent removal is being logged when it shouldn't. We've started the implementation for the Transmission client. If this proves to be a useful addition, and no blocking issues pop up, we're planning to change the log to an actual removal and we'll also implement it for the other torrent clients.

<br/>

#### 2016-12-24 ####

## 0.1.9

After over a month of hard work, we are proud to bring you one more present for your Christmas tree! We promised it and here
it is: indexer support for [TVmaze](http://www.tvmaze.com/) and [TMDb](https://www.themoviedb.org/). You can now choose your
favorite indexer, making sure you will never have to deal with missing shows or unreachable indexers again. As always we have
also fixed many bugs and cleaned up a lot of code. Make sure to check the [full changelog](https://github.com/pymedusa/Medusa/compare/master...develop) (almost 400 commits!) for more details. We'd like to take this
opportunity to wish everyone a Merry Christmas and a Happy New Year.

<br/>

#### 2016-11-18 ####

## 0.1.8.1

This is just a bug fix release in order to bring you more stability.
TVDB website was down for a few hours and that has caused issues that are now handled gracefully.
Remember that reporting issues helps us making a better software.

<br/>

#### 2016-11-15 ####

## 0.1.8

Once again, it's that time of the month! We are pleased to announce the release of our latest effort.
This release took some more time than usual, but for good reason. First of all, we finally have the new TvDB API up and running.
It includes many improvements, like season specific updates, and we can make sure to have a future-proof implementation. We have also added a new library called [knowit](https://github.com/ratoaq2/knowit), that will allow to obtain very detailed information about the files in our library, like video quality and audio format for example. These information will be extremely helpful in the future, as we are planning to extend the search possibilites. At the same time we are making progress with the Vue.js implementation, we don't have an ETA for the new user interface yet, but once [Vue.js](https://vuejs.org/) is added, it will be much easier to give Medusa a whole new look. Want something to look forward to in the near future? Support for [TVmaze](http://www.tvmaze.com/) and [TMDb](https://www.themoviedb.org/) indexers is finally coming in our next major release! Like always, tons of tuning and bug fixes in this release as well. Make sure to check out the changelog for more detailed information.

<br/>

#### 2016-10-27 ####

## 0.1.7

Again, some more fixes and a lot of code improvements!

As promised we renamed the github repository from SickRage to Medusa. It's a transparent change, which shouldn't cause any trouble for the users. GitHub takes care of the redirect fortunately, so everything should be going smooth.
A lot of time and effort has been put into optimizing the post-processing process. That code has been partially rewritten and should be faster, more precise and a lot less error-prone now. 
Furthermore, as planned, we now have the "Manual Subtitle search" (CC icon) and the new "Subtitle re-download" (lang flag icon), which will allow you to re-download the subtitles whenever you'd like to. Please try it and give us some feedback!

<br/>

#### 2016-10-05 ####

## 0.1.6

Again some more fixes, a lot of code improvements!

We are planning to rename github repository from SickRage to Medusa. It will be transparent to users as Github does the redirect.
For 0.1.7 we are planning to release a new feature "Manual Subtitle search"! If you are brave enough contact us to help test and give feedback.

<br/>

#### 2016-09-22 ####

## 0.1.5.2 bugfix release

This is just another bugfix release.

<br/>

#### 2016-09-18 ####

## 0.1.5.1 bugfix release

This is just a bugfix release that will allow users to upgrade with other databases. Thanks to all bug reports that allowed us to handle this fairly quickly and sorry for the inconvenience. In the future, we will make sure this doesn't happen again.

<br />

#### 2016-09-18 ####

## 0.1.5 here!

This week we are proud to bring you another important release, which focuses mainly on fixing annoying bugs and general code improvements. We worked hard to improve the History page, making it load noticeably faster than ever before. The page also contains proper information now, which should make it easier to distinguish between release types. The whole code behind proper detection and handling got improved as well. We've implemented a check that should prevent propering of different codecs, which was quite annoying. In addition to fixing and improving many providers, we now have an automatic bypass for the CloudFlare protection, which was preventing Medusa to scrape some of them. Last but not least: did you know that we have an extremely easy to use Windows installer now? Check it out [here](https://github.com/pymedusa/MedusaInstaller/releases). For the next release we'll be focusing mainly on rebranding and code refactoring. We hope you'll enjoy this release as much as we did working on it.

<br />

#### 2016-09-07 ####

## 0.1.4.1 released!

We released earlier to fix some mako issues while saving PostProcessor and Notification settings.

<br />

#### 2016-08-30 ####

## 0.1.4 released!

Another release with a lot of fixes and some new features. The most noticeable change in this release is the improved 'Recommended Shows' page, which now features three options to add your favorite shows: IMDB's popular shows, Trakt lists and for the anime watchers among us, the brand new Anidb's hot anime list. This release consists mainly of under-the-hood changes, as always check out the changelog for more information. We hope you enjoy our efforts!

<br />

#### 2016-08-03 ####

## 0.1.3 is finally here!

After nearly a month of hard work, the Medusa team is proud to bring you the biggest release to date, featuring many new features, bug fixes and improvements. The highlight of this release is without doubt the significant improvement made to the name parser. Thanks to [guessit](https://github.com/guessit-io/guessit) we now have a more accurate release name detection and a much more efficient proper detection. Show pages are now enriched with beautiful posters and contain more information about the amount of episodes present for each season, including their total size. Many providers have been fixed, some were added and a bunch were improved. Please have a look at the full changelog for more detailed information. We would like to thank everyone for the amazing support in the past few months and wish all of you relaxing summer holidays!

<br />

#### 2016-05-23 ####

## Welcome to **Medusa**!

We have worked really hard to bring you many improvement to our fork of SickRage/SickBeard.

First and foremost, we've added a new manual search so you can select the search result you want (Voted **the most desired feature** by SickRage users!) 

In addition, detection of release qualities has been greatly improved by adding additional tags and improving detection of previous tags.

Subtitle searches now work better than ever with the new refiners which ensure higher quality matches, even if the file has already been renamed and added to your library.

Also, don't forget to check out our new Preferred and Undesired word lists which complement the existing Required and Ignored lists!
