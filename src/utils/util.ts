const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export function abbreviateNumber(value: number): string {
  if (!value) {
    return "0";
  }
  let newValue: string = value.toString();
  try {
    if (value >= 1000) {
      const suffixes = ["", "k", "m", "b", "t"];
      const suffixNum = Math.floor(value.toString().length / 3);
      let shortValue: number | string = 0;
      for (let precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum !== 0
            ? value / Math.pow(1000, suffixNum)
            : value
          ).toPrecision(precision)
        );
        const dotLessShortValue = shortValue
          .toString()
          .replace(/[^a-zA-Z 0-9]+/g, "");
        if (dotLessShortValue.length <= 2) {
          break;
        }
      }
      if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(1);
      }
      newValue = shortValue + suffixes[suffixNum];
    }
  } catch (err) {
    console.error(err);
    return value.toString();
  }
  return newValue;
}

export async function fetchWithTimeout(url: string, options: any = {}) {
  const { timeout = 5000 } = options;

  const abortController = new AbortController();
  const id = setTimeout(() => abortController.abort(), timeout);
  const response = await fetch(url, {
    ...options,
    signal: abortController.signal,
  });
  clearTimeout(id);
  return response;
}
