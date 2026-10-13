'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4512],
    {
        542: (e, n, t) => {
            var r = t(74631),
                i =
                    'function' == typeof Object.is
                        ? Object.is
                        : function (e, n) {
                              return (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n);
                          },
                o = r.useState,
                s = r.useEffect,
                c = r.useLayoutEffect,
                a = r.useDebugValue;
            function l(e) {
                var n = e.getSnapshot;
                e = e.value;
                try {
                    var t = n();
                    return !i(e, t);
                } catch (e) {
                    return !0;
                }
            }
            var _ =
                'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
                    ? function (e, n) {
                          return n();
                      }
                    : function (e, n) {
                          var t = n(),
                              r = o({ inst: { value: t, getSnapshot: n } }),
                              i = r[0].inst,
                              _ = r[1];
                          return (
                              c(
                                  function () {
                                      ((i.value = t), (i.getSnapshot = n), l(i) && _({ inst: i }));
                                  },
                                  [e, t, n],
                              ),
                              s(
                                  function () {
                                      return (
                                          l(i) && _({ inst: i }),
                                          e(function () {
                                              l(i) && _({ inst: i });
                                          })
                                      );
                                  },
                                  [e],
                              ),
                              a(t),
                              t
                          );
                      };
            n.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : _;
        },
        36619: (e, n) => {
            var t, r, i, o, s, c, a, l, _, d, u, S, m, p, b, y, g, h, k, v, f, w, A, T, P, C, L, M, D, E, R, x, F, O, W, B, I, j;
            (Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.WidgetType =
                    n.MainNavigatedTo =
                    n.PlaylistTypes =
                    n.LandingNavigatedTo =
                    n.LandingEntityTypes =
                    n.ClosedByTypes =
                    n.CommunicationTypes =
                    n.SlidesType =
                    n.UIPositions =
                    n.UIElementSizes =
                    n.SearchNavigatedTo =
                    n.SearchObjectType =
                    n.SearchFilterTypes =
                    n.Context =
                    n.PageStyleEnum =
                    n.ActionType =
                    n.StreamStartTriggers =
                    n.EntityTypes =
                    n.TargetDevice =
                    n.QueueType =
                    n.QueueSource =
                    n.UserInteractionType =
                    n.QueuePosition =
                    n.PagePlacements =
                    n.PageStyles =
                    n.LandingBlockPageID =
                    n.DomainObjectType =
                    n.DeviceType =
                    n.LandingObjectTypes =
                    n.FromConcertScreenTo =
                    n.FromArtistConcertsScreenTo =
                    n.ArtistActionButtonNavigatedTo =
                    n.FromArtistScreenTo =
                    n.ConcertBlockItemType =
                    n.AppSettingsProperty =
                    n.AppScreen =
                    n.AlbumActionButtonNavigatedTo =
                    n.AlbumTypes =
                        void 0),
                (function (e) {
                    ((e.Music = 'music'),
                        (e.Podcast = 'podcast'),
                        (e.FairyTale = 'fairy-tale'),
                        (e.Audiobook = 'audiobook'),
                        (e.Poetry = 'poetry'),
                        (e.Article = 'article'),
                        (e.Lecture = 'lecture'),
                        (e.Show = 'show'),
                        (e.Radio = 'radio'),
                        (e.Unknown = 'unknown'));
                })(t || (n.AlbumTypes = t = {})),
                (function (e) {
                    ((e.Link = 'link'), (e.StoriesScreen = 'stories_screen'));
                })(r || (n.AlbumActionButtonNavigatedTo = r = {})),
                (function (e) {
                    ((e.AboutArtistScreen = 'about_artist_screen'),
                        (e.ArtistScreen = 'artist_screen'),
                        (e.ArtistListScreen = 'artist_list_screen'),
                        (e.ArtistConcertsScreen = 'artist_concerts_screen'),
                        (e.ArtistFamiliarToYouScreen = 'artist_familiar_to_you_screen'),
                        (e.ArtistTrackListScreen = 'artist_track_list_screen'),
                        (e.ArtistSimilarArtistListScreen = 'artist_similar_artist_list_screen'),
                        (e.ArtistStudioAlbumListScreen = 'artist_studio_album_list_screen'),
                        (e.ArtistAllAlbumsListScreen = 'artist_all_albums_list_screen'),
                        (e.ArtistPickScreen = 'artist_pick_screen'),
                        (e.PresaveHintScreen = 'presave_hint_screen'),
                        (e.TrackListScreen = 'track_list_screen'),
                        (e.AlbumScreen = 'album_screen'),
                        (e.PromolandingAlbumScreen = 'promolanding_album_screen'),
                        (e.AlbumListScreen = 'album_list_screen'),
                        (e.PodcastScreen = 'podcast_screen'),
                        (e.AudiobookScreen = 'audiobook_screen'),
                        (e.CompilationsScreen = 'compilations_screen'),
                        (e.CompilationsListScreen = 'compilations_list_screen'),
                        (e.ConcertScreen = 'concert_screen'),
                        (e.ConcertSummaryScreen = 'concert_summary_screen'),
                        (e.ArtistFullscreenGalleryScreen = 'artist_fullscreen_gallery_screen'),
                        (e.PlaylistScreen = 'playlist_screen'),
                        (e.PlaylistListScreen = 'playlist_list_screen'),
                        (e.CreatePlaylistScreen = 'create_playlist_screen'),
                        (e.TrackActionsScreen = 'track_actions_screen'),
                        (e.ShareScreen = 'share_screen'),
                        (e.Link = 'link'),
                        (e.VideoScreen = 'video_screen'),
                        (e.VideoWaveScreen = 'video_wave_screen'),
                        (e.VideoclipsScreen = 'videoclips_screen'),
                        (e.PodcastLandingScreen = 'podcast_landing_screen'),
                        (e.NonmusicLandingScreen = 'nonmusic_landing_screen'),
                        (e.AudiobookLandingScreen = 'audiobook_landing_screen'),
                        (e.KidsLandingScreen = 'kids_landing_screen'),
                        (e.AlbumChartScreen = 'album_chart_screen'),
                        (e.PodcastChartScreen = 'podcast_chart_screen'),
                        (e.AddTracksScreen = 'add_tracks_screen'),
                        (e.ContestScreen = 'contest_screen'),
                        (e.TrackChartScreen = 'track_chart_screen'),
                        (e.MainScreen = 'main_screen'),
                        (e.CommunicationScreen = 'communication_screen'),
                        (e.AlbumShareScreen = 'album_share_screen'),
                        (e.SearchScreen = 'search_screen'),
                        (e.TreesScreen = 'trees_screen'),
                        (e.SlidesScreen = 'slides_screen'),
                        (e.StoriesScreen = 'stories_screen'),
                        (e.YearResultsScreen = 'year_results_screen'),
                        (e.SearchObjectListScreen = 'search_object_list_screen'),
                        (e.FunnelScreen = 'funnel_screen'),
                        (e.BottomsheetScreen = 'bottomsheet_screen'),
                        (e.EntityActionsScreen = 'entity_actions_screen'),
                        (e.ShortcutPinScreen = 'shortcut_pin_screen'),
                        (e.DescriptionScreen = 'description_screen'),
                        (e.QueueScreen = 'queue_screen'),
                        (e.TrailerScreen = 'trailer_screen'),
                        (e.ConcertPurchaseScreen = 'concert_purchase_screen'),
                        (e.ConcertsLandingScreen = 'concerts_landing_screen'),
                        (e.ConcertsGridScreen = 'concerts_grid_screen'),
                        (e.ConcertLocationSelector = 'concert_location_selector'),
                        (e.MetatagScreen = 'metatag_screen'),
                        (e.DynamicScreen = 'dynamic_screen'),
                        (e.MusicHistoryScreen = 'music_history_screen'),
                        (e.CollectionLandingScreen = 'collection_landing_screen'),
                        (e.CollectionAlbumsScreen = 'collection_albums_screen'),
                        (e.CollectionArtistsScreen = 'collection_artists_screen'),
                        (e.CollectionPlaylistsScreen = 'collection_playlists_screen'),
                        (e.CollectionTrackListScreen = 'collection_track_list_screen'),
                        (e.DownloadedContentScreen = 'downloaded_content_screen'),
                        (e.WizardScreen = 'wizard_screen'),
                        (e.PushPermissionScreen = 'push_permission_screen'),
                        (e.WizardEntryPointScreen = 'wizard_entry_point_screen'),
                        (e.WizardSkipScreen = 'wizard_skip_screen'),
                        (e.ObjectsListScreen = 'objects_list_screen'),
                        (e.ObjectsGridScreen = 'objects_grid_screen'),
                        (e.DownloadedTrackListScreen = 'downloaded_track_list_screen'),
                        (e.DownloadedAlbumListScreen = 'downloaded_album_list_screen'),
                        (e.DownloadedPlaylistListScreen = 'downloaded_playlist_list_screen'),
                        (e.DownloadedArtistListScreen = 'downloaded_artist_list_screen'),
                        (e.DownloadedPodcastLandingScreen = 'downloaded_podcast_landing_screen'),
                        (e.DownloadedAudiobooksLandingScreen = 'downloaded_audiobooks_landing_screen'),
                        (e.DownloadedForKidsLandingScreen = 'downloaded_for_kids_landing_screen'),
                        (e.AudiobookListScreen = 'audiobook_list_screen'),
                        (e.AudiobookChapterListScreen = 'audiobook_chapter_list_screen'),
                        (e.PodcastListScreen = 'podcast_list_screen'),
                        (e.PodcastEpisodeListScreen = 'podcast_episode_list_screen'),
                        (e.NewEpisodeListScreen = 'new_episode_list_screen'),
                        (e.KidsTrackListScreen = 'kids_track_list_screen'),
                        (e.KidsPlaylistListScreen = 'kids_playlist_list_screen'),
                        (e.KidsAlbumAndPodcastListScreen = 'kids_album_and_podcast_list_screen'),
                        (e.DownloadedAudiobookListScreen = 'downloaded_audiobook_list_screen'),
                        (e.DownloadedAudiobookChapterListScreen = 'downloaded_audiobook_chapter_list_screen'),
                        (e.DownloadedPodcastListScreen = 'downloaded_podcast_list_screen'),
                        (e.DownloadedPodcastEpisodeListScreen = 'downloaded_podcast_episode_list_screen'),
                        (e.DownloadedKidsTrackListScreen = 'downloaded_kids_track_list_screen'),
                        (e.DownloadedKidsPlaylistListScreen = 'downloaded_kids_playlist_list_screen'),
                        (e.DownloadedKidsAlbumAndPodcastListScreen = 'downloaded_kids_album_and_podcast_list_screen'),
                        (e.ProfileScreen = 'profile_screen'),
                        (e.RestorePurchasesScreen = 'restore_purchases_screen'),
                        (e.EnterPromoCodeScreen = 'enter_promo_code_screen'),
                        (e.DeleteAccountScreen = 'delete_account_screen'),
                        (e.DislikesScreen = 'dislikes_screen'),
                        (e.PlusSdkScreen = 'plus_sdk_screen'),
                        (e.CashedTracksScreen = 'cashed_tracks_screen'),
                        (e.LocalTracksScreen = 'local_tracks_screen'),
                        (e.LogoutScreen = 'logout_screen'),
                        (e.AboutScreen = 'about_screen'),
                        (e.KidsCatalogPromoScreen = 'kids_catalog_promo_screen'),
                        (e.ExplicitDialogScreen = 'explicit_dialog_screen'),
                        (e.DisclaimerScreen = 'disclaimer_screen'),
                        (e.PlusScreen = 'plus_screen'),
                        (e.AutoPickRegionScreen = 'auto_pick_region_screen'),
                        (e.StationScreen = 'station_screen'),
                        (e.ShowScreen = 'show_screen'),
                        (e.WidgetInstallScreen = 'widget_install_screen'),
                        (e.SettingsScreen = 'settings_screen'),
                        (e.SettingsAutoDownloadScreen = 'settings_auto_download_screen'),
                        (e.SettingsAutoDownloadConfirmationScreen = 'settings_auto_download_confirmation_screen'),
                        (e.SettingsClearMemoryScreen = 'settings_clear_memory_screen'),
                        (e.SettingsQualityScreen = 'settings_quality_screen'),
                        (e.SettingsStorageSelectorScreen = 'settings_storage_selector_screen'),
                        (e.ExpandedPlayerScreen = 'expanded_player_screen'),
                        (e.PlayerScreen = 'player_screen'),
                        (e.MiniplayerScreen = 'miniplayer_screen'),
                        (e.MessengerSupportScreen = 'messenger_support_screen'),
                        (e.Sidebar = 'sidebar'),
                        (e.MyWaweSettingsScreen = 'my_wawe_settings_screen'),
                        (e.Widget = 'widget'),
                        (e.Os = 'os'),
                        (e.SummaryScreen = 'summary_screen'),
                        (e.ShortSummaryScreen = 'short_summary_screen'),
                        (e.MyShelfScreen = 'my_shelf_screen'),
                        (e.MyShelfHistoryScreen = 'my_shelf_history_screen'),
                        (e.MyShelfLikedScreen = 'my_shelf_liked_screen'),
                        (e.CollectionAudiobooksScreen = 'collection_audiobooks_screen'),
                        (e.CollectionPodcastScreen = 'collection_podcast_screen'),
                        (e.CollectionKidsScreen = 'collection_kids_screen'),
                        (e.CollectionVideoclipsScreen = 'collection_videoclips_screen'),
                        (e.RationaleMicPermissionScreen = 'rationale_mic_permission_screen'),
                        (e.ArtistPickerBottomsheet = 'artist_picker_bottomsheet'),
                        (e.TrackRecognitionScreen = 'track_recognition_screen'),
                        (e.SoundSettingsScreen = 'sound_settings_screen'),
                        (e.SleepTimerScreen = 'sleep_timer_screen'),
                        (e.PultPickerScreen = 'pult_picker_screen'),
                        (e.TextScreen = 'text_screen'),
                        (e.TrackShareScreen = 'track_share_screen'),
                        (e.EditorialFeedScreen = 'editorial_feed_screen'),
                        (e.EasyLoginScreen = 'easy_login_screen'),
                        (e.EasyLoginChromecastScreen = 'easy_login_chromecast_screen'),
                        (e.SubscriptionConditionsScreen = 'subscription_conditions_screen'),
                        (e.OnboardingScreen = 'onboarding_screen'),
                        (e.FeatureOnboardingScreen = 'feature_onboarding_screen'),
                        (e.LoginScreen = 'login_screen'),
                        (e.CoverEditScreen = 'cover_edit_screen'),
                        (e.CoverScreen = 'cover_screen'),
                        (e.PaywallScreen = 'paywall_screen'),
                        (e.InformerScreen = 'informer_screen'),
                        (e.SortConditionsScreen = 'sort_conditions_screen'),
                        (e.TrackScreen = 'track_screen'),
                        (e.SnegirScreen = 'snegir_screen'),
                        (e.PassportVpnLockScreen = 'passport_vpn_lock_screen'),
                        (e.PageNotFoundScreen = 'page_not_found_screen'),
                        (e.PageNotAvailableScreen = 'page_not_available_screen'),
                        (e.AddToPlaylistScreen = 'add_to_playlist_screen'),
                        (e.AppDownloadScreen = 'app_download_screen'),
                        (e.NotEnoughDiskSpaceScreen = 'not_enough_disk_space_screen'),
                        (e.LabelScreen = 'label_screen'),
                        (e.WaveLandingScreen = 'wave_landing_screen'),
                        (e.FactScreen = 'fact_screen'),
                        (e.ForYouScreen = 'for_you_screen'),
                        (e.BarAboveScreen = 'bar_above_screen'),
                        (e.ShakeWaveScreen = 'shake_wave_screen'),
                        (e.LumenAwakeningScreen = 'lumen_awakening_screen'),
                        (e.MultivibeSendingInvitationScreen = 'multivibe_sending_invitation_screen'),
                        (e.MultivibePendingInvitationScreen = 'multivibe_pending_invitation_screen'),
                        (e.MultivibeAcceptingInvitationScreen = 'multivibe_accepting_invitation_screen'),
                        (e.MultivibeInvalidInvitationScreen = 'multivibe_invalid_invitation_screen'),
                        (e.MultivibeAlreadyExistScreen = 'multivibe_already_exist_screen'),
                        (e.MultivibeScreen = 'multivibe_screen'),
                        (e.MultivibeActionScreen = 'multivibe_action_screen'),
                        (e.MultivibeRenameScreen = 'multivibe_rename_screen'),
                        (e.MultivibeAloneScreen = 'multivibe_alone_screen'),
                        (e.MultivibeLimitScreen = 'multivibe_limit_screen'),
                        (e.SimilarTracksScreen = 'similar_tracks_screen'),
                        (e.MultivibeUnifiedScreen = 'multivibe_unified_screen'),
                        (e.MuzmarketScreen = 'muzmarket_screen'));
                })(i || (n.AppScreen = i = {})),
                (function (e) {
                    ((e.SoundQuality = 'sound_quality'),
                        (e.Offline = 'offline'),
                        (e.Crossfade = 'crossfade'),
                        (e.Explicit = 'explicit'),
                        (e.KidsTab = 'kids_tab'),
                        (e.Theme = 'theme'),
                        (e.AddTracksToEndOfPlaylist = 'add_tracks_to_end_of_playlist'),
                        (e.NotifyAboutNewReleases = 'notify_about_new_releases'),
                        (e.ShowVideo = 'show_video'),
                        (e.AutoCache = 'auto_cache'),
                        (e.AutoCacheSize = 'auto_cache_size'),
                        (e.GlagolStation = 'glagol_station'),
                        (e.ClearMemory = 'clear_memory'),
                        (e.Repeat = 'repeat'),
                        (e.Shake = 'shake'),
                        (e.Shuffle = 'shuffle'),
                        (e.ShowLyrics = 'show_lyrics'),
                        (e.ShowQueue = 'show_queue'),
                        (e.Equalizer = 'equalizer'),
                        (e.PlayingSpeed = 'playing_speed'),
                        (e.Autoplay = 'autoplay'),
                        (e.VolumeLevel = 'volume_level'),
                        (e.Bitrate = 'bitrate'),
                        (e.AiContentReduction = 'ai_content_reduction'));
                })(o || (n.AppSettingsProperty = o = {})),
                (function (e) {
                    ((e.Concert = 'concert'), (e.Shortcut = 'shortcut'));
                })(s || (n.ConcertBlockItemType = s = {})),
                (function (e) {
                    ((e.ConcertScreen = 'concert_screen'), (e.ConcertPurchaseScreen = 'concert_purchase_screen'), (e.ArtistConcertsScreen = 'artist_concerts_screen'));
                })(c || (n.FromArtistScreenTo = c = {})),
                (function (e) {
                    ((e.Link = 'link'), (e.StoriesScreen = 'stories_screen'));
                })(a || (n.ArtistActionButtonNavigatedTo = a = {})),
                (function (e) {
                    ((e.ConcertScreen = 'concert_screen'), (e.ConcertPurchaseScreen = 'concert_purchase_screen'));
                })(l || (n.FromArtistConcertsScreenTo = l = {})),
                ((_ || (n.FromConcertScreenTo = _ = {})).ConcertPurchaseScreen = 'concert_purchase_screen'),
                (function (e) {
                    ((e.Album = 'album'),
                        (e.Playlist = 'playlist'),
                        (e.Category = 'category'),
                        (e.Promotion = 'promotion'),
                        (e.TrackChartItem = 'track-chart-item'),
                        (e.AlbumChartItem = 'album-chart-item'),
                        (e.Station = 'station'),
                        (e.Track = 'track'),
                        (e.MenuItemAlbum = 'menu-item-album'),
                        (e.MenuItemPlaylist = 'menu-item-playlist'),
                        (e.Artist = 'artist'),
                        (e.Tab = 'tab'),
                        (e.GenerativeStation = 'generative-station'),
                        (e.Video = 'video'),
                        (e.VideoPreview = 'video-preview'),
                        (e.LastActiveItem = 'last_active_item'),
                        (e.MyShelf = 'my_shelf'),
                        (e.Audiobook = 'audiobook'),
                        (e.Podcast = 'podcast'));
                })(d || (n.LandingObjectTypes = d = {})),
                (function (e) {
                    ((e.Station = 'station'),
                        (e.Chromecast = 'chromecast'),
                        (e.Airplay = 'airplay'),
                        (e.Bluetooth = 'bluetooth'),
                        (e.Sonos = 'sonos'),
                        (e.SamsungSdk = 'samsung_sdk'),
                        (e.YandexTv = 'yandex_tv'),
                        (e.Phone = 'phone'),
                        (e.AndroidTv = 'android_tv'),
                        (e.AndroidWear = 'android_wear'),
                        (e.AppleTv = 'apple_tv'),
                        (e.WebTv = 'web_tv'),
                        (e.Web = 'web'),
                        (e.WebDesktop = 'web_desktop'),
                        (e.Unknown = 'unknown'));
                })(u || (n.DeviceType = u = {})),
                (function (e) {
                    ((e.Audiobook = 'audiobook'),
                        (e.AudiobookChapter = 'audiobook_chapter'),
                        (e.Podcast = 'podcast'),
                        (e.PodcastEpisode = 'podcast_episode'),
                        (e.Track = 'track'),
                        (e.Artist = 'artist'),
                        (e.Album = 'album'),
                        (e.Playlist = 'playlist'),
                        (e.Wave = 'wave'),
                        (e.Video = 'video'),
                        (e.Generative = 'generative'),
                        (e.Feature = 'feature'),
                        (e.Teaser = 'teaser'),
                        (e.Banner = 'banner'),
                        (e.Shortcut = 'shortcut'),
                        (e.Concert = 'concert'),
                        (e.ConcertsSelection = 'concerts_selection'),
                        (e.SearchField = 'search_field'),
                        (e.Location = 'location'),
                        (e.LocationAutoDetect = 'location_auto_detect'),
                        (e.UpcomingAlbum = 'upcoming_album'),
                        (e.SmartPreview = 'smart_preview'),
                        (e.Trailer = 'trailer'),
                        (e.GalleryItem = 'gallery_item'),
                        (e.MetaTag = 'meta_tag'),
                        (e.NonApplicable = 'non_applicable'),
                        (e.Text = 'text'),
                        (e.Donation = 'donation'),
                        (e.Music = 'music'),
                        (e.RadioStation = 'radio_station'),
                        (e.RadioStationStream = 'radio_station_stream'),
                        (e.RadioStationShow = 'radio_station_show'),
                        (e.RadioStreamDescription = 'radio_stream_description'),
                        (e.SimilarRadioStation = 'similar_radio_station'),
                        (e.Show = 'show'),
                        (e.Phone = 'phone'),
                        (e.Address = 'address'),
                        (e.Link = 'link'),
                        (e.Genre = 'genre'),
                        (e.City = 'city'),
                        (e.Region = 'region'),
                        (e.SearchItem = 'search_item'),
                        (e.SearchCell = 'search_cell'),
                        (e.Reaction = 'reaction'),
                        (e.SleepTimer = 'sleep_timer'),
                        (e.Bitrate = 'bitrate'),
                        (e.PlayerSettings = 'player_settings'),
                        (e.Slide = 'slide'),
                        (e.SlideContent = 'slide_content'),
                        (e.Fact = 'fact'),
                        (e.SleepingAlice = 'sleeping_alice'),
                        (e.Q2vWave = 'q2v_wave'),
                        (e.BigFact = 'big_fact'),
                        (e.Lumen = 'lumen'),
                        (e.LumenUnawakened = 'lumen_unawakened'));
                })(S || (n.DomainObjectType = S = {})),
                (function (e) {
                    ((e.SearchScreen = 'search_screen'),
                        (e.CollectionLandingScreen = 'collection_landing_screen'),
                        (e.MainScreen = 'main_screen'),
                        (e.NonmusicLandingScreen = 'nonmusic_landing_screen'),
                        (e.PodcastLandingScreen = 'podcast_landing_screen'),
                        (e.AudiobookLandingScreen = 'audiobook_landing_screen'),
                        (e.KidsLandingScreen = 'kids_landing_screen'),
                        (e.DynamicScreen = 'dynamic_screen'),
                        (e.MetatagScreen = 'metatag_screen'),
                        (e.MusicHistoryScreen = 'music_history_screen'),
                        (e.DownloadedContentScreen = 'downloaded_content_screen'),
                        (e.CollectionArtistsScreen = 'collection_artists_screen'),
                        (e.ObjectsListScreen = 'objects_list_screen'),
                        (e.ObjectsGridScreen = 'objects_grid_screen'),
                        (e.BottomsheetScreen = 'bottomsheet_screen'),
                        (e.TrailerScreen = 'trailer_screen'),
                        (e.Sidebar = 'sidebar'),
                        (e.DownloadedArtistListScreen = 'downloaded_artist_list_screen'),
                        (e.ArtistScreen = 'artist_screen'),
                        (e.AlbumScreen = 'album_screen'),
                        (e.PlaylistScreen = 'playlist_screen'),
                        (e.AboutArtistScreen = 'about_artist_screen'),
                        (e.MiniplayerScreen = 'miniplayer_screen'),
                        (e.InformerScreen = 'informer_screen'),
                        (e.TrackScreen = 'track_screen'),
                        (e.Widget = 'widget'),
                        (e.CollectionVideoclipsScreen = 'collection_videoclips_screen'),
                        (e.ShareScreen = 'share_screen'),
                        (e.ConcertsLandingScreen = 'concerts_landing_screen'),
                        (e.ConcertScreen = 'concert_screen'),
                        (e.ConcertsGridScreen = 'concerts_grid_screen'),
                        (e.ConcertLocationSelector = 'concert_location_selector'),
                        (e.SlidesScreen = 'slides_screen'),
                        (e.PromolandingAlbumScreen = 'promolanding_album_screen'),
                        (e.WaveLandingScreen = 'wave_landing_screen'),
                        (e.FactScreen = 'fact_screen'),
                        (e.MultivibeScreen = 'multivibe_screen'),
                        (e.MultivibeSendingInvitationScreen = 'multivibe_sending_invitation_screen'),
                        (e.MultivibeActionScreen = 'multivibe_action_screen'),
                        (e.MultivibeLimitScreen = 'multivibe_limit_screen'),
                        (e.MultivibeUnifiedScreen = 'multivibe_unified_screen'));
                })(m || (n.LandingBlockPageID = m = {})),
                (function (e) {
                    ((e.Fullscreen = 'fullscreen'), (e.Bar = 'bar'), (e.Sheet = 'sheet'), (e.Popup = 'popup'), (e.Tooltip = 'tooltip'), (e.ContextMenu = 'context_menu'));
                })(p || (n.PageStyles = p = {})),
                (function (e) {
                    ((e.Fullscreen = 'fullscreen'),
                        (e.Bottom = 'bottom'),
                        (e.Left = 'left'),
                        (e.Right = 'right'),
                        (e.Top = 'top'),
                        (e.Center = 'center'),
                        (e.Floating = 'floating'),
                        (e.Hover = 'hover'),
                        (e.BottomRight = 'bottom_right'));
                })(b || (n.PagePlacements = b = {})),
                (function (e) {
                    ((e.Next = 'next'), (e.End = 'end'));
                })(y || (n.QueuePosition = y = {})),
                (function (e) {
                    ((e.Tap = 'tap'),
                        (e.LongTap = 'longTap'),
                        (e.DoubleTap = 'doubleTap'),
                        (e.Pan = 'pan'),
                        (e.Swipe = 'swipe'),
                        (e.Hardware = 'hardware'),
                        (e.Shake = 'shake'));
                })(g || (n.UserInteractionType = g = {})),
                (function (e) {
                    ((e.Device = 'device'), (e.Ynison = 'ynison'), (e.Glagol = 'glagol'));
                })(h || (n.QueueSource = h = {})),
                (function (e) {
                    ((e.WaveWithFixedRecommendations = 'wave_with_fixed_recommendations'),
                        (e.WaveWithoutFixedRecommendations = 'wave_without_fixed_recommendations'),
                        (e.Videoclip = 'videoclip'),
                        (e.Generative = 'generative'),
                        (e.Fmradio = 'fmradio'),
                        (e.Local = 'local'),
                        (e.Unknown = 'unknown'));
                })(k || (n.QueueType = k = {})),
                (function (e) {
                    ((e.OwnSpeaker = 'own_speaker'),
                        (e.Chromecast = 'chromecast'),
                        (e.Bluetooth = 'bluetooth'),
                        (e.Airplay = 'airplay'),
                        (e.Unspecified = 'unspecified'),
                        (e.Web = 'web'),
                        (e.Android = 'android'),
                        (e.Ios = 'ios'),
                        (e.SmartSpeaker = 'smart_speaker'),
                        (e.WebTv = 'web_tv'),
                        (e.WebDesktop = 'web_desktop'),
                        (e.AndroidTv = 'android_tv'),
                        (e.AndroidWear = 'android_wear'),
                        (e.AppleTv = 'apple_tv'),
                        (e.YandexStation = 'yandex_station'),
                        (e.YandexTv = 'yandex_tv'));
                })(v || (n.TargetDevice = v = {})),
                (function (e) {
                    ((e.Carousel = 'carousel'),
                        (e.Shelf = 'shelf'),
                        (e.List = 'list'),
                        (e.Header = 'header'),
                        (e.Tracks = 'tracks'),
                        (e.MyWave = 'my_wave'),
                        (e.Button = 'button'),
                        (e.BrandedButtons = 'branded_buttons'),
                        (e.ArtistFamiliarTracks = 'artist_familiar_tracks'),
                        (e.Deeplink = 'deeplink'),
                        (e.Summary = 'summary'),
                        (e.Chapters = 'chapters'),
                        (e.Episodes = 'episodes'),
                        (e.SongsAndEpisodes = 'songs_and_episodes'),
                        (e.SavedChapters = 'saved_chapters'),
                        (e.SavedEpisodes = 'saved_episodes'),
                        (e.LatestEpisodes = 'latest_episodes'),
                        (e.ExternalLaunch = 'external_launch'),
                        (e.Trailer = 'trailer'),
                        (e.SmartPreview = 'smart_preview'),
                        (e.Liked = 'liked'),
                        (e.Track = 'track'),
                        (e.Promo = 'promo'),
                        (e.Actions = 'actions'),
                        (e.Albums = 'albums'),
                        (e.ArtistFamiliar = 'artist_familiar'),
                        (e.ArtistFamiliarAlbums = 'artist_familiar_albums'),
                        (e.Artists = 'artists'),
                        (e.CollectionShortcuts = 'collection_shortcuts'),
                        (e.Compilations = 'compilations'),
                        (e.Concerts = 'concerts'),
                        (e.LocationList = 'location_list'),
                        (e.DislikedTracks = 'disliked_tracks'),
                        (e.InformationBlock = 'information_block'),
                        (e.DisclaimerBlock = 'disclaimer_block'),
                        (e.KidsBanner = 'kids_banner'),
                        (e.LastReleases = 'last_releases'),
                        (e.LikedPodcasts = 'liked_podcasts'),
                        (e.Menu = 'menu'),
                        (e.Mixes = 'mixes'),
                        (e.NewReleases = 'new_releases'),
                        (e.PersonalPlaylists = 'personal_playlists'),
                        (e.AddToPlaylist = 'add_to_playlist'),
                        (e.SimilarAlbums = 'similar_albums'),
                        (e.SimilarPlaylists = 'similar_playlists'),
                        (e.Player = 'player'),
                        (e.Playlists = 'playlists'),
                        (e.Podcasts = 'podcasts'),
                        (e.Donations = 'donations'),
                        (e.SearchBestResults = 'search_best_results'),
                        (e.Videoclips = 'videoclips'),
                        (e.ShareSubscription = 'share_subscription'),
                        (e.Search = 'search'),
                        (e.Home = 'home'),
                        (e.Kids = 'kids'),
                        (e.NonMusic = 'non_music'),
                        (e.Collection = 'collection'),
                        (e.Plus = 'plus'),
                        (e.Toolbar = 'toolbar'),
                        (e.Login = 'login'),
                        (e.Profile = 'profile'),
                        (e.OtherAlbums = 'other_albums'),
                        (e.OtherAlbumVersions = 'other_album_versions'),
                        (e.GenreAlbums = 'genre_albums'),
                        (e.NoInternet = 'no_internet'),
                        (e.ConnectionProblems = 'connection_problems'),
                        (e.OfflineMode = 'offline_mode'),
                        (e.SomethingWrong = 'something_wrong'),
                        (e.ContentNotAvailable = 'content_not_available'),
                        (e.ConcertTabHeader = 'concert_tab_header'),
                        (e.ConcertTabFeed = 'concert_tab_feed'),
                        (e.ConcertHeader = 'concert_header'),
                        (e.SimilarEntities = 'similar_entities'),
                        (e.Error = 'error'),
                        (e.Wizard = 'wizard'),
                        (e.OfficialPages = 'official_pages'),
                        (e.ReleaseLinks = 'release_links'),
                        (e.Labels = 'labels'),
                        (e.WordsInWave = 'words_in_wave'),
                        (e.Wheel = 'wheel'),
                        (e.Q2vWave = 'q2v_wave'),
                        (e.Multiwave = 'multiwave'),
                        (e.MultivibeAcceptingInvitation = 'multivibe_accepting_invitation'),
                        (e.MultivibeInvalidInvitation = 'multivibe_invalid_invitation'),
                        (e.MultivibeAlreadyExists = 'multivibe_already_exists'),
                        (e.MultivibeAlone = 'multivibe_alone'),
                        (e.MultivibePendingInvitation = 'multivibe_pending_invitation'),
                        (e.Muzmarket = 'muzmarket'));
                })(f || (n.EntityTypes = f = {})),
                (function (e) {
                    ((e.UserAction = 'user_action'), (e.OnboardingEnd = 'onboarding_end'));
                })(w || (n.StreamStartTriggers = w = {})),
                (function (e) {
                    ((e.Ok = 'ok'),
                        (e.Cancel = 'cancel'),
                        (e.Later = 'later'),
                        (e.Add = 'add'),
                        (e.Remove = 'remove'),
                        (e.Like = 'like'),
                        (e.Unlike = 'unlike'),
                        (e.Dislike = 'dislike'),
                        (e.Undislike = 'undislike'),
                        (e.Download = 'download'),
                        (e.Share = 'share'),
                        (e.PlayOnDevice = 'play_on_device'),
                        (e.Lyrics = 'lyrics'),
                        (e.LaunchTrailer = 'launch_trailer'),
                        (e.SubscribeToPodcast = 'subscribe_to_podcast'),
                        (e.UnsubscribeFromPodcast = 'unsubscribe_from_podcast'),
                        (e.Subscribe = 'subscribe'),
                        (e.Unsubscribe = 'unsubscribe'),
                        (e.MarkAsListened = 'mark_as_listened'),
                        (e.MarkAsUnlistened = 'mark_as_unlistened'),
                        (e.Settings = 'settings'),
                        (e.SettingsClearMemory = 'settings_clear_memory'),
                        (e.RequestPermissionExternalAudio = 'request_permission_external_audio'),
                        (e.ClearHistory = 'clear_history'),
                        (e.ScrollTo = 'scroll_to'),
                        (e.SkipPaywall = 'skip_paywall'),
                        (e.Enable = 'enable'),
                        (e.Disable = 'disable'),
                        (e.ChangeRegion = 'change_region'),
                        (e.Pause = 'pause'),
                        (e.Play = 'play'),
                        (e.ResumePlaying = 'resume_playing'),
                        (e.Skip = 'skip'),
                        (e.Backskip = 'backskip'),
                        (e.Pin = 'pin'),
                        (e.Unpin = 'unpin'),
                        (e.Copied = 'copied'),
                        (e.StartSleepTimer = 'start_sleep_timer'),
                        (e.StopSleepTimer = 'stop_sleep_timer'),
                        (e.FinishSleepTimer = 'finish_sleep_timer'),
                        (e.Seek = 'seek'),
                        (e.SeekForward = 'seek_forward'),
                        (e.SeekBackward = 'seek_backward'),
                        (e.ChangeRepeatSettings = 'change_repeat_settings'),
                        (e.ChangeView = 'change_view'),
                        (e.ChangeShuffle = 'change_shuffle'),
                        (e.ChangeSpeed = 'change_speed'),
                        (e.ChangeVolume = 'change_volume'),
                        (e.ShowQueue = 'show_queue'),
                        (e.EasyLoginSetup = 'easy_login_setup'),
                        (e.LoginSuccess = 'login_success'),
                        (e.LoginFailure = 'login_failure'),
                        (e.Logout = 'logout'),
                        (e.DeleteAccount = 'delete_account'),
                        (e.DeleteDownload = 'delete_download'),
                        (e.SelectFilter = 'select_filter'),
                        (e.ShareMore = 'share_more'),
                        (e.ShareCustomAction = 'share_custom_action'),
                        (e.Refresh = 'refresh'),
                        (e.AddToPlaylist = 'add_to_playlist'),
                        (e.RemoveFromPlaylist = 'remove_from_playlist'),
                        (e.SaveSlide = 'save_slide'),
                        (e.MuteTrailer = 'mute_trailer'),
                        (e.SelectSlideItem = 'select_slide_item'),
                        (e.Screenshot = 'screenshot'),
                        (e.SearchItemSelected = 'search_item_selected'),
                        (e.ShakeWave = 'shake_wave'),
                        (e.LumenAwakened = 'lumen_awakened'),
                        (e.Rename = 'rename'));
                })(A || (n.ActionType = A = {})),
                (function (e) {
                    ((e.Fullscreen = 'fullscreen'),
                        (e.Bottomsheet = 'bottomsheet'),
                        (e.Tooltip = 'tooltip'),
                        (e.Dialog = 'dialog'),
                        (e.Popup = 'popup'),
                        (e.Miniplayer = 'miniplayer'));
                })(T || (n.PageStyleEnum = T = {})),
                (function (e) {
                    ((e.Main = 'main'), (e.Podcasts = 'podcasts'), (e.Audiobooks = 'audiobooks'), (e.Kids = 'kids'), (e.Own = 'own'), (e.Concerts = 'concerts'));
                })(P || (n.Context = P = {})),
                (function (e) {
                    ((e.Top = 'top'),
                        (e.Track = 'track'),
                        (e.Album = 'album'),
                        (e.Artist = 'artist'),
                        (e.Playlist = 'playlist'),
                        (e.Podcast = 'podcast'),
                        (e.Book = 'book'),
                        (e.Spoken = 'spoken'),
                        (e.KidsMusic = 'kids_music'),
                        (e.KidsPlaylist = 'kids_playlist'),
                        (e.KidsSpoken = 'kids_spoken'),
                        (e.SpokenPlaylist = 'spoken_playlist'),
                        (e.Video = 'video'),
                        (e.Clip = 'clip'),
                        (e.Other = 'other'),
                        (e.Concert = 'concert'));
                })(C || (n.SearchFilterTypes = C = {})),
                (function (e) {
                    ((e.Artist = 'artist'),
                        (e.Track = 'track'),
                        (e.Playlist = 'playlist'),
                        (e.Album = 'album'),
                        (e.Wave = 'wave'),
                        (e.Video = 'video'),
                        (e.Concert = 'concert'));
                })(L || (n.SearchObjectType = L = {})),
                (function (e) {
                    ((e.ArtistScreen = 'artist_screen'),
                        (e.AlbumScreen = 'album_screen'),
                        (e.CompilationsScreen = 'compilations_screen'),
                        (e.PlaylistScreen = 'playlist_screen'),
                        (e.TrackActionsScreen = 'track_actions_screen'),
                        (e.ShareScreen = 'share_screen'),
                        (e.AddTracksScreen = 'add_tracks_screen'),
                        (e.TextScreen = 'text_screen'),
                        (e.DescriptionScreen = 'description_screen'),
                        (e.SelectDeviceScreen = 'select_device_screen'),
                        (e.Link = 'link'),
                        (e.VideoScreen = 'video_screen'),
                        (e.VideoWaveScreen = 'video_wave_screen'),
                        (e.ConcertScreen = 'concert_screen'),
                        (e.ConcertPurchaseScreen = 'concert_purchase_screen'));
                })(M || (n.SearchNavigatedTo = M = {})),
                (function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'));
                })(D || (n.UIElementSizes = D = {})),
                (function (e) {
                    ((e.Top = 'top'), (e.Bottom = 'bottom'), (e.Left = 'left'), (e.Right = 'right'));
                })(E || (n.UIPositions = E = {})),
                (function (e) {
                    ((e.PersonalResults = 'personal_results'),
                        (e.ArtistPersonalResults = 'artist_personal_results'),
                        (e.PodcastResults = 'podcast_results'),
                        (e.Special = 'special'));
                })(R || (n.SlidesType = R = {})),
                (function (e) {
                    ((e.Pult = 'pult'),
                        (e.PultWithStation = 'pult_with_station'),
                        (e.FullScreen = 'full_screen'),
                        (e.NonFullScreen = 'non_full_screen'),
                        (e.Bottomsheet = 'bottomsheet'));
                })(x || (n.CommunicationTypes = x = {})),
                (function (e) {
                    ((e.Timer = 'timer'), (e.Cross = 'cross'));
                })(F || (n.ClosedByTypes = F = {})),
                (function (e) {
                    ((e.Promotions = 'promotions'),
                        (e.Popular = 'popular'),
                        (e.TrackChart = 'track-chart'),
                        (e.AlbumChart = 'album-chart'),
                        (e.RecentlyPlayed = 'recently-played'),
                        (e.Editorial = 'editorial'),
                        (e.EditorialPlaylists = 'editorial-playlists'),
                        (e.PlaylistWithTracks = 'playlist-with-tracks'),
                        (e.Category = 'category'),
                        (e.CategoriesTab = 'categories-tab'),
                        (e.Radio = 'radio'),
                        (e.TimedShow = 'timed-show'),
                        (e.Menu = 'menu'),
                        (e.YearResultsPersonalPlaylist = 'year_results_personal_playlist'),
                        (e.TagCompilation = 'tag-compilation'),
                        (e.LikedPodcasts = 'liked_podcasts'),
                        (e.Shelf = 'shelf'),
                        (e.BookmateBanner = 'bookmateBanner'),
                        (e.MenuTab = 'menuTab'),
                        (e.ContinueListen = 'continue-listen'));
                })(O || (n.LandingEntityTypes = O = {})),
                (function (e) {
                    ((e.AlbumListScreen = 'album_list_screen'),
                        (e.PlaylistListScreen = 'playlist_list_screen'),
                        (e.AlbumChartScreen = 'album_chart_screen'),
                        (e.TrackChartScreen = 'track_chart_screen'),
                        (e.PlaylistScreen = 'playlist_screen'),
                        (e.StoriesScreen = 'stories_screen'),
                        (e.GenreScreen = 'genre_screen'),
                        (e.NewReleasesTabScreen = 'new_releases_tab_screen'),
                        (e.ChartTabScreen = 'chart_tab_screen'),
                        (e.MixesTabScreen = 'mixes_tab_screen'),
                        (e.RecentlyPlayedScreen = 'recentlyPlayedScreen'),
                        (e.LikedScreen = 'likedScreen'),
                        (e.PodcastsTabScreen = 'podcasts_tab_screen'));
                })(W || (n.LandingNavigatedTo = W = {})),
                (function (e) {
                    ((e.User = 'user'), (e.Smart = 'smart'), (e.Editor = 'editor'), (e.Liked = 'liked'), (e.Chart = 'chart'), (e.Unknown = 'unknown'));
                })(B || (n.PlaylistTypes = B = {})),
                (function (e) {
                    ((e.AlbumListScreen = 'album_list_screen'),
                        (e.PlaylistListScreen = 'playlist_list_screen'),
                        (e.PlaylistScreen = 'playlist_screen'),
                        (e.AlbumScreen = 'album_screen'),
                        (e.TreesScreen = 'trees_screen'),
                        (e.StoriesScreen = 'stories_screen'),
                        (e.Link = 'link'));
                })(I || (n.MainNavigatedTo = I = {})),
                (function (e) {
                    ((e.Square = 'square'), (e.Rectangle = 'rectangle'), (e.RectangleWithRecently = 'rectangle_with_recently'), (e.Unknown = 'unknown'));
                })(j || (n.WidgetType = j = {})));
        },
        40371: (e, n, t) => {
            e.exports = t(542);
        },
        88204: (e, n, t) => {
            t.d(n, { eO: () => d, PA: () => k });
            var r,
                i,
                o = t(33660),
                s = t(74631);
            if (!s.useState) throw Error('mobx-react-lite requires React with Hooks support');
            if (!o.Gn) throw Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
            var c = t(71910);
            function a(e) {
                e();
            }
            function l(e) {
                return (0, o.yl)(e);
            }
            var _ = !1;
            function d(e) {
                _ = e;
            }
            var u = (function () {
                    function e(e) {
                        var n = this;
                        (Object.defineProperty(this, 'finalize', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                            Object.defineProperty(this, 'registrations', { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
                            Object.defineProperty(this, 'sweepTimeout', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'sweep', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    (void 0 === e && (e = 1e4), clearTimeout(n.sweepTimeout), (n.sweepTimeout = void 0));
                                    var t = Date.now();
                                    (n.registrations.forEach(function (r, i) {
                                        t - r.registeredAt >= e && (n.finalize(r.value), n.registrations.delete(i));
                                    }),
                                        n.registrations.size > 0 && n.scheduleSweep());
                                },
                            }),
                            Object.defineProperty(this, 'finalizeAllImmediately', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    n.sweep(0);
                                },
                            }));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'register', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, n, t) {
                                (this.registrations.set(t, { value: n, registeredAt: Date.now() }), this.scheduleSweep());
                            },
                        }),
                        Object.defineProperty(e.prototype, 'unregister', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.registrations.delete(e);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'scheduleSweep', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                void 0 === this.sweepTimeout && (this.sweepTimeout = setTimeout(this.sweep, 1e4));
                            },
                        }),
                        e
                    );
                })(),
                S = new ('undefined' != typeof FinalizationRegistry ? FinalizationRegistry : u)(function (e) {
                    var n;
                    (null == (n = e.reaction) || n.dispose(), (e.reaction = null));
                }),
                m = t(40371);
            function p(e) {
                e.reaction = new o.qT('observer'.concat(e.name), function () {
                    var n;
                    ((e.stateVersion = Symbol()), null == (n = e.onStoreChange) || n.call(e));
                });
            }
            var b = 'function' == typeof Symbol && Symbol.for,
                y = null != (i = null == (r = Object.getOwnPropertyDescriptor(function () {}, 'name')) ? void 0 : r.configurable) && i,
                g = b
                    ? Symbol.for('react.forward_ref')
                    : 'function' == typeof s.forwardRef &&
                      (0, s.forwardRef)(function (e) {
                          return null;
                      }).$$typeof,
                h = b
                    ? Symbol.for('react.memo')
                    : 'function' == typeof s.memo &&
                      (0, s.memo)(function (e) {
                          return null;
                      }).$$typeof;
            function k(e, n) {
                if (h && e.$$typeof === h)
                    throw Error(
                        "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
                    );
                if (_) return e;
                var t,
                    r,
                    i,
                    o = null != (i = null == n ? void 0 : n.forwardRef) && i,
                    c = e,
                    a = e.displayName || e.name;
                if (g && e.$$typeof === g && ((o = !0), 'function' != typeof (c = e.render)))
                    throw Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
                var d = function (e, n) {
                    return (function (e, n) {
                        if ((void 0 === n && (n = 'observed'), _)) return e();
                        var t,
                            r,
                            i = s.useRef(null);
                        if (!i.current) {
                            var o = {
                                reaction: null,
                                onStoreChange: null,
                                stateVersion: Symbol(),
                                name: n,
                                subscribe: function (e) {
                                    return (
                                        S.unregister(o),
                                        (o.onStoreChange = e),
                                        o.reaction || (p(o), (o.stateVersion = Symbol())),
                                        function () {
                                            var e;
                                            ((o.onStoreChange = null), null == (e = o.reaction) || e.dispose(), (o.reaction = null));
                                        }
                                    );
                                },
                                getSnapshot: function () {
                                    return o.stateVersion;
                                },
                            };
                            i.current = o;
                        }
                        var c = i.current;
                        if (
                            (c.reaction || (p(c), S.register(i, c, c)),
                            s.useDebugValue(c.reaction, l),
                            (0, m.useSyncExternalStore)(c.subscribe, c.getSnapshot, c.getSnapshot),
                            c.reaction.track(function () {
                                try {
                                    t = e();
                                } catch (e) {
                                    r = e;
                                }
                            }),
                            r)
                        )
                            throw r;
                        return t;
                    })(function () {
                        return c(e, n);
                    }, a);
                };
                return (
                    (d.displayName = e.displayName),
                    y && Object.defineProperty(d, 'name', { value: e.name, writable: !0, configurable: !0 }),
                    e.contextTypes && (d.contextTypes = e.contextTypes),
                    o && (d = (0, s.forwardRef)(d)),
                    (t = e),
                    (r = d = (0, s.memo)(d)),
                    Object.keys(t).forEach(function (e) {
                        v[e] || Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                    }),
                    d
                );
            }
            var v = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
            (!(function (e) {
                (e || (e = a), (0, o.jK)({ reactionScheduler: e }));
            })(c.unstable_batchedUpdates),
                S.finalizeAllImmediately);
        },
    },
]);
