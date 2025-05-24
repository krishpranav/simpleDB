/**
 * @file file-impl-interface.ts
 * @author Krisna PRanav
 * @version 1.0
 * @date 2025-05-24
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

export type SeekFrom = 'current' | 'start' | 'end';

export interface FileImpl<T> {
  open(path: string, write: boolean): Promise<T>;

  seek(handle: T, offset: number, from: SeekFrom): Promise<number>;

  read(handle: T, buf: Uint8Array): Promise<number | null>;

  truncate(handle: T, len: number): Promise<void>;

  write(handle: T, buf: Uint8Array): Promise<void>;

  close(handle: T): Promise<void>;

  flush(handle: T): Promise<void>;

  remove(path: string): Promise<boolean>;

  getCWD(): string;

  getTempDir(): Promise<string>;

  mkdir(path: string): Promise<boolean>;
}