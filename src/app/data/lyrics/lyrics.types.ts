export interface TrackEntry {
  title: string;
  lyrics: string;
}

/** A single song (lyrics present) or an album (tracks present). */
export interface LyricsEntry {
  title: string;
  lyrics?: string;
  tracks?: TrackEntry[];
}
