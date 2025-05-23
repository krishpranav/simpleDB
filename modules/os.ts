/**
 * @file os.ts
 * @author Krisna PRanav
 * @version 1.0
 * @date 2025-05-23
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

import { isDeno, isNode } from './common.ts';
import { notReached } from './error.ts';

export type OperatingSystem =
  | 'darwin'
  | 'linux'
  | 'android'
  | 'windows'
  | 'freebsd'
  | 'netbsd'
  | 'aix'
  | 'solaris'
  | 'illumos';


export function getOS(): OperatingSystem {
  if (isDeno()) {
    return Deno.build.os;
  } else if (isNode()) {
    const os = require('node:os');
    return os.platform();
  }
  notReached('Platform not supported');
}

export function isMac(): boolean {
  return getOS() === 'darwin';
}

export function isLinux(): boolean {
  return getOS() === 'linux';
}

export function isWindows(): boolean {
  return getOS() === 'windows';
}