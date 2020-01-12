import { parse } from 'date-fns';
import { formatDuration, formatShortDate, formatLongDate } from '../time';

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
    expect(formatShortDate(parse('2014-02-11 11:30:30'))).toBe('02/11 11:30');
  });

  it('should use YYYY-MM-DD HH:mm format', () => {
    expect(formatLongDate(parse('2020-01-12T13:51:54.141854Z'))).toBe(
      '2020-01-12 15:51'
    );
  });
});
