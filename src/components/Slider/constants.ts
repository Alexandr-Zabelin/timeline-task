import { getButtonConfig } from './utils';

export const PREV_BUTTON_CONFIG = getButtonConfig('prev');
export const NEXT_BUTTON_CONFIG = getButtonConfig('next');

const BUTTON_GAP = 20;
// смещение кнопок по модулю = их размер + отступ между ними и слайдером
export const BUTTON_OFFSET = PREV_BUTTON_CONFIG.sizes.button + BUTTON_GAP;
