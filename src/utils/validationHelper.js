export const isObjectEmpty = obj => (
    Object.values(obj).every(el => !el)
);
