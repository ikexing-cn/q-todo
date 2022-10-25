import { describe, expect, it } from 'vitest'

function filterUndefined(obj: Array<string>) {
  return obj.filter(item => item !== undefined)
}

describe('syntax', () => {
  const regex = /^\/todo\s(add|list|remove|complete)\s?(\w+|\d?)?\s?(?:(.+)\s(\d))?/

  it('add', () => {
    const result = regex.exec('/todo add day a0一条新Todo 1') as Array<string>
    expect(filterUndefined(result)).toMatchInlineSnapshot(`
      [
        "/todo add day a0一条新Todo 1",
        "add",
        "day",
        "a0一条新Todo",
        "1",
      ]
    `)
  })

  it('remove', () => {
    const result = regex.exec('/todo remove 0') as Array<string>
    expect(filterUndefined(result)).toMatchInlineSnapshot(`
      [
        "/todo remove 0",
        "remove",
        "0",
      ]
    `)
  })

  it('complete', () => {
    const result = regex.exec('/todo complete 0') as Array<string>
    expect(filterUndefined(result)).toMatchInlineSnapshot(`
      [
        "/todo complete 0",
        "complete",
        "0",
      ]
    `)
  })

  it('list', () => {
    const result = regex.exec('/todo list') as Array<string>
    expect(filterUndefined(result)).toMatchInlineSnapshot(`
      [
        "/todo list",
        "list",
      ]
    `)
  })
})
