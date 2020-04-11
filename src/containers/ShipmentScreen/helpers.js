
export const search = (searchText, data) => {
  if (data && !data.length) return []
  return data.reduce((acc, next) => {
    next.id &&
      (next.name.toLowerCase().includes(searchText.toLowerCase()) ||
      next.destination.toLowerCase().includes(searchText.toLowerCase()) ||
      next.origin.toLowerCase().includes(searchText.toLowerCase())) &&
      acc.push(next);
    return acc;
  }, []);
}
