/**
 * @file process.ts
 * @author Krisna PRanav
 * @version 1.0
 * @date 2025-05-20
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

import { isDeno, isNode } from './common.ts';
import { notReached } from './error.ts';

export async function exit(code: number): Promise<never> {
  if (isNode()) {
    const { exit } = await import('node:process');
    exit(code);
  } else if (isDeno()) {
    Deno.exit(code);
  }
  notReached('Platform not supported');
}