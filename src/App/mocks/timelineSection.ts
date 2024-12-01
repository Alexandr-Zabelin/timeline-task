import { TimelineSectionData } from '@components/TimelineSection';

export const timelineSectionMockData: TimelineSectionData = {
  title: 'Исторические даты',
  periods: Array.from({ length: 6 }).map((_, idx) => ({
    id: idx.toString(),
    title: 'Искусство-' + idx,
    edges: { start: 2010 + idx * 2, end: 2012 + idx * 3 },
    details: Array.from({ length: 8 }).map((_, innerIdx) => ({
      id: innerIdx.toString(),
      title: `${2010 + idx * 2} - ${innerIdx}`,
      content:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'.slice(
          0,
          Math.random() * 131 + 100,
        ),
    })),
  })),
};
