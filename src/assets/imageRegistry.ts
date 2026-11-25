import heroShowroomImg from './images/hero_honda_showroom_1795588509381.jpg';
import cd70RedImg from './images/bike_cd_70_1795588510104.jpg';
import cd70BlackImg from './images/bike_cd_70_black_1795589493255.jpg';
import cd70BlueImg from './images/bike_cd_70_blue_1795589493402.jpg';
import cd70DreamImg from './images/bike_cd_70_dream_1795588509851.jpg';
import pridorImg from './images/bike_pridor_1795588511463.jpg';
import cg125RedImg from './images/bike_cg_125_1795588512204.jpg';
import cg125BlackImg from './images/bike_cg_125_black_1795589493870.jpg';
import cg125sGoldImg from './images/bike_cg_125s_1795588512090.jpg';
import cb125fImg from './images/bike_cb_125f_1795588513352.jpg';
import cb150fRedImg from './images/bike_cb_150f_1795588512879.jpg';
import cb150fBlackImg from './images/bike_cb_150f_black_1795589495266.jpg';
import cb150fBlueImg from './images/bike_cb_150f_blue_1795589494625.jpg';
import cg150RedImg from './images/bike_cg_150_red_1795589495326.jpg';
import cg150GreenImg from './images/bike_cg_150_honda_1795588534133.jpg';
import iconEImg from './images/bike_icon_e_1795588513365.jpg';

export const BUNDLED_IMAGES = {
  heroShowroom: heroShowroomImg,
  cd70Red: cd70RedImg,
  cd70Black: cd70BlackImg,
  cd70Blue: cd70BlueImg,
  cd70Dream: cd70DreamImg,
  pridor: pridorImg,
  cg125Red: cg125RedImg,
  cg125Black: cg125BlackImg,
  cg125sGold: cg125sGoldImg,
  cb125f: cb125fImg,
  cb150fRed: cb150fRedImg,
  cb150fBlack: cb150fBlackImg,
  cb150fBlue: cb150fBlueImg,
  cg150Red: cg150RedImg,
  cg150Green: cg150GreenImg,
  iconE: iconEImg,
} as const;

const LEGACY_PATH_TO_BUNDLED: Record<string, string> = {
  '/src/assets/images/hero_honda_showroom_1795588509381.jpg': heroShowroomImg,
  '/src/assets/images/bike_cd_70_1795588510104.jpg': cd70RedImg,
  '/src/assets/images/bike_cd_70_black_1795589493255.jpg': cd70BlackImg,
  '/src/assets/images/bike_cd_70_blue_1795589493402.jpg': cd70BlueImg,
  '/src/assets/images/bike_cd_70_dream_1795588509851.jpg': cd70DreamImg,
  '/src/assets/images/bike_pridor_1795588511463.jpg': pridorImg,
  '/src/assets/images/bike_cg_125_1795588512204.jpg': cg125RedImg,
  '/src/assets/images/bike_cg_125_black_1795589493870.jpg': cg125BlackImg,
  '/src/assets/images/bike_cg_125s_1795588512090.jpg': cg125sGoldImg,
  '/src/assets/images/bike_cb_125f_1795588513352.jpg': cb125fImg,
  '/src/assets/images/bike_cb_150f_1795588512879.jpg': cb150fRedImg,
  '/src/assets/images/bike_cb_150f_black_1795589495266.jpg': cb150fBlackImg,
  '/src/assets/images/bike_cb_150f_blue_1795589494625.jpg': cb150fBlueImg,
  '/src/assets/images/bike_cg_150_red_1795589495326.jpg': cg150RedImg,
  '/src/assets/images/bike_cg_150_honda_1795588534133.jpg': cg150GreenImg,
  '/src/assets/images/bike_icon_e_1795588513365.jpg': iconEImg,
};

/**
 * Resolves either Vite-bundled asset URLs, legacy /src/assets/images/... paths
 * stored in LocalStorage, uploaded data: URLs, or external HTTPS URLs.
 */
export function resolveImageSrc(src: string): string {
  if (!src) return '';
  if (LEGACY_PATH_TO_BUNDLED[src]) {
    return LEGACY_PATH_TO_BUNDLED[src];
  }
  const normalized = src.startsWith('src/assets/') ? `/${src}` : src;
  if (LEGACY_PATH_TO_BUNDLED[normalized]) {
    return LEGACY_PATH_TO_BUNDLED[normalized];
  }
  return src;
}
