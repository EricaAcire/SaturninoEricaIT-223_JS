function maskCard(CardNumber, maskChar = 'X') {
  const s = String(CardNumber);
  const len = s.length;

  if (len <= 10) return s; 

  const FirstHalf = s.slice(0, 6);
  const Middle = maskChar.repeat(Math.max(0, LengthMiddle));
  const SecondHalf = s.slice(-4);
  const LengthMiddle = len - 6 - 4;
  
  return FirstHalf + Middle + SecondHalf;
}


console.log(maskCard("4815154823541789"));         
console.log(maskCard("4815154823541789", "*"));    