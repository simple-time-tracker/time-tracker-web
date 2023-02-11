import { describe, it, expect } from 'vitest';
import PagingUtils from '../paging';

describe('paging utils', () => {
  it('should return first page, when last element of first page is deleted', () => {
    const items = [1];
    expect(PagingUtils.resolvePageNumber(items, 1)).toBe(1);
  });

  it('should return same page, when not deleting last item', () => {
    const items = [1, 2];
    expect(PagingUtils.resolvePageNumber(items, 5)).toBe(5);
  });

  it('should decrease page number, when deleting last element, not in first page', () => {
    const items = [1];
    expect(PagingUtils.resolvePageNumber(items, 5)).toBe(4);
  });

  it('should return first page, if current page is bellow one', () => {
    const items = [1];
    expect(PagingUtils.resolvePageNumber(items, 0)).toBe(1);
  });
});
