export function getZodiacSign(month, day) {
  const signs = [
    { name: 'جدی', emoji: '♑️', from: [12, 22], to: [1, 19] },
    { name: 'دلو', emoji: '♒️', from: [1, 20], to: [2, 18] },
    { name: 'حوت', emoji: '♓️', from: [2, 19], to: [3, 20] },
    { name: 'حمل', emoji: '♈️', from: [3, 21], to: [4, 19] },
    { name: 'ثور', emoji: '♉️', from: [4, 20], to: [5, 20] },
    { name: 'جوزا', emoji: '♊️', from: [5, 21], to: [6, 20] },
    { name: 'سرطان', emoji: '♋️', from: [6, 21], to: [7, 22] },
    { name: 'اسد', emoji: '♌️', from: [7, 23], to: [8, 22] },
    { name: 'سنبله', emoji: '♍️', from: [8, 23], to: [9, 22] },
    { name: 'میزان', emoji: '♎️', from: [9, 23], to: [10, 22] },
    { name: 'عقرب', emoji: '♏️', from: [10, 23], to: [11, 21] },
    { name: 'قوس', emoji: '♐️', from: [11, 22], to: [12, 21] },
  ];

  for (const sign of signs) {
    const [fromM, fromD] = sign.from;
    const [toM, toD] = sign.to;

    if ((month === fromM && day >= fromD) || (month === toM && day <= toD)) {
      return sign;
    }
  }

  return { name: 'نامشخص', emoji: '❓' };
}
