/**
 * @file algorithm.ts
 * @author Krisna PRanav
 * @version 6.0
 * @date 2025-05-15
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

export function bsearch<T>(arr: readonly T[], value: T, comparator: (x: T, y: T) => number = (x, y) => (x > y ? 1 : x < y ? -1 : 0)): number {
    if (!arr || arr.length <= 0) {
      return 0;
    }
  
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      const mid = ((start + end) / 2) | 0;
        const r = comparator(value, arr[mid]);
        
      if (r === 0) {
        return mid;
      }
        
      if (r < 0) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return comparator(value, arr[start]) > 0 ? start + 1 : start;
  }
  
  export function bsearch_idx(length: number, comparator: (idx: number) => number = (_idx) => { throw new Error('Bad comparator'); }): number {
    if (!length) {
      return -1;
    }
  
    let start = 0;
    let end = length - 1;
    
    while (start < end) {
      const mid = ((start + end) / 2) | 0;
      const r = comparator(mid);
        
      if (!r) {
        return mid;
      }
        
      if (r < 0) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
      
    const res = comparator(start) > 0 ? start + 1 : start;
    return res < length ? res : -1;
}