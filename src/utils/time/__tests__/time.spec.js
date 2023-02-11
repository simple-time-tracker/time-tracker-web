import { describe, it, expect } from 'vitest';
import {
  formatDuration,
  formatShortDate,
  formatLongDate,
  formatDurationInWords,
} from '../time';

describe('format duration', () => {
  const testData = [
    { seconds: 0, formatedDuration: '0:00:00' },
    { seconds: 1, formatedDuration: '0:00:01' },
    { seconds: 59, formatedDuration: '0:00:59' },
    { seconds: 60, formatedDuration: '0:01:00' },
    { seconds: 119, formatedDuration: '0:01:59' },
    { seconds: 120, formatedDuration: '0:02:00' },
    { seconds: 3599, formatedDuration: '0:59:59' },
    { seconds: 3600, formatedDuration: '1:00:00' },
    { seconds: 3600, formatedDuration: '1:00:00' },
    { seconds: 36000, formatedDuration: '10:00:00' },
    { seconds: 359999, formatedDuration: '99:59:59' },
    { seconds: 360000, formatedDuration: '100:00:00' },
    { seconds: 3600000, formatedDuration: '1000:00:00' },
  ];
  testData.forEach((testCase) => {
    it(`${testCase.seconds} second should be formated as ${testCase.formatedDuration}`, () => {
      expect(formatDuration(testCase.seconds)).toBe(testCase.formatedDuration);
    });
  });

  it('negative number should generate error', () => {
    expect(() => formatDuration(-1)).toThrow(
      new Error('Duration time should be not negative number')
    );
  });
});

describe('format short date', () => {
  it('should use MM/DD HH:mm format', () => {
    expect(formatShortDate('2014-02-11 11:30:30')).toBe('02/11 11:30');
  });

  it('should use YYYY-MM-DD HH:mm format', () => {
    expect(formatLongDate('2020-01-12 13:51:54')).toBe('2020-01-12 13:51');
  });

  describe('format distance in words', () => {
    const testData = [
      { milliseconds: 100, distanceInWords: '0 seconds' },
      { milliseconds: 1000, distanceInWords: '1 second' },
      { milliseconds: 2000, distanceInWords: '2 seconds' },
      { milliseconds: 59000, distanceInWords: '59 seconds' },
      { milliseconds: 60000, distanceInWords: '1 minute' },
      { milliseconds: 3540000, distanceInWords: '59 minutes' },
      { milliseconds: 5400000, distanceInWords: '1 hour' },
      { milliseconds: 1800000000, distanceInWords: '500 hours' },
    ];
    testData.forEach((testCase) => {
      it(`${testCase.milliseconds} second should be formated as ${testCase.distanceInWords}`, () => {
        expect(formatDurationInWords(testCase.milliseconds)).toBe(
          testCase.distanceInWords
        );
      });
    });
  });
});
