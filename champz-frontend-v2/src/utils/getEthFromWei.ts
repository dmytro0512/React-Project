export function getEthFromWei(wei: bigint) {
  const weiInt = parseInt(wei.toString());
  const eth = weiInt / 1000000000000000000;
  return eth;
}
