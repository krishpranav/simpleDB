/**
 * @file interfaces.ts
 * @author Krisna PRanav
 * @version 1.0
 * @date 2025-05-25
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

export interface ReadonlyJSONObject {
    readonly [key: string]: JSONValue;
}
  
export interface JSONObject extends ReadonlyJSONObject {
    [key: string]: JSONValue;
}
  
export type ReadonlyJSONArray = readonly ReadonlyJSONValue[];
  
export type JSONArray = JSONValue[];
  
export type ReadonlyJSONValue =
    | string
    | number
    | boolean
    | null
    | ReadonlyJSONArray
    | ReadonlyJSONObject
    | undefined; 
  
export type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONArray
    | JSONObject
    | ReadonlyJSONValue
    | undefined; 