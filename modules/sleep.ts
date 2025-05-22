/**
 * @file sleep.ts
 * @author Krisna PRanav
 * @version 1.0
 * @date 2025-05-22
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

export function msleep(n: number): void {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}
  
export function sleep(n: number): void {
    msleep(n * 1000);
}