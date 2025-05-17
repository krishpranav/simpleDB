/**
 * @file async.ts.ts
 * @author Krisna PRanav
 * @version 6.0
 * @date 2025-05-17
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

export interface SuccessResult<T> {
    status: 'success';
    result: T;
}
  
export interface ErrorResult {
    status: 'error';
    error: any;
}
  
export type PromiseResult<T> = SuccessResult<T> | ErrorResult;
  
export async function awaitPromises<T>(promises: Promise<T>[], returnResults: boolean = true): Promise<PromiseResult<T>[]> {
    if (!promises.length) {
      return Promise.resolve([]);
    }
  
    const res = await Promise.all<any>(
      promises.map(async (p) => {
        try {
          const res = await p;
          if (returnResults) {
            return { status: 'success', result: res };
          }
        } catch (err) {
          if (returnResults) {
            return { status: 'error', error: err };
          }
        }
      })
    );
  
    if (returnResults) {
      return res.filter((x) => x !== undefined);
    }
  
    return res;
}