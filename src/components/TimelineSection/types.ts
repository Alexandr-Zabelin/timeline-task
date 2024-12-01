interface EdgesData {
  start: number;
  end: number;
}

export interface DetailsData {
  title: string;
  content: string;
  id: string;
}

export interface PeriodData {
  id: string;
  /**
   * данные о границах периода
   */
  edges: EdgesData;
  /**
   * название периода
   */
  title: string;
  /**
   * события в нем
   */
  details: DetailsData[];
}

export interface TimelineSectionData {
  /**
   * заголовок секции
   */
  title: string;
  /**
   * данные для каждого периода
   */
  periods: PeriodData[];
}

export interface BaseTimelineSectionProps {
  data: TimelineSectionData;
}

export interface TimelineSectionProps extends BaseTimelineSectionProps {
  isMobile: boolean;
}
