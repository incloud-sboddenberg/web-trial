import './setPrototypeExtension'

test("Set equalities", () => {
    expect.assertions(4)
    const a = new Set([2, 1, 3])
    const b = new Set([1, 3, 2])
    const c = new Set([2, 1])
    const d = new Set()

    expect(a.equals(b)).toBeTruthy()
    expect(a.equals(c)).toBeFalsy()
    expect(a.equals(d)).toBeFalsy()
    expect(a.equals(a)).toBeTruthy()
})


test("Set Subset", () => {
    expect.assertions(5)    
    const a = new Set([1, 2, 4, 5])
    const b = new Set([1, 2])
    const c = new Set([1, 6])
    const d = new Set()
    expect(b.isASubsetOf(a)).toBeTruthy()
    expect(d.isASubsetOf(d)).toBeTruthy()
    expect(d.isASubsetOf(a)).toBeTruthy()
    expect(c.isASubsetOf(b)).toBeFalsy()
    expect(a.isASubsetOf(b)).toBeFalsy()
})
