const site = 'https://readcomicsonline.ru/uploads/manga/';

export const batmanEdition = 'batman-2016';
export const xmenEdition = 'xmen-2021';
export const darkAges = 'dark-ages-2021';
export const avengers = 'avengers-2016';
export const superman = 'superman-2016';
export const flash = 'the-flash-2016';

const structure = {
  numberEdition: '1',
  pageEdition: '01',
};

const formatImage = '.jpg';

const lengthNumberCheck = n => {
  // const toStringNumber = String(n);
  if (n === 0) {
    return String(n) + 1;
  }
  if (n < 0) {
    return '01';
  }
  if (n.toString().length === 1) {
    return '0' + String(n);
  } else {
    return String(n);
  }
};

export const ApiUrl = (comicEdition, numberEdition, numberPage) => {
  return `${site}${comicEdition}/chapters/${numberEdition}/${lengthNumberCheck(
    numberPage,
  )}${formatImage}`;
};
