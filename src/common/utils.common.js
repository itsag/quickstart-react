/**
 * @method getUtcTimestamp
 * @description Returns a utc timestamp in milliseconds
 */
export const getUtcTimestamp = () => {
  return new Date().valueOf();
};
