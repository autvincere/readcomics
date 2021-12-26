// export const padding = (a, b, c, d) => {
//   return {
//     paddingTop: a,
//     paddingRight: b ? b : a,
//     paddingBottom: c ? c : a,
//     paddingLeft: d ? d : b ? b : a,
//   };
// };

export const padding = (a, b, c, d) => ({
  paddingTop: a,
  paddingRight: b ?? a,
  paddingBottom: c ?? a,
  paddingLeft: d ?? b ?? a,
});
