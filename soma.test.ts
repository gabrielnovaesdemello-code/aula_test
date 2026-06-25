import test from "node:test";
import assert from "node:assert/strict";

import {soma} from "./index.js";

test("Deve somar dois números e retornar a soma",
  () => {assert.strictEqual(soma(1, 1), 2)}
)

test("Deve retornar erro se o usuario passar parametros que não são números",
  // @ts-ignore
  () => {assert.strictEqual(soma("string", true), "Me envie números!")}
)

test("Deve retornar erro se não tiver parametro",
  // @ts-ignore   
  () => {assert.strictEqual(soma(), "Me envie números!")}
)