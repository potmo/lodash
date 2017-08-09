import baseSortedUniq from './.internal/baseSortedUniq.js'

/**
 * This method is like _.uniq except that it only works with sorted arrays. 
 * In the case the array is known to be sorted _.sortedUniq is faster than _.uniq
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * sortedUniq([1, 1, 2])
 * // => [1, 2]
 */
function sortedUniq(array) {
  return (array != null && array.length)
    ? baseSortedUniq(array)
    : []
}

export default sortedUniq
