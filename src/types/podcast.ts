export interface Podcast {
  id: string;
  rss: string;
  type: string;
  email: string;
  extra: {
    url1: string;
    url2:string;
    url3: string;
    spotify_url: string;
    youtube_url: string;
    linkedin_url: string;
    wechat_handle: string;
    patreon_handle: string;
    twitter_handle: string;
    facebook_handle: string;
    amazon_music_url: string;
    instagram_handle: string;
  };
  image: string;
  title: string;
  country: string;
  website: string;
  language: string;
  genre_ids: number[];
  itunes_id: number;
  publisher: string;
  thumbnail: string;
  is_claimed: boolean;
  description: string;
  looking_for: {
    guests: boolean;
    cohosts: boolean;
    sponsors: boolean;
    cross_promotion: boolean;
  };
  has_sponsors: boolean;
  listen_score: number;
  total_episodes: number;
  listennotes_url: string;
  audio_length_sec: number;
  explicit_content: boolean;
  latest_episode_id: string;
  latest_pub_date_ms: number;
  earliest_pub_date_ms: number;
  has_guest_interviews: boolean;
  update_frequency_hours: number;
  listen_score_global_rank: string;
}

export interface BestPodcastsResponse {
  id: number;
  name: string;
  total: number;
  has_next: boolean;
  podcasts: Podcast[];
  parent_id: number;
  page_number: number;
  has_previous: boolean;
  listennotes_url: string;
  next_page_number: number;
  previous_page_number: number;
}

export interface Episode {
    id: string;
    link: string;
    audio: string;
    image: string;
    title: string;
    thumbnail: string;
    description: string;
    pub_date_ms: number;
    guid_from_rss: string;
    listennotes_url: string;
    audio_length_sec: number;
    explicit_content: boolean;
    maybe_audio_invalid: boolean;
    listennotes_edit_url: string;
    podcast: Podcast;
}

export interface PodcastDetails extends Podcast {
    episodes: Episode[];
    next_episode_pub_date: number;
} 