type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(a: any): ToBeOrNotToBe {
  return {
    toBe: function (b: any) {
      if (a !== b) {
        throw Error("Not Equal");
      }
      return true;
    },
    notToBe: function (b: any) {
      if (a === b) {
        throw Error("Equal");
      }
      return true;
    },
  };
}
