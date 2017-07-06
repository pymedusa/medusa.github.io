### v0.1.14:

[full changelog](https://github.com/pymedusa/Medusa/commits/master)

**New Features**:

- Added series ID to warning logs
- Updated subliminal to the latest version
- Made the hardcoded undesired words, "internal" and "xvid", configurable
- Improved releases filter and added tests
- Improved searching and selection of results
- Improved Danishbits to use its search api
- Forced daily search now always updates cache
- Episodes with Unknown quality can be refreshed now
- Various and improvements to providers
- Updated knowit to latest version
- Added moving and deleting torrents with Deluge
- Added more torrent caching sites
- Improved proper search code
- Various fixes and improvements to LegendasTV
- Added Wizdom custom provider for Hebrew subtitles
- Updated Pygithub to version 1.34
- Updated dogpile.cache to version 0.6.4
- Updated style adapter
- Fixed Subscenter URL and other minor issues
- Added Torrent9 torrent provider

**Fixes**:

- Fixed trakt checker trying to get episodes that don't exist
- Fixed a TypeError in manual search
- Fixed a ValueError for Transmission client
- Fixed season pack forced search
- Fixed date parsing issue for TorrentProject provider
- Fixed episode refresh which assumed same file if size is 0
- Fixed warning logs for deprecated show attribute
- Fixed BraceAdapter for version_checker
- Fixed NullHandler in naming
- Fixed KeyError for LegendasTV subtitles provider
- Fixed processing issue with hard/symlinks
- Fixed logging issue with multi-episode searches
- Fixed manage torrents not working because of mixed content blocking
- Fixed TypeError in custom providers config
- Fixed TorrentDay URL
- Fixed knowit random provider order
- Fixed selection with multiple locations
- Fixed download and parsing of human date for Zooqle
- Fixed a TypeError in best results picking
- Fixed a TypeError in Shana Project provider
- Fixed missing posters, when the trakt folder hadn't been created
- Fixed sorting by size in snatchSelection.mako
- Removed T411 torrent provider
- Fixed HorribleSubs provider for torrents without magnet
- Fixed log stack trace
- Fixed TypeError: tuple indices must be integers, not unicode
- Fixed Nyaatorrents and renamed to Nyaa
- Removed Cpasbien, Extratorrent and Freshontv providers
- Removed dead torrent cache providers

### v0.1.13:

[full changelog](https://github.com/pymedusa/Medusa/commits/master)

**New Features**:

- Added option to change web root in config/general
- Added HorribleSubs, AniDex and Shanaproject torrent providers
- Added sorting and filtering in 'Missed Subtitles in PostProcess' page for users with 'Postpone PP if no subtitle' enabled
- Added a centralized improved publishing date parser for Limetorrents, Torrentz2, HDSpace, TorrentProject, GFTracker, HoundDawgs, Bit-HDTV, CPasBien

**Fixes**:

 - Fixed background image not changing in the home page
 - Fixed issue of episodes being converted from downloaded (with quality) to archived (without a quality) when the source got deleted. It should maintain it's the original quality.
 - Fixed rebuilding the show name cache after a change to the scene exceptions
 - Fixed an occasional refresh of the network timezones causing a lot of errors
 - Fixed some shows showing a show status of 'unknown' instead of 'continuing'
 - Changed to log to warning instead of error when refreshing a show while experiencing indexer connectivity issues
 - Fixed reusing "wrong" guessit cached name parsing after new numbering
 - Fixed associated files being deleted on rename
 - Fixed some subtitle errors showing as ERROR instead of WARNING (e.g Out of disk space)
 - Change 'moving torrent' feature log message to debug
 - Rebranded provider TransmitTheNet to Nebulance
 - Fixed scanning/Refining video in the 'unpack' folder causing MalformedMKVError
 - Changed T411 to use new domain .al
 - Fixed AnimeBytes login and download
 - Fixed HDBits search
 - Fixed mako error when user is adding his first show
 - Updated Xthor provider to use API instead of web scraping
 - Fixed uTorrent "bad request" error, when sending torrents with a magnet url as well as allot of trackers
 - Fixed error when editing show and toggling DVD order setting
 - Improved T411 torrent provider (fixed returning a lot of bad results)
 - Updated guessit to fix detection of show with 'True' in title

### v0.1.12:

[full changelog](https://github.com/pymedusa/Medusa/commits/master)

**New Features**:

- Transmission: removing torrents is now live. We used to only log the removal
- Add Trakt logo in home and show page if Trakt enabled and trakt_id available
- Change propers frequency without restart
- Transmission and Deluge: move torrents to a given folder after post-processing
- Added Trakt support to TMDB. TVmaze won't be supported by Trakt
- New backlogOverview status filter and period filter
- Added mobile view to a lot of Medusa pages and improve visual
- Highlight selected rows in tables
- Choose show's root from home page
- Lazy loading of images
- Add button in Trakt settings to force sync

**Fixes**:

 - Fixed get popular shows by using imdb-pie library
 - Fixed showing the N/A quality when failed downloads
 - Fixed T411 api url
 - Fixed Trakt warnings when user didn't had Trakt enabled
 - Rewrited entire Trakt code and improved log messags and warnings
 - Added a warn in rename page saying remaing will broken symlinks
 - Fix DVD Order and warn user if no DVD Order available to disable setting
 - Improved already processed propers by storing only the needed amount of data
 - Fixed episode saving to database when not needed
 - Fixed mappings between shows not saving to database
 - Added missed shows status in home page (normalize all to Continuing|Ended)
 - Fixed root dir not changing on show add (when multiple show roots)
 - Fixed not using default indexer in mass add shows if no indexer found in metadata
 - Fixed deletion of extracted media file it file was postponed
 - Fixed speed.cd always changing login URL
 - Fixed view logs rendering as html
 - Fix ugly mass update notification
 - Fixed raising error if we can't create folder. Show a message instead
 - Improve match of snatched NZB items in snatchSelection using size
 - Updated Guessit with latest fixes
 - Improved log when no results from NZB providers
 - Fixed change show location not creating show folder
 - Fixed editing root dir in mass update, redirects to default home page
 - Fixed viewlog objects not working
 - Auto refresh page after change theme
 - Fixed showing provider image when Release group is equal to provider name
 - Fixed not showing correct default indexer
 - Fixed adding custom torrent provider
 - Fixed missing "indexer" sorting option in poster view
 - Fixed "indexer" sorting for banner and small poster
 - Fixed table filtering not working after page refresh
 - Fixed reverse proxy issues with basic auth
 - Added additional trackers to rarbg's magnets like all other providers
 - Reduced min time to update newznab providers
 - Added file size comparison to post-processing logs
 - Improved manual search results page loading
 - Removed contrib folder (nzbToMedia)
 - Added a lot of new network logos and timezones
 - Fixed encoding error in notifications
 - Fix multiple video files with nzb_name
 - Don't use knowit quality to check for quality in history
 - Added more categories to TorrentDay
 - Fixed Deluge 1.3.14 new requirements
 - Changed extratorrent to use new domain
 - Fixed some show updater issues
 - Added a check to prevent adding shows on recomended pages if no root dir set
 - Fixed multiple dirs removed when delete pressed for RootDirs
 - A lot of under the hood fixes
 - Fixed air-by-date shows with same day special
 - Fixed BTN when show is air by date but the show is indexed under the SxxExx format
 - Fixed adding show with no runtime

### v0.1.11:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**New Features**:

 - New logo
 - History and Schedule page are now responsive, plus a lot of new UI changes
 - Show series plot in display show and snatch selection
 - Show number of backlogged episodes when changing the shows preferred or allowed qualities
 - Added "Actions" to Backlog overview page (forced search, manual search and archive)

**Fixes**:

 - Prevent periodic show updater to crash when an indexer is unavailable
 - Fix tvmaze & tmdb indexed shows not updating during period show update
 - Fixed season updates for tmdb
 - Fix missing search results when searching for anime shows depending on scene numbering
 - Improved caching of searched shows. Under some circumstances you had to perform a search twice, for it to start downloading through a forced search
 - Fix multi episode downloads not getting marked as downloaded on the history page
 - Prevent xem refresh during loading of a show. The xem refresh / update has been moved to the show updater.
 - Use ImdbPie for obtaining imdb info, will speedup the indexing of new and existing shows. (but because of this we had to drop support for the show language countries)
 - Fixed multi episode downloads not getting marked as downloaded on the history page
 - Fixed SNATCHED PROPER and SNATCHED BEST pills
 - Fixed proper tags sometimes appearing as "P.R.O.P.E.R"
 - Fixed associated files not recognized when torrent is RARed (when rar name is different from media name)
 - Fixed error message when changing show language to None
 - Fixed Post Processing of season packs with nzbtomedia
 - Fixed manually added file to show folder not detected when status is SNATCHED BEST
 - Fixed 'postpone when no subtitles' issue when we should move subtitle instead of hardlink (keep only original files)
 - Improved ExtraTorrent provider RSS
 - Fixed BTN provider and updated its url

<br />

### v0.1.10:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**New Features:**

 - Added option to erase subtitles cache file on next boot
 - Transmission: Added feature to remove torrent from client when provider ratio has been reached
 - Added relative time in manual search updated date
 - Added XEM column/icon in home
 - Added Better logging in quality checks
 - Improved show update to be smarter
 - Started working on responsive UI
 - Improved a lof of new indexer codes

**Fixes:**

 - Don't download subtitles when show is paused
 - Fixed manageTorrents not showing up if client url is not https
 - Fixed redownload when status SNATCHED BEST is replaced with DOWNLOADED
 - Removed Torrentshack provider
 - Removed womble's index 
 - Fixed scene_exceptions usage for shows added through tvmaze or tmdb.
 - Updated to latest Guessit
 - Fixed anime detection
 - Improve NameParserCache logic
 - Fixed error while changing show language
 - Fixed BTN search
 - Fixed Anime search do use double/triple digit
 - Fixed subtitle providers not being saved
 - Updated trackers trackers list, removed dead ones and add the best and popular trackers
 - Fixed NZBget test
 - Fixed episodes wrongfully parsed as air-by-date
 - Fixed history search
 - Fixed score detection for itasa subtitle provider

<br />

### v0.1.8.1:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**Fixes:**

 - Better exception handling when tvdb api is unavailable
 - Fixed Vue issue in config page
 - Fixed standard logging call in release name parser
 - Fixed relative path function in post processor logic
 - Fixed AnimeBytes provider
 - Fixed anime black/white list not saving
 - Fixed knowit (video metadata parser) when mediainfo returns no "general" track.

<br />

### v0.1.8:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**New Features:**

 - Replaced old TvDB API (v1) with new API version (v2)
 - Removed hachoir and replaced it with [knowit](https://github.com/ratoaq2/knowit)
 - Proper search days interval is now customizable
 - Added new torrent cache sites
 - Improved exceptions handling
 - The configuration page new uses [Vue.js](https://github.com/vuejs/vue)
 - Subtitles are also sorted by title now
 - Improved check for broken providers
 - Changed opensubtitles icon with a more recent version
 - Added season search for MTV provider
 - Added cookie login to bypass captcha for SceneTime and IPTorrents
 - Upgraded certifi to version 2016.9.26
 - Added season specific update for TvDB
 - Improved language detection for subtitles
 - Post-processing now uses relative paths where possible
 - Improved startup logic
 - Enhanced guessit detection support
 - Updated base namings in episode naming
 - Added timeago JavaScript script
 - Added episode TvDB API (v2) rest endpoint
 - Added a more clear tooltip for failed downloads
 - Added handling EnvironmentError to cover IOError and OSError

**Fixes:**

 - Fixed XO JavaScript style linter errors
 - Logging results are avoided when they are null
 - Fixed TorrentBytes's Freeleech torrent's having the tagging part of the name
 - Renamed subtitle-missedPP.js to subtitle-missed-post-process.js
 - Expected titles should be cached against show names and scene exception names
 - Fixed metadata from TvDB
 - Caching static configuration for TvDB API (v2)
 - Always use EpisodePostProcessingFailedException for failing post-processing
 - Fixed failed unrar not using EpisodePostProcessingFailedException
 - Fixed API key in provider settings beeing shown in plain text
 - Fixed omgwtfnzbs log line
 - Fixed tooltips
 - Added missing endsWith function for IE11
 - Fixed notifications
 - Moved TvDB API (v2) initialization
 - Fixed hide Originally Airs, when it's not available in the indexer
 - Removed legacy mainDB.py
 - Fixed ajax-episode-search.js
 - Finished refactoring
 - Fixed failed actions in compact history
 - Removed the cleanup function to use on tvshow information
 - Remove useless check in torrent_provider
 - Fixed rootDir/parent directory not saving
 - Fixed showing show object in show updater
 - Removed breaking .upper() for ints in tv.py
 - Fixed matching unknown subs
 - Fixed AttributeError: 'NoneType' object has no attribute 'name'
 - Changed invalid Rarbg token log to debug
 - Fixed missing network when value is empty
 - Fixed DB logging level
 - Added more guessit scenarios
 - Added check if embedded subtitles are wanted to bypass postpone
 - Multiple improvements and fixes to show season updating
 - TvDB API (v2) exception handling and cleanups
 - Replace wrong error message for EpisodeDeletedException
 - Fixed language detection for subtitles
 - Fixed setting manual season scene numbering for special seasons
 - Fixed missing 'div' in config_search.mako
 - Fixed switching TvDB show language
 - Fixed unicodeDecode error, when opening shows with unicode names
 - Fixed genre pills in displayShow.mako when show can't be mapped to IMDb
 - Fixed None arg passed to guessit
 - Fixed renaming log line

<br />

### v0.1.7:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**New Features:**

 - Renamed repository name from 'SickRage' to 'Medusa', renamed log and database files
 - Encoding/decoding are better handled now (we removed a bad bad function called EK)
 - Added manual subtitle search in displayShow (CC icon)
 - Re-download existing subtitle (clicking in the existing language flag)
 - Use posters from tvdb api v2 and not Trakt (they don't send images anymore in api)
 - Added dogpile cache configuration for subliminal (reduces memory usage)
 - Use torrasave.top as torrent caching site

**Fixes:**

 - Fixed ExtraTorrent not using custom url
 - Fixed simpleanidb refresh cache
 - Fixed TorrentProject provider always unavailable (not using api anymore)
 - Fixed PP not replacing (deleting) existing file
 - Fixed omgwtfnzbs url
 - Fixed nyaatorrent provider
 - Fixed editShow of anime, when it's changed to anime through massEdit
 - Fixed api key in JS while not logged
 - Fixed some providers parsing info (cropping title)
 - Fixed URL link pointing to specific season
 - Fix error, when a user switches back to master and then develop afte rebranding
 - Fixed error while checking size of file
 - Fixed lowercase for showlist sort
 - Fixed subtitle search using scene numbering when it shouldn't
 - Fixed various bugs in PostProcessor
 - Added confirmed/ranked logs so you know when feature is enabled
 - Added missing network images
 - Removed thetorrent.org from torrent caching sites

<br />

### v0.1.6:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**New Features:**

 - Added git clean execution during update process
 - Added the ability to save the sort in the history page and the ability to sort by "subtitles"
 
**Fixes:**

 - Fixed "Failed Downloads" page not using correct sorting
 - Fixed a lot of errors reported by codacy
 - Fixed expected titles which should not contain number-only items
 - Fixed error when reading image with 0 bytes and try to delete it (if it fails warn user to delete it)
 - Fixed release names being cut off for Limetorrents & ExtraTorrents
 - Fixed some CSS rules
 - Fixed issues beeing submitted to Pull Requests
 - Fixed "unsafe attempt to load URL" JS issue
 - Fixed custom guessit function beeing loaded before other modules that depend on it
 - Fixed unicode error when reading logs
 - Fixed "SEARCHQUEUE" and "SHOWQUEUE" log filter not working
 - Fixed several guessit bug fixes & did some enhancements to it
 - Fixed another multiple formats corner case in guessit
 - Removed note in PostProcessing settings regarding the need to have the quality in the naming pattern
 - Upgraded DB to 44 (to keep compatible with SickRage users that decide to move to Medusa)
 - Moved from a Sickbeard/Sickrage directory structure to one named Medusa
 - Moved "search" related files to their own directory
 - Refactored all python imports
 - Rebranded all code to Medusa
 - Updated guessit to hash:57fe78f and rebulk to 0.7.6
 - Move unittests to a "legacy" directory
 - Reorganized tests
 - Dropped support for databases with version prior to 40
 - Improved DB version check
 
<br />

### v0.1.5.2:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**Fixes:**

 - Fixed expected titles should not contain number-only items
 - Fixed canonical_name when dict has non-ascii characters

<br />

### v0.1.5.1:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**Fixes:**

 - Fixed database upgrade for users coming from SickRage
 - Fixed mass update 'delete' action
 - Improved various code sections

<br />

### v0.1.5:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**New Features:**

 - Added proper tags using INFO icon in history page
 - Added a PROPER codec check to avoid snatching propers when codec is different (e.g. x265 propering x264)
 - Added NZBget connection test
 - Added faster and more reliable way of showing propers in history
 - Added CloudFlare bypass code (fixes providers behind CF's protection, e.g. Torrentz2)

**Fixes:**

- Fixed checkversion error
- Fixed Pretome provider's seeders/leechers
- Fixed tv_episode table not being updated with new snatch info
- Fixed manual season pack search not using indexer number
- Fixed footer stats not refreshing
- Fixed issue submitter error
- Fixed removing folder when they don't exist
- Fixed mako error when restoring backup
- Fixed not using encoding when parsing file
- Fixed collapse button in manage status and missed subtitles pages
- Fixed "database or disk is full" showing as error. Should be warning
- Fixed exception in anime with numbers and no season information
- Fixed ExtraTorrent provider
- Fixed TorrentDay login
- Fixed Kodi not creating metadata
- Fixed unable to get new pin when token expired situation
- Fixed not discarding multi season torrents (not supported for now)
- Fixed superfluous parsing of 'related torrents' for ExtraTorrent
- Fixed using already processed propers when doing a forced proper search 
- Fixed reading .nfo when special chars in the filename
- Fixed scene exceptions update if AniDB doesn't have the show
- Fixed not being able to get new token when Trakt token expired
- Fixed shows losing show information after unsuccessful IMDb update
- Added "git clean" for source folders and lib folder with git reset
- Added proper tags info to history database
- Improved scene exceptions code
- Improved show updater code
- Improved all python "imports"
- Improved GitHub code
- Improved post-processor code

<br />

### v0.1.4.1:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**Fixes:**

- A lot of JS improvements
- Added Torrentz2 provider and removed the old one
- Fixed PostProcessor and Notification pages not saving
- Fixed guessit parsing with multiple formats
- Fixed providers: SSC and Zooqle
- Upgraded subliminal to 2.0.5
- Refactored issue submission and log files reader
- A lot of under the hood code improvements

<br />

### v0.1.4:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**New Features:**

- Get broken providers from GitHub and force disable broken providers (avoids having to push changes for new broken providers)
- Clean Kodi library after re-download or manual search another release of an episode (Kodi would have a link to an episode that doesn't exist anymore)
- Started to work in the API v2

**Fixes:**

- Fixed logging page not respecting redirection page
- Fixed manual search providers only not having cache trimmed
- Fixed RARBG warning message when it should be DEBUG
- Fixed episode refiner using wrong release names
- Fixed several UI issues
- Fixed adding Shows not loading after save in custom options
- Fixed seeders and leechers from transmitthenet provider
- Fixed 'no space left' log message as ERROR. Should be warning.
- Fixed UI showing two 'date style' selects
- Fixed issue causing threads to stop when Trakt notifications fails
- Fixed IPTorrents provider
- Fixed Imdb popular shows page
- Fixed multiple video formats in guessit parsing
- Fixed guessit parser when show titles contain numbers and unicode chars
- Fixed Release Groups with dash (ie. GROUP-BUYMORE will become GROUP)
- Fixed not escaping html characters in logs view page
- Fixed displayshow showing info of old status when new status is snatched
- Fixed possible overlapping in PP by not calling PP in postpone if auto PP is enabled
- Improved the Recommended Shows Lists
- Improved providers code
- Improved tests/travis checks
- Improved config general page loading (a lot faster now)
- Added SxxEPxx pattern to guessit
- Added base url to templates
- Added pep8 naming config to tests/travis
- Added notifications when blacklisting shows in Trakt recommended lists
- Removed legacy parser
- Remove option 'subtitles_download_in_pp' - when postpone enabled it will always download subtitle in PP folder
- Updated JQuery

<br />

### v0.1.3:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

- Added Logger improvements (Lazy logging) 
- Added KAT to broken providers("!" next to name)
- Added log when unwanted extension files were found
- Added 'sub' and 'idx' to default allowed extensions
- Improved Enhance quality and audio channels detection with guessit
- Improved ExtraTorrent (rewrite)
- Improved Recommended Lists
- Improved UI (clean up)
- Removed torcache.net 
- Fixed manual snatch of leaked items not keeping snatched status
- Fixed proper search in nzb providers
- Fixed GTF tracker
- Fixed parsing of air-by-date results when only air-by-date shows
- Fixed XEM error when server is down
- Fixed TorrentDay not warning when no cookies were set 
- Fixed TorrentDay when failed to parse an item
- Fixed showing seeds/leechs in log when NZB
- Fixed season special wrongly detected as season pack 

**New Features:**

- Added a refiner that will enrich the video information with tvdbid, imdb_id and <br />
  other information present in our database instead of query indexer
- Added Guessit name parser implementation
- Skip Paused show on Nightly Update
- Added an option Display show banner and Fanart in the background
- Removed associated files when episode gets deleted
- Added unknown embedded subtitles check before postpone file if no subs associated
- Added setting in manual PP to skip subtitle check when 'postpone if no subs' is enabled
- Changed snatch message to 'Started PROPER download' if snatches a PROPER
- Added an option to stop download other subtitle wanted languages when we already downloaded one
- Avoid process samer Proper over and over
- Propers are now detected using 'guessit' and not check if 'proper' is in release name
- Delete any empty season folders after deletion of associated files (when episode gets deleted)
- Added size and number of episode to footers in season tables

<br />

### v0.1.0:

[full changelog: part 1](https://github.com/pymedusa/SickRage/compare/initial-fork...e9b23aa) [part 2](https://github.com/pymedusa/SickRage/compare/e9b23aa...e1c7479) [part 3](https://github.com/pymedusa/SickRage/compare/e1c7479...v0.1.0)

* Forked SickRage and rebranded to Medusa
* Added manual search so users can select the search result they want
* Improved detection of qualities (AVC/HEVC/WEB-DL/WEB-RIP and many others)
* Improved subtitle searches and added refiners for better subtitle matches
* Added Preferred/Undesired word lists to complement the Required/Ignored lists for better result filtering
* Fixed Compact history display so all actions for a release are now shown
* and many, many more bugfixes and code cleanup.
