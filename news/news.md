####Please read the [Wiki/FAQ](https://github.com/pymedusa/Medusa/wiki) before opening an issue####
All issues and bug reports must be opened at [GitHub](https://github.com/pymedusa/Medusa/issues)

####2018-03-1####

## 0.2.1

We've finally managed to release within a two week cycle. And we hope to be able to continue on this pace, for the coming releases. This release will give you two noticable new features and a load of bug fixes.

We've finally implemented a proper caching system for the recommended shows. Opening a recommended shows page from trakt, anidb or imdb, might still take a while the first time. But all shows are stored on the filesystem. Meaning that the next load of a recommended show list should be fast. Shows are stored 7 days for now. But we might increase this in the future. The shows are stored in a standardized way, which enables us to start creating composite lists. We're not there yet, but you can expect it in one of the next releases.

As for the second feature, we've provided the option to configure a CA bundle for when using a self signed SSL certificate. This will allow you to connect to external services like Transmission which have a self signed certificate configured, without needing to disable certificate verification.

We'd like to thank everyone contributing through issues, pull requests and other channels.

####2018-02-17####

## 0.2.0

As you might have noticed with this release we're bumping our version with a minor version bump according the semver rules. We did this for a couple of reasons. One, are happy to share with you that Medusa is finally a fully multi indexer PVR. And one of its kind in that. We know we supported the movie db and tvmaze for some time now, but it was never fully implemented. As such as it was not possible to add a show from tvdb with the same id as a show from tvmaze. At first we noticed that the different indexers where avoiding overlapping each others id's. But lately this was not anymore the case.

This change also means that we had to rework our image caching, as we now store the images in a separate folder for each indexer. With this change we took the time to remove some long outstanding bugs. And we hope that with these changes all bugs related to image caching have been resolved.

Another new cool feature is atomically separated user interfaces. This means that it is now possible to add your own UI. Each UI is isolated into it's own folder structure. At the same time we've taken use of this new frondend structure, by create a fully IE11 supported `legacy` UI. The feature set for this legacy UI has been frozen. So new UI features will not make it into this UI. The other UI's `dark` and `light` are going to make use of modern browser technologies, so you can expect to see some cool UI features in the near future.

We encourage anyone who has some or a lot of web design skills, to make use of our api v2 (and api v1 where needed), to start creating some cool themed UI's.

Of course we've also included some bug fixes and provider maintenance. As one of the more popular providers `torrentday` made a change to its api. We've made adaptations to make the provider usable again. And if that's not enough, we've added the provideder `PrivateHD`.

####2018-01-15####

## 0.1.23

This is our first release of the year. We have some big changes in the pipeline for your guys, but because IMDb made some changes in their api, we thought it was important to have that fixed asap.

For the anime fans we've added an option that allows you to separate your list of anime with the list of series using tabs in the home page. Besides that, this release focuses mostly around bugfixes and some preparation towards a new big feature coming shortly after this one.

This will also be the last semVer path update. Our next release will continue with 0.2.0.

####2017-12-26####

## 0.1.21

We aimed for a Christmas release, and here it is! We'd like to thank everyone for the increased support with issues submissions an even a few new committers.

This release can be remembered as the one when we added the much requested feature 'search delay'. It will allow you to delay snatches for a specific episode. This way you can prioritize that nzb provider over a torrent. Or make sure you only use that very valuable grab for a provider when absolutely needed. We hope you'll find good use for it.

Of course we've again fixed a lot of bugs. As for example YggTorrent should be usable again. And when adding new shows, it should now pick the highest rated image available. If you'd like to replace your current posters, banners or fanart, we've got you covered. You can use the mass update (Manage - Mass update) for that.

You can expect from us to keep improving upon Medusa in 2018. So until then Merry Christmas and best wishes for 2018!

####2017-12-06####

## 0.1.20

This is mainly a bugfix release, addressing some annoying issues with a bunch of providers that had their addresses changed. Besides the usual bug-squashing (see changelog), we also managed to improve the season searches, which should now be better for some providers. We also added two new network icons that were requested. The subtitle module was updated and some old issues from OpenSubtitles, Addic7ed and LegendasTV errors when unavailable/timeout/too many requests were fixed. As always, we tried our best to enhance the overall stability of Medusa. In this regard your issue reports are fundamental, please keep on reporting the bugs and errors you find on our official issues tracker.

<br/>

####2017-10-21####

## 0.1.16

Not much has happened these last two months, but we thought that adding two new providers, and fixing a number of critical bugs warrants enough reason for a new release.

So here you have it guys and gals. Thanks to a number of community contributions, we've been able to add the providers HeBits and EliteTracker. And of course, all the reported GitHub issues helped us allot in fixing some long outstanding bugs.

Especially anime watchers will rejoice we've finally fixed a bug where some anime shows, which were going into a season that required a season scene exception, missing allot of results when the season just started.

We'd also like to use this opportunity to emphasize that a project like this is very dependent on its community. So if you don't have any coding experience, please keep on submitting those bug reports. But also if you do have some coding experience, don't be afraid to pitch in. There are some more experienced devs, who are more than willing to help you out.

<br/>

####2017-08-29####

## 0.1.15

Again it took a while to get this release out. But in return we've managed to bring out a very stable release with lot's of new features. What to think of the new providers, Torrenting and YggTorrent. And the new notifier, Slack. We've made some GUI improvements that should help with the usability on devices with a smaller resolution like on mobile or tablets.

We've tried to make the recommended lists usable again by implementing a cache which means the first time we load a recommended list still might time out; but subsequent loads should be remarkable faster.

We'd like to thank you guys for reporting the issues. As you helped us getting providers like SceneAccess, HoundDawgs, LimeTorrents, Shanaprojects and BIT-HDTV fixed. So keep up with the good work and we will too!

<br/>

####2017-07-20####

Medusa is currently having issues because of a false DMCA request that was sent to Github. We have countered this notice and are waiting to hear back from them.

Because of this none of the developers from Medusa, Sickrage and SickGear are able to access our repos so there won't be any updates at all until this is all sorted. We hope you all understand and we're very sorry for the current situation.

If you'd like to keep up to date with what's going on please join our [IRC channel](https://kiwiirc.com/client/irc.freenode.net/#pymedusa).

<br/>

####2017-07-06####

## 0.1.14

This is mainly a bugfix release, focusing on enhancing the overall stability of the application. Nonetheless, we wanted to bring you some new providers to componsate the ones that sadly had to be removed. The new Nyaa provider was added for the anime fans out there, it is one of the most popular anime trackers out there. Torrent9 was added as well, it is a public french torrent tracker, that lists many dubbed releases. An additonal subtitles provider was added as well: Wizdom, bringing us quality Hebrew subtitles. The rest of the changes were mainly bug fixes and code cleanups. Make sure to check out the complete changelog for a detailed overview of the remaining changes.

<br/>

####2017-05-29####

## 0.1.13

We managed to slip one release in for you guys in the month of May. During the past month we unfortunately saw some good trackers go. But on the bright side, some others took the spotlight. We quickly adapted, and made these available for you. For our anime loving users, we filled the void that NyaaTorrents left us, with new indexers like HorribleSubs, AniDex and Shanaproject. In the foreseeable future we expect to have a nice replacement available for NyaaTorrents. The community has really stepped up there. So stay tuned for that.

In addition to fine-tuning providers, we implemented a lot of bug fixes. If you want to know more about these, take a look at the changelog, or spend some time on our GitHub page, which you can use to track or report issues.

<br/>

####2017-04-21####

## 0.1.12

This release contains many bug fixes and a few useful new features. First of all, we would like to say thank you to all users who took the time to report bugs. We take your feedback very seriously and we are constantly trying to improve Medusa.

Let's talk about the new features now. A lot of users have reported slow loading times with huge libraries, this should be much better now with the lazy-loading of images. Your backlog has always been too messy? We made some substantial changes that give you more control over the overview, making it easier and more straightforward to manage your pending shows. An exclusive (for now) feature for Transmission and Deluge users has been added as well. Completed downloads can be moved to a seeding folder of choice, making it easier to handle files that are waiting to be processed. Make sure to check it out if interested. Now you can also update scene exceptions or sync Trakt shows manually if required.

Users that require basic authentication to access their Medusa installs, rejoice! That annoying bug has been fixed now. Please check out the changelog to find out more about other bugs that got fixed in this release.

<br/>

####2017-02-19####

## 0.1.11

Little time has passed, but a lot of work has been done. The most noticeable changes are the user interface improvements. We'd like to thank wimpyrbx for his awesome work on the new logo, as well as the many designs he has provided which have resulted in a new look & feel. You can expect to see even more UI improvements in the coming months.

Backlogged episode management has been improved by adding controls for starting manual or forced searches in the backlog overview page. Upon changing the desired qualities for a show you will get a real-time warning showing how it will affect your backlog. A helpful message appears when episodes are added or removed from the backlog due to changes in show quality settings.

With Medusa becoming more and more stable you can expect to see shorter release cycles. After a lot of time spent increasing overall stability, we will now be able to focus more on Medusa's overall performance. Expect to see performance improvements to the overall startup as well as faster loading of pages in the coming releases.

As always we value the feedback we receive, so keep creating those issue reports!

<br/>

####2017-02-03####

## 0.1.10

New year, new release! This time we are proud to bring you a very polished release, containing mainly bug fixes and some fine
tuning to our new indexers [TVmaze](http://www.tvmaze.com/) and [TMDb](https://www.themoviedb.org/). A big part of the code that
powers the shows information has been rewritten. Adding and updating shows should now be faster than ever before. Some fixes were 
added to our [guessit](https://github.com/guessit-io/guessit) parser that will make the parsing of anime shows more reliable. Furthermore, the post-processing logic was improved. Processing epsiodes should be quicker and we also added some more detailed logs, that will help you understand what is going on exactly during the post-processing. Last but not least, we updated the main shows page, making it more visually appealing - more of this in the next release. As always, many bug fixes for our providers and indexers, including some old bug reports. We hope you enjoy this release. Make sure to report the bugs you find to our [Github issues tracker](https://github.com/pymedusa/Medusa/issues).

As for the users who are interested into new developments, we're working on a new feature for our Transmission torrent users.
We've added a new feature that removes the torrent from the torrent client, when the ratio (configured per provider) has been reached. You'll find this setting in the "Search settings" menu, as an opt-in setting. For now it will only log the removal but will not remove the torrent.
If your willing to help us out, please enable the setting and let us know if you notice a torrent removal is being logged when it shouldn't. We've started the implementation for the Transmission client. If this proves to be a useful addition, and no blocking issues pop up, we're planning to change the log to an actual removal and we'll also implement it for the other torrent clients.

<br/>

####2016-12-24####

## 0.1.9

After over a month of hard work, we are proud to bring you one more present for your Christmas tree! We promised it and here
it is: indexer support for [TVmaze](http://www.tvmaze.com/) and [TMDb](https://www.themoviedb.org/). You can now choose your
favorite indexer, making sure you will never have to deal with missing shows or unreachable indexers again. As always we have
also fixed many bugs and cleaned up a lot of code. Make sure to check the [full changelog](https://github.com/pymedusa/Medusa/compare/master...develop) (almost 400 commits!) for more details. We'd like to take this
opportunity to wish everyone a Merry Christmas and a Happy New Year.

<br/>

####2016-11-18####

## 0.1.8.1

This is just a bug fix release in order to bring you more stability.
TVDB website was down for a few hours and that has caused issues that are now handled gracefully.
Remember that reporting issues helps us making a better software.

<br/>

####2016-11-15####

## 0.1.8

Once again, it's that time of the month! We are pleased to announce the release of our latest effort.
This release took some more time than usual, but for good reason. First of all, we finally have the new TvDB API up and running.
It includes many improvements, like season specific updates, and we can make sure to have a future-proof implementation. We have also added a new library called [knowit](https://github.com/ratoaq2/knowit), that will allow to obtain very detailed information about the files in our library, like video quality and audio format for example. These information will be extremely helpful in the future, as we are planning to extend the search possibilites. At the same time we are making progress with the Vue.js implementation, we don't have an ETA for the new user interface yet, but once [Vue.js](https://vuejs.org/) is added, it will be much easier to give Medusa a whole new look. Want something to look forward to in the near future? Support for [TVmaze](http://www.tvmaze.com/) and [TMDb](https://www.themoviedb.org/) indexers is finally coming in our next major release! Like always, tons of tuning and bug fixes in this release as well. Make sure to check out the changelog for more detailed information.

<br/>

####2016-10-27####

## 0.1.7

Again, some more fixes and a lot of code improvements!

As promised we renamed the github repository from SickRage to Medusa. It's a transparent change, which shouldn't cause any trouble for the users. GitHub takes care of the redirect fortunately, so everything should be going smooth.
A lot of time and effort has been put into optimizing the post-processing process. That code has been partially rewritten and should be faster, more precise and a lot less error-prone now. 
Furthermore, as planned, we now have the "Manual Subtitle search" (CC icon) and the new "Subtitle re-download" (lang flag icon), which will allow you to re-download the subtitles whenever you'd like to. Please try it and give us some feedback!

<br/>

####2016-10-05####

## 0.1.6

Again some more fixes, a lot of code improvements!

We are planning to rename github repository from SickRage to Medusa. It will be transparent to users as Github does the redirect.
For 0.1.7 we are planning to release a new feature "Manual Subtitle search"! If you are brave enough contact us to help test and give feedback.

<br/>

####2016-09-22####

## 0.1.5.2 bugfix release

This is just another bugfix release.

<br/>

####2016-09-18####

## 0.1.5.1 bugfix release

This is just a bugfix release that will allow users to upgrade with other databases. Thanks to all bug reports that allowed us to handle this fairly quickly and sorry for the inconvenience. In the future, we will make sure this doesn't happen again.

<br />

####2016-09-18####

## 0.1.5 here!

This week we are proud to bring you another important release, which focuses mainly on fixing annoying bugs and general code improvements. We worked hard to improve the History page, making it load noticeably faster than ever before. The page also contains proper information now, which should make it easier to distinguish between release types. The whole code behind proper detection and handling got improved as well. We've implemented a check that should prevent propering of different codecs, which was quite annoying. In addition to fixing and improving many providers, we now have an automatic bypass for the CloudFlare protection, which was preventing Medusa to scrape some of them. Last but not least: did you know that we have an extremely easy to use Windows installer now? Check it out [here](https://github.com/pymedusa/MedusaInstaller/releases). For the next release we'll be focusing mainly on rebranding and code refactoring. We hope you'll enjoy this release as much as we did working on it.

<br />

####2016-09-07####

## 0.1.4.1 released!

We released earlier to fix some mako issues while saving PostProcessor and Notification settings.

<br />

####2016-08-30####

## 0.1.4 released!

Another release with a lot of fixes and some new features. The most noticeable change in this release is the improved 'Recommended Shows' page, which now features three options to add your favorite shows: IMDB's popular shows, Trakt lists and for the anime watchers among us, the brand new Anidb's hot anime list. This release consists mainly of under-the-hood changes, as always check out the changelog for more information. We hope you enjoy our efforts!

<br />

####2016-08-03####

## 0.1.3 is finally here!

After nearly a month of hard work, the Medusa team is proud to bring you the biggest release to date, featuring many new features, bug fixes and improvements. The highlight of this release is without doubt the significant improvement made to the name parser. Thanks to [guessit](https://github.com/guessit-io/guessit) we now have a more accurate release name detection and a much more efficient proper detection. Show pages are now enriched with beautiful posters and contain more information about the amount of episodes present for each season, including their total size. Many providers have been fixed, some were added and a bunch were improved. Please have a look at the full changelog for more detailed information. We would like to thank everyone for the amazing support in the past few months and wish all of you relaxing summer holidays!

<br />

####2016-05-23####

## Welcome to **Medusa**!

We have worked really hard to bring you many improvement to our fork of SickRage/SickBeard.

First and foremost, we've added a new manual search so you can select the search result you want (Voted **the most desired feature** by SickRage users!) 

In addition, detection of release qualities has been greatly improved by adding additional tags and improving detection of previous tags.

Subtitle searches now work better than ever with the new refiners which ensure higher quality matches, even if the file has already been renamed and added to your library.

Also, don't forget to check out our new Preferred and Undesired word lists which complement the existing Required and Ignored lists!
