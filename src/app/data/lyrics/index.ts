import {LyricsEntry} from './lyrics.types';
import {godspeed} from './godspeed';
import {littleVoices} from './little-voices';
import {belong} from './belong';
import {iCantMakeYouLoveMe} from './i-cant-make-you-love-me';
import {halfMagic} from './half-magic';
import {matador} from './matador';
import {kairos} from './kairos';
import {shortFiction} from './short-fiction';
import {hestia} from './hestia';
import {anniversary} from './anniversary';
import {holidayParties} from './holiday-parties';

export type {LyricsEntry, TrackEntry} from './lyrics.types';

export const LYRICS: Record<string, LyricsEntry> = {
  'godspeed': godspeed,
  'little-voices': littleVoices,
  'belong': belong,
  'i-cant-make-you-love-me': iCantMakeYouLoveMe,
  'half-magic': halfMagic,
  'matador': matador,
  'kairos': kairos,
  'short-fiction': shortFiction,
  'hestia': hestia,
  'anniversary': anniversary,
  'holiday-parties': holidayParties,
};
