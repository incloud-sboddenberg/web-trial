/**
 * This file contains an extesion for the ECS6 Set structure.
 *
 * - The `.equals()` function will allow to compare two sets.
 * - The `.isASubsetOf()` function will allow to test if a set is a 
 * subset of the passed set.
 */


if (Set.prototype.equals)
    console.warn("Overriding existing Set.prototype.equals.")


Set.prototype.equals = function(set) {
    if (!set || set.length !== this.length) return false
    
    for (let element of this)
        if (!set.has(element))
            return false

    return true
}


if (Set.prototype.isASubsetOf)
    console.warn("Overriding existing Set.prototype.isASubsetOf.")

Set.prototype.isASubsetOf = function(set) {
    if (!set || this.length > set.length) return false

    if (this.length === 0) return true

    for (let element of this)
        if (!set.has(element))
            return false

    return true
}
