/**
 * @file error.ts
 * @author Krisna PRanav
 * @version 1.0
 * @date 2025-05-22
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

import { log } from '../logging/log.ts';

export function notImplemented(): never {
  const error = new Error('Not Implemented');
  log({ severity: 'ERROR', error: 'NotImplemented', trace: error.stack });
    
  throw error;
}

export function notReached(msg?: string): never {
  const error = new Error(msg);
    
  log({
    severity: 'ERROR',
    error: 'NotReached',
    message: msg,
    trace: error.stack,
  });
  throw error;
}

export function assert(condition: boolean, msg?: string): asserts condition {
  if (!condition) {
    msg = msg ? `Failed Assertion: "${msg}"` : 'Failed Assertion';
    debugger;
    const error = new Error(msg);
    log({
      severity: 'ERROR',
      error: 'FailedAssertion',
      message: msg,
      trace: error.stack,
    });
    throw error;
  }
}